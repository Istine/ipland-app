import React from "react";

export default function useLocalStorage(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse }
) {
  const [state, setState] = React.useState(() => {
    const valueInStore = window.localStorage.getItem(key);
    if (valueInStore) {
      return deserialize(valueInStore);
    }
    return defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }

    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState];
}
