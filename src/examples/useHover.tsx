import React, { useRef } from 'react';
import useHover from '../utilities/hooks/useHover';

export default function useHoverExample() {
  const buttonRef = useRef(null);
  const isHovered = useHover(buttonRef);
  return (
    <div>
      Hover over this button: <button ref={buttonRef}>Hover Me</button>
      <h3>Status: {isHovered ? 'you hovered 👍🏻' : 'not hovered 👎🏻'}</h3>
    </div>
  );
}
