import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
});
