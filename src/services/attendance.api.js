import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'; // adjust as needed

export const markAttendance = async (memberUniqueCode) => {
  try {
    console.log('markAttendance ' + memberUniqueCode)
    const response = await axios.patch(`${BASE_URL}/api/attendance/markPresent/${memberUniqueCode}`);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'Unknown error' };
  }
};