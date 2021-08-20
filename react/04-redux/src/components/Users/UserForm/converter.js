import { INITIAL_STATE } from '../constants';

export const getInitialValues = user => (user ? ({
    ...user,
    // age: +user.age
}) : INITIAL_STATE);

export const getRequestPayload = values => values;

function numberParse(str) {
    str = String(str);
    return str.padStart(2, "0");
}

export const getDate = millisecond => {
    const date = new Date(millisecond);
    return `${date.getFullYear()}-${numberParse(date.getMonth() + 1)}-${numberParse(date.getDate())} ${numberParse(date.getHours())}:${numberParse(date.getMinutes())}`
}
