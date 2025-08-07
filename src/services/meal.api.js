// src/api/meal.api.js

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'; // adjust as needed

// Mark Dinner Day 1 as Done
export const markDinnerDay1 = async (memberUniqueCode) => {
  try {
    console.log('markDinnerDay1 ' + memberUniqueCode)
    const response = await axios.patch(`${BASE_URL}/api/meal/dinner-day1/markDone/${memberUniqueCode}`);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'Unknown error' };
  }
};

// Mark Lunch Day 1 as Done
export const markLunchDay1 = async (memberUniqueCode) => {
  try {
    console.log('markLunchDay1 ' + memberUniqueCode)
    const response = await axios.patch(`${BASE_URL}/api/meal/lunch-day1/markDone/${memberUniqueCode}`);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'Unknown error' };
  }
};

// Mark Breakfast Day 2 as Done
export const markBreakfastDay2 = async (memberUniqueCode) => {
  try {
    console.log('markBreakfastDay2 ' + memberUniqueCode)
    const response = await axios.patch(`${BASE_URL}/api/meal/breakfast-day2/markDone/${memberUniqueCode}`);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'Unknown error' };
  }
};
