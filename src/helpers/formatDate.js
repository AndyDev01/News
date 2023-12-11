export const formatDate = (date) => {
    const options ={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    let formattedDate = date.toLocaleDateString('ru-RU', options);
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    return formattedDate;
}