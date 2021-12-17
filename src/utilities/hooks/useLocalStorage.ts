import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

type SetValue<T> = Dispatch<SetStateAction<NullOrT<T>>>;
type Remove = () => void;
type Handler<T> = [NullOrT<T>, SetValue<T>, Remove];
type NullOrT<T> = null | T;

export default function useLocalStorage<T>(
  id: string,
  key: string,
  defaultValue: T | null = null
): Handler<T> {
  const getValue = useCallback(() => {
    const storageValueInString = window.localStorage.getItem(key);
    return storageValueInString ? JSON.parse(storageValueInString) : null;
  }, [key]);

  function getInitialValue(): NullOrT<T> {
    const storageValue = getValue();
    if (storageValue != null) {
      return storageValue;
    }

    defaultValue &&
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }

  const [_value, _setValue] = useState<NullOrT<T>>(getInitialValue);

  const setValue: SetValue<T> = (valueOrCb) => {
    const newValue =
      valueOrCb instanceof Function ? valueOrCb(_value) : valueOrCb;
    window.localStorage.setItem(key, JSON.stringify(newValue));
    EmitEvent(_value, newValue);
  };

  const EmitEvent = (oldValue: any, newValue: any) => {
    window.dispatchEvent(
      new CustomEvent('local-storage', {
        detail: {
          key,
          oldValue: JSON.stringify(oldValue),
          newValue: JSON.stringify(newValue),
        },
      })
    );
  };

  const remove: Remove = () => {
    window.localStorage.removeItem(key);
    EmitEvent(_value, null);
  };

  useEffect(() => {
    const listenStorageChange = (e: any) => {
      const storageValue = getValue();
      _setValue(storageValue);
    };
    // check for changes across windows
    window.addEventListener('storage', listenStorageChange);
    // check for changes across same window
    window.addEventListener('local-storage', listenStorageChange);

    return () => {
      window.removeEventListener('storage', listenStorageChange);
      window.removeEventListener('local-storage', listenStorageChange);
    };
  }, [getValue]);

  return [_value, setValue, remove];
}
