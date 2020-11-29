import get from 'lodash.get';
import { FormRow, FormCol, FormErrorBox } from './createCompany.styles';

const FormError = ({ error }) => {
  return <FormErrorBox error={error}>{error?.message}</FormErrorBox>;
};

const MIN_CHARACTERS = 3;

const createCompanyRow = ({ name, title, placeholder, register, errors }) => {
  return (
    <FormRow key={name}>
      <FormCol>
        <label htmlFor={name}>{title}</label>
      </FormCol>
      <FormCol>
        <input
          autoComplete="off"
          id={name}
          name={name}
          ref={register({
            minLength: {
              value: MIN_CHARACTERS,
              message: `${title} must be greater than ${MIN_CHARACTERS} characters`,
            },
            required: `${title} must be set`,
          })}
          placeholder={`e.g. ${placeholder}`}
        />
      </FormCol>
      <FormCol isLarge>
        <FormError error={get(errors, name)} />
      </FormCol>
    </FormRow>
  );
};

export default createCompanyRow;
