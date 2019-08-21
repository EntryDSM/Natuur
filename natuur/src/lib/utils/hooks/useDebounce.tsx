import React, { useState, useEffect } from "react";

export default function useDebounce(text: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(text);
    },                         delay);

    return () => {
      clearTimeout(handler);
    };
  },        [text]);

  return debounceValue;
}
