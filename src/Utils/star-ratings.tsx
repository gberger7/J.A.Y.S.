import { BsStarFill } from 'react-icons/bs';

export const StarRatings = (rating: number, businessId: string) => {
    const roundedRating = Math.round(rating);
    const ratingsArr: JSX.Element[] = [];
    for (let i = 0; i < roundedRating; i++) {
        ratingsArr.push(<BsStarFill key={businessId + "-star-" + i }/>);
    }
    return ratingsArr;
}
