import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(null);
  const [inPending, setIsPending] = useState(true);

  const handleSetState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem(key));
    console.log("value", value);

    if (value === null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }

    setState(value === null ? initialValue : value);
    setIsPending(false);
  }, []);

  return [state, handleSetState, inPending];
};

export default useLocalStorage;
