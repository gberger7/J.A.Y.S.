

export const RatingToEmoji = (rating: number) => {
    if (Math.round(rating) === 0) {
        return "☠️";
    }
    if (Math.round(rating) === 1) {
        return "🤮";
    }
    if (Math.round(rating) === 2) {
        return "🤢";
    }
    if (Math.round(rating) === 3) {
        return "😐";
    }
    if (Math.round(rating) === 4) {
        return "😄";
    }
    if (Math.round(rating) === 5) {
        return "🥳";
    }
}
