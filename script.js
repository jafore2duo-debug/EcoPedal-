// Current Date and Time (UTC)
// YYYY-MM-DD HH:MM:SS
const currentDateAndTime = () => {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
    return formattedDate;
};

console.log(currentDateAndTime());