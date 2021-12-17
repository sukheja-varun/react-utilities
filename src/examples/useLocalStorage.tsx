import React from 'react';
import useLocalStorage from '../utilities/hooks/useLocalStorage';

const COne = () => {
  const [value, setValue, remove] = useLocalStorage('C-1', 'myKey', 1);

  return (
    <>
      <h1>this is C-1:{value}</h1>
      <button onClick={() => setValue(Math.random())}>Set Value</button>
      <button onClick={remove}>Remove Key</button>
    </>
  );
};

const CTwo = () => {
  const [value, setValue, remove] = useLocalStorage('C-2', 'myKey');

  return (
    <>
      <h1>this is C-2:{value}</h1>
      <button onClick={() => setValue(Math.random())}>Set Value</button>
      <button onClick={remove}>Remove Key</button>
    </>
  );
};

const CThree = () => {
  const [value, setValue, remove] = useLocalStorage<boolean>(
    'C-3',
    'myBool',
    true
  );

  return (
    <>
      <h1>{`this is C-3:${value}`}</h1>
      <button onClick={() => setValue(!value)}>Set Value</button>
      <button onClick={remove}>Remove Key</button>
    </>
  );
};

const useLocalStorageExample = () => {
  return (
    <div>
      <h1>Hello</h1>
      <COne />
      <CTwo />
      <CThree />
    </div>
  );
};
export default useLocalStorageExample;
