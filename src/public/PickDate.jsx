import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from '../components'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import path from '../utils/path';

const PickDate = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const times = [
        "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30",
        "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00"
    ];

    const filterAvailableTimes = () => {
        if (!selectedDate) return times;

        const now = new Date();
        const isToday = selectedDate?.toDateString() === now.toDateString();

        if (isToday) {
            const currentMinutes = now.getHours() * 60 + now.getMinutes();
            return times.filter((time) => {
                const [hours, minutes] = time.split(':').map(Number);
                const timeInMinutes = hours * 60 + minutes;
                return timeInMinutes > currentMinutes;
            });
        }
        return times;
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const isNotSunday = (date) => {
        const day = date.getDay();
        return day !== 0;
    };

    const getDayClassName = (date) => {
        const day = date.getDay();
        if (day === 0) {
            return "sunday";
        }
        return "";
    };

    const handleSaveDateTime = (selectedDate, selectedTime) => {
        const dateString = selectedDate?.toISOString().split('T')[0];
        const combinedDateTime = `${dateString} ${selectedTime}`;

        localStorage.setItem('selectedDateTime', combinedDateTime);
    };

    useEffect(() => {
        if (selectedDate && selectedTime) {
            handleSaveDateTime(selectedDate, selectedTime);
            navigate(`/${path.CONFIRM}`);
        }
    }, [selectedTime, selectedDate, navigate])
    return (
        <div className="mt-28">
            <div className='tablet:w-[100%] px-2 phone:w-[100%] tablet:flex  phone:flex tablet:flex-col phone:flex-col tablet:items-center       phone:items-center  w-main mx-auto bg-sub-main p-6 flex gap-5 book rounded-lg'>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    inline
                    filterDate={isNotSunday}
                    dayClassName={getDayClassName}
                    locale="es"
                />

                {selectedDate && (
                    <>
                        <TimePicker times={filterAvailableTimes()} onTimeSelect={handleTimeSelect} />
                    </>
                )}
            </div>
        </div>
    )
}

export default PickDate