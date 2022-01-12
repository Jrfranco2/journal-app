import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [values, setValues] = useState(initialForm);

  const reset = (newFormState = initialForm) => setValues(newFormState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
