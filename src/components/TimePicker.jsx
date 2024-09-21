import React from 'react'
import styled from "styled-components";

const TimePickerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 5px;
  margin-top: 5px;
  items-center: center;
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

const TimePicker = ({ times, onTimeSelect }) => {
  return (
    <TimePickerContainer>
      {times.map((time) => (
        <TimeSlot key={time} onClick={() => onTimeSelect(time)}>
          {time}
        </TimeSlot>
      ))}
    </TimePickerContainer>
  );
};

export default TimePicker