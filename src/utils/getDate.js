// GET DATE
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
export const currentDate = `${yyyy}-${mm}-${dd}`;
export const lastYearDate = `${yyyy - 1}-${mm}-${dd}`;
export const nextYearDate = `${yyyy + 1}-${mm}-${dd}`;

