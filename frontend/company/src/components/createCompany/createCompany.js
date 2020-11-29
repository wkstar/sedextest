import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import createCompanyRow from './createCompanyRow';
import Loading from '../loading/loading';

import {
  CreateCompanyForm,
  FormContainer,
  MainTitle,
  FormRow,
  FormSubmit,
  FormSuccess,
  FormReset,
} from './createCompany.styles';
import createCompanyService from '../../services/createCompanyService';

const CreateCompany = ({ schema }) => {
  const { register, handleSubmit, errors } = useForm();

  const [
    mutate,
    { data, isLoading, isIdle, isError, isSuccess, reset },
  ] = useMutation(async (requestData) => createCompanyService(requestData));

  return (
    <CreateCompanyForm onSubmit={handleSubmit(mutate)}>
      <FormContainer>
        <MainTitle>Create a Company</MainTitle>

        {isIdle && (
          <>
            {schema.map(([name, title, placeholder]) =>
              createCompanyRow({
                name,
                title,
                placeholder,
                register,
                errors,
              })
            )}
            <FormRow>
              <FormSubmit type="submit" value="Create the Company" />
            </FormRow>
          </>
        )}

        {isLoading && <Loading data-testid="loading" />}

        {isSuccess && (
          <>
            <FormSuccess data-testid="success">
              Company with id "{data?.id}" successfully created
            </FormSuccess>
            <FormReset onClick={reset}>Create another company?</FormReset>
          </>
        )}

        {isError && (
          <>
            <div data-testid="error">
              <h2>Oops, something went wrong.</h2>
              There was an error when creating the company
            </div>
            <FormReset onClick={reset}>Try again?</FormReset>
          </>
        )}
      </FormContainer>
    </CreateCompanyForm>
  );
};

export default CreateCompany;
