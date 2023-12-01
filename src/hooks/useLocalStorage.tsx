import { useState, useEffect, useCallback } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

const useLocalStorage = <T extends Object>(
    key: string,
    initialValue: T
): [T, SetValue<T>] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue: SetValue<T> = useCallback(
        (value) => {
            const updatedValue = value instanceof Function ? value(storedValue) : value;
            setStoredValue(updatedValue);
            window.localStorage.setItem(key, JSON.stringify(updatedValue));
        },
        [key, storedValue]
    );

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key) {
                setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key, initialValue]);

    return [storedValue, setValue];
}

export default useLocalStorage;
