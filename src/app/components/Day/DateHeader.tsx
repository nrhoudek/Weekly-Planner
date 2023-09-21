import { useState, useEffect } from 'react';
import moment from 'moment';

type dateHeaderProps = {
    dateModifier: number;
};

export default function DateHeader({ dateModifier }: dateHeaderProps) {
    const [date, setDate] = useState<String>();
    const [isToday, setIsToday] = useState<Boolean>(false);

    useEffect(() => {
        const displayDate = moment()
            .isoWeekday(dateModifier)
            .format('ddd, MMM. Do');

        setDate(displayDate);

        const today = moment();
        const taskListDate = moment().isoWeekday(dateModifier);

        moment(taskListDate).isSame(today, 'day') && setIsToday(true);
    }, []);

    return (
        <h2 className='text-2xl mb-2 text-slate-700 font-bold'>
            {isToday && <span className='text-blue-700'>(Today) </span>}
            {date}
        </h2>
    );
}