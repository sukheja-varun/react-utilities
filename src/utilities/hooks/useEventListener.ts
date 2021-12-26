import { RefObject, useEffect, useRef } from 'react';

type EventListener = (event: Event) => void;

function useEventListener<T extends HTMLElement>(
  eventName: keyof WindowEventMap,
  listener: EventListener,
  element?: RefObject<T>,
  options: AddEventListenerOptions = {}
) {
  const savedListener = useRef<EventListener>();
  const { capture, passive, once } = options;

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    const targetElement = element?.current || window;

    // checking if addEventListener is supported
    const isSupported = targetElement && targetElement?.addEventListener;
    if (!isSupported) {
      return;
    }

    // creating a new event listener which is passed to addEventListener and calls listener stored in Ref.
    const eventListener = (event: Event) =>
      savedListener.current && savedListener.current(event);
    const eventListenerOptions = { capture, passive, once };

    // Adding event listener
    targetElement.addEventListener(
      eventName,
      eventListener,
      eventListenerOptions
    );

    // Removing event listener on cleanup
    return () => {
      targetElement.removeEventListener(
        eventName,
        eventListener,
        eventListenerOptions
      );
    };
  }, [eventName, element, capture, passive, once]);
}

export default useEventListener;
