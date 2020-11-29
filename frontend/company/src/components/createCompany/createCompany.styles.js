import styled from '@emotion/styled';

export const CreateCompanyForm = styled.form({
  display: 'flex',
  justifyContent: 'center',
});

export const FormContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  margin: 20,
  width: 800,
});

export const MainTitle = styled.h1();

export const FormRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 10,
  minHeight: 30,
});

export const FormCol = styled.div(
  {
    display: 'flex',
  },
  ({ isLarge }) => ({
    flexBasis: isLarge ? '300%' : '100%',
  })
);

export const FormErrorBox = styled.div({ padding: 5 }, ({ error }) => {
  return {
    border: error ? '1px solid red' : 0,
  };
});

export const FormSubmit = styled.input({ marginTop: 40 });

export const FormSuccess = styled.div({ fontSize: 40 });

export const FormReset = styled.button({
  fontSize: 20,
  marginTop: 40,
  width: 300,
});
