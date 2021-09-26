import { useRef, useState } from 'react';

export default function useDebouncedState<T>(
  initialValue: T,
  timer: number
): [T, (newValue: T) => void] {
  const [value, setValue] = useState(initialValue);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const updateValue = (newValue: T) => {
    console.log('new value', newValue);
    debounce(setNewValue, timer, newValue);
  };

  const setNewValue = (val: T) => {
    console.log('value going to set', val);
    setValue(val);
  };

  const debounce = (callback: any, timer: number, ...params: T[]) => {
    if (timerId.current) clearTimer();
    timerId.current = setTimeout(callback, timer, params);
    console.log('new timer created', timerId.current);
  };

  const clearTimer = () => {
    console.log('clearing timer', timerId.current);

    if (!timerId.current) return;

    clearTimeout(timerId.current);
    timerId.current = null;
  };

  return [value, updateValue];
}
