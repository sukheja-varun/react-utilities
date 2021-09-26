import { useState } from 'react';

const useToggle = (
  defaultValue: boolean = true
): [boolean, (valueToSet?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = (valueToSet: boolean = !value) => {
    setValue(valueToSet);
  };

  return [value, toggleValue];
};

export default useToggle;
