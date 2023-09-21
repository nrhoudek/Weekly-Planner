import Day from '../Day/Day';

export default function Week() {
    const days = [];
    const localStorageKeys = [
        'Monday Tasks',
        'Tuesday Tasks',
        'Wednesday Tasks',
        'Thursday Tasks',
        'Friday Tasks',
        'Saturday Tasks',
        'Sunday Tasks',
    ];

    for (let i = 1; i <= 7; i++) {
        days.push(
            <Day key={i} storageKey={localStorageKeys[i]} dateModifier={i} />
        );
    }

    return <div className='flex gap-8 flex-wrap'>{days}</div>;
}
