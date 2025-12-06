import { useState, useEffect } from 'react';

export const useStorage = (key, defaultValue, storageObject = localStorage) => {
  const [value, setValue] = useState(() => {
    try {
      const savedItem = storageObject.getItem(key);
      if (savedItem !== null) {
        return JSON.parse(savedItem);
      }
      return defaultValue;
    } catch (error) {
      console.error("Error reading storage", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      storageObject.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to storage", error);
    }
  }, [key, value, storageObject]);

  const remove = () => {
    setValue(defaultValue);
    storageObject.removeItem(key);
  };

  return [value, setValue, remove];
};