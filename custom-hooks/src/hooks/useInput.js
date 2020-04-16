import React from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue(initialValue);
  };

  const clearValue = () => {
    setValue('');
  };

  return [value, onChange, resetValue, clearValue];
};

export default useInput;
