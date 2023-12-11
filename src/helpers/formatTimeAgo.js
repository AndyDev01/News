export const formatTimeAgo = (dateString) => {
    const TIME_UNITS = {
        SECOND: 1,
        MINUTE: 60,
        HOUR: 3600,
        DAY: 86400
    };

    const now = new Date();
    const date = new Date(dateString);
    const secondPast = (now.getTime() - date.getTime()) / 1000;

    if (secondPast < TIME_UNITS.MINUTE) {
        return `${Math.floor(secondPast)}s ago`;
    }
    if (secondPast < TIME_UNITS.HOUR) {
        return `${Math.floor(secondPast / TIME_UNITS.MINUTE)}m ago`;
    }
    if (secondPast <= TIME_UNITS.DAY) {
        return `${Math.floor(secondPast / TIME_UNITS.HOUR)}h ago`;
    }
    if (secondPast > TIME_UNITS.DAY){
        const day = Math.floor(secondPast / TIME_UNITS.DAY);
        return day === 1 ? `${day} day ago` : `${day} days ago`;
    }
};
