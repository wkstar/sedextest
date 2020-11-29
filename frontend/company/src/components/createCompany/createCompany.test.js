import {
  fireEvent,
  getNodeText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import CreateCompany from './CreateCompany';
import createCompanyService from '../../services/createCompanyService';

jest.mock('../../services/createCompanyService');

const getProps = () => ({
  schema: [
    ['companyName', 'Company Name', 'Sedex'],
    ['companyType', 'Company Type', 'NGO'],
  ],
});

describe('createCompany', () => {
  it('renders the form', () => {
    const props = getProps();
    const { asFragment } = render(<CreateCompany {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('validation', () => {
    it('validates missing company type', async () => {
      const props = getProps();
      render(<CreateCompany {...props} />);

      fireEvent.change(screen.getByLabelText('Company Name'), {
        target: { value: 'oo' },
      });

      // Submit form
      fireEvent.click(screen.getByText('Create the Company'));

      await waitFor(() => {
        screen.getByText('Company Type must be set');
      });

      expect(screen.getByText('Company Type must be set')).toBeTruthy();
      expect(
        screen.getByText('Company Name must be greater than 3 characters')
      ).toBeTruthy();
    });
  });

  describe('success', () => {
    it('submits form', async () => {
      createCompanyService.mockResolvedValueOnce({ id: 'ego' });

      const props = getProps();
      render(<CreateCompany {...props} />);

      fireEvent.change(screen.getByLabelText('Company Name'), {
        target: { value: 'BitOfMe Ltd' },
      });

      fireEvent.change(screen.getByLabelText('Company Type'), {
        target: { value: 'SME' },
      });

      // Submit form
      fireEvent.click(screen.getByText('Create the Company'));

      let success;
      await waitFor(() => {
        success = screen.getByTestId('success');
      });

      expect(getNodeText(success)).toEqual(
        'Company with id "ego" successfully created'
      );

      expect(createCompanyService).toHaveBeenCalledTimes(1);
      expect(createCompanyService).toHaveBeenCalledWith({
        companyName: 'BitOfMe Ltd',
        companyType: 'SME',
      });
    });
  });
});
