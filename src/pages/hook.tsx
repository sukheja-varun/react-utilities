import React from 'react';
import { Link } from 'react-router-dom';

const Hooks = [
  'useToggle',
  'useDebouncedState',
  'useDebounce',
  'useOnClickOutside',
];

const Hook: React.FC = () => {
  return (
    <div>
      <h1>Hooks Examples</h1>
      <ul>
        {Hooks.map((hook) => (
          <li>
            <Link to={`example/${hook}`}>{hook}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Hook;
