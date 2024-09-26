import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TimePicker } from '../components';
import { useNavigate } from 'react-router-dom';
import path from '../utils/path';

const PickDate = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookedTimes, setBookedTimes] = useState([]); // State lưu giờ đã đặt

    const times = [
        "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30",
        "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00"
    ];

    // Gọi API từ Google Sheet để lấy giờ đã đặt
    useEffect(() => {
        const fetchBookedTimes = async () => {
            try {
                const response = await axios.get('https://script.google.com/macros/s/AKfycbxV4wEl9R0maF8KmcdijeZ1BBheiOMEEYRgFiDXrrwxMoleneQI3-ybdopVkrIgKwt1/exec');
                setBookedTimes(response.data); // Lưu dữ liệu giờ đã đặt vào state
            } catch (error) {
                console.error("Error fetching booked times:", error);
            }
        };

        fetchBookedTimes();
    }, []);

    console.log(bookedTimes)

    // Hàm lọc giờ khả dụng, loại bỏ các giờ đã đặt trong ngày được chọn
    const filterAvailableTimes = () => {
        if (!selectedDate) return times;

        const now = new Date();
        const isToday = selectedDate.toDateString() === now.toDateString();

        // Lọc giờ trong ngày hiện tại (nếu là hôm nay)
        let availableTimes = times;
        if (isToday) {
            const currentMinutes = now.getHours() * 60 + now.getMinutes();
            availableTimes = times.filter((time) => {
                const [hours, minutes] = time.split(':').map(Number);
                const timeInMinutes = hours * 60 + minutes;
                return timeInMinutes > currentMinutes;
            });
        }

        // Định dạng ngày được chọn thành 'dd/MM/yyyy'
        const formattedDate = selectedDate.toLocaleDateString('en-GB');

        // Lọc giờ đã đặt trong ngày được chọn
        const bookedTimesForDay = bookedTimes.filter(
            (timeSlot) => timeSlot.date === formattedDate // Kiểm tra nếu ngày đã đặt trùng với ngày được chọn
        );

        // Loại bỏ những giờ đã đặt
        return availableTimes.filter((time) => {
            return !bookedTimesForDay.some((bookedTime) => bookedTime.time === time); // Ẩn những giờ đã đặt
        });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const isNotSunday = (date) => {
        const day = date.getDay();
        return day !== 0; // Không cho phép chọn Chủ nhật
    };

    const getDayClassName = (date) => {
        const day = date.getDay();
        if (day === 0) {
            return "sunday"; // Thêm class cho Chủ nhật
        }
        return "";
    };

    const handleSaveDateTime = (selectedDate, selectedTime) => {
        const dateString = selectedDate?.toLocaleDateString('en-GB');
        localStorage.setItem('selectedDate', dateString);
        localStorage.setItem('selectedTime', selectedTime);
    };

    // Khi chọn ngày và giờ, lưu và điều hướng đến trang xác nhận
    useEffect(() => {
        if (selectedDate && selectedTime) {
            handleSaveDateTime(selectedDate, selectedTime);
            navigate(`/${path.CONFIRM}`);
        }
    }, [selectedTime, selectedDate, navigate]);

    return (
        <div className="mt-28">
            <div className="tablet:w-[100%] px-2 phone:w-[100%] tablet:flex phone:flex tablet:flex-col phone:flex-col tablet:items-center phone:items-center w-main mx-auto text-[#fff] bg-[#000] p-6 flex gap-5 book rounded-lg">
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
                    <TimePicker times={filterAvailableTimes()} onTimeSelect={handleTimeSelect} />
                )}
            </div>
        </div>
    );
};

export default PickDate;
