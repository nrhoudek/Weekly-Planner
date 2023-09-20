import { useEffect, useState } from 'react';
import { taskItem } from '../types/shared-types';

export default function useLocalStorage(
    key: string,
    initialValue: taskItem[]
): [taskItem[], (newList: taskItem[]) => void] {
    const [tasks, setTasks] = useState<taskItem[]>([]);

    function getLocalStorage() {
        try {
            const task = window.localStorage.getItem(key);
            return task ? JSON.parse(task) : initialValue;
        } catch (error) {
            console.error(
                `There was an error retrieving task with key ${key} from localStorage: `,
                error
            );
            return initialValue;
        }
    }

    const setLocalStorage = (task: taskItem[]) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(task));
            setTasks(task);
        } catch (error) {
            console.error(
                `There was an error setting task with key ${key} to localStorage: `,
                error
            );
        }
    };

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key) {
                try {
                    const newTask = JSON.parse(e.newValue || 'null');
                    setTasks(newTask);
                } catch (error) {
                    console.error(
                        `There was an error updating task with key ${key} to localStorage: `,
                        error
                    );
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);

    // Required to use localStorage. Without this we get a hydration error due to client content not matching server content (since there is no localStorage server side)
    useEffect(() => {
        setTasks(getLocalStorage);
    }, []);

    return [tasks, setLocalStorage];
}
