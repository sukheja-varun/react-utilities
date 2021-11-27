import { RefObject, useEffect } from 'react';

type Ref = RefObject<HTMLElement>;
type ClickHandler = (event: MouseEvent) => void;

const useOnClickOutside = (ref: Ref, clickHandler: ClickHandler) => {
  useEffect(() => {
    /**
     * @description listener for mouse event, checks if click outside and calls handler
     * @param event : Mouse Event
     */
    const clickListener = (event: MouseEvent) => {
      const refElement = ref.current;
      const clickedNode = event.target as Node;
      if (refElement && !refElement.contains(clickedNode)) {
        clickHandler(event);
      }
    };

    // attach listener to mousedown event
    document.addEventListener('mousedown', clickListener);
    // NOTE: similarly to mousedown we can also listen to 'touchstart' for touch screens

    return () => {
      // detach listener to avoid memory leaks
      document.removeEventListener('mousedown', clickListener);
    };
  }, [ref, clickHandler]);
};
export default useOnClickOutside;
