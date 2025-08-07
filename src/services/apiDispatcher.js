import { markAttendance } from './attendance.api.js';
import { markBreakfastDay2, markDinnerDay1, markLunchDay1 } from './meal.api.js'

export default async function dispatchAPI(route, data) {
    const normalizedRoute = route.trim().toLowerCase();

    switch (normalizedRoute) {
        case '/day1-attendance/mark-attendance':
            return markAttendance(data?.memberUniqueCode)
            
        case '/day1-lunch/mark-done':
            return markLunchDay1(data?.memberUniqueCode);

        case '/day1-dinner/mark-done':
            return markDinnerDay1(data?.memberUniqueCode);

        case '/day2-breakfast/mark-done':
            return markBreakfastDay2(data?.memberUniqueCode);
            
        default:
            throw new Error(`Unsupported route: ${normalizedRoute}`);
    }
}
