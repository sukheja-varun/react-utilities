import React from 'react';
import { Link } from 'react-router-dom';

const Hooks = [
  'useToggle',
  'useDebouncedState',
  'useDebounce',
  'useOnClickOutside',
  'useOnMount',
  'useOnUpdate',
  'useTimeout',
  'useInterval',
  'useCopyToClipboard',
  'useLocalStorage',
  'useEventListener',
  'useFetch',
  'useHover',
  'useSsr',
  'useStepper',
  'useScript',
];

const Hook: React.FC = () => {
  return (
    <div>
      <h1>Hooks Examples</h1>
      <ul>
        {Hooks.map((hook, index) => (
          <li key={index}>
            <Link to={`example/${hook}`}>{hook}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Hook;
