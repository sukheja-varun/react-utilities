import { RefObject, useState } from 'react';
import useEventListener from './useEventListener';

function useHover<T extends HTMLElement>(element: RefObject<T>) {
  const [isHovered, setIsHovered] = useState(false);

  useEventListener('mouseenter', () => setIsHovered(true), element);
  useEventListener('mouseleave', () => setIsHovered(false), element);

  return isHovered;
}

export default useHover;
