import React from 'react'
import styled from "styled-components";

const TimePicker = ({ times, onTimeSelect }) => {
  const TimePickerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${times.length === 0 ? 1 : 10}, 1fr);
  gap: 5px;
  margin-top: 5px;
  items-center: center;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);  
  }
`;

  const TimeSlot = styled.button`
  background-color: #333;
  color: white;
  padding: 5px 20px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  &:focus {
    background-color: orange;
    outline: none;
  }
`;
  return (
    <TimePickerContainer>
      {times.map((time) => (
        <TimeSlot key={time} onClick={() => onTimeSelect(time)}>
          {time}
        </TimeSlot>
      ))}
      {times.length === 0 && <span className='w-[100%] text-[25px] mt-4 text-[#333]'>There are no more times to book today. Please come back tomorrow</span>}
    </TimePickerContainer>
  );
};

export default TimePicker