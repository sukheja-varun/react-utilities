import React from 'react';
import { Link } from 'react-router-dom';

const Hook: React.FC = () => {
  return (
    <div>
      <h1>Hooks Examples</h1>
      <ul>
        <Link to="example/useToggle">useToggle</Link>
      </ul>
    </div>
  );
};
export default Hook;
