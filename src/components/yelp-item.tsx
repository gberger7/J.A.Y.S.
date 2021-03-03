import React from 'react';
import styled from 'styled-components';
import { Business } from '../jays-types';
import { RatingToEmoji } from '../Utils/rating-to-emoji';
import { StarRatings } from '../Utils/star-ratings';

interface Props {
    business: Business;
}

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 50% 20%;
    background-color: white;
    color: #2e4e94;
    min-height: 200px;
    width: 100%;

    @media (max-width: 860px) {
        grid-template-rows: 50% 35% 15%;
        grid-template-columns: 100%;
        min-height: 400px;
    }
`;

const MainContent = styled.div`
    padding-left: 1rem;
`;

const ImgWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
`;

const Title = styled.h1`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    margin-top: 0.5rem;

    strong {
        font-size: 1.3rem;
    }
`;

const RatingTitle = styled.h1`
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 1rem;
    @media (max-width: 860px) {
        margin-right: 0.5rem;
        margin-bottom: 0;
    }
`;

const Address = styled.p`
    font-size: 1rem;
    margin: 0;
`;

const Price = styled.p`
    font-size: 0.9rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
`;

const PhoneNumber = styled.a`
    font-size: 0.9rem;
`;

const Ratings = styled.div`
    border-left: #aeaec7 solid 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 860px) {
        flex-direction: row;
        border-left: none;
        border-top: #aeaec7 solid 1px;
    }
`;

const RatingCount = styled.div`
    font-size: 0.9rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    @media (max-width: 860px) {
        margin-left: 0.4rem;
        margin-top: 0;
    }
`;

const Stars = styled.span`
    display: block;
    font-size: 0.8rem;
`;

const Emoji = styled.span`
    font-size: 2.6rem;
    display: block;
    @media (max-width: 860px) {
        margin-right: 0.4rem;
        margin-bottom: 0;
    }

`;

const YelpItem: React.FC<Props> = (props) => {

    return (
        <ItemWrapper>
            <ImgWrapper style={{backgroundImage: `url(${props.business.image_url})`}}>
                {/* <img src={props.business.image_url} alt={props.business.name}/> */}
            </ImgWrapper>
            <MainContent>
                <Title>
                    <strong>{props.business.name}</strong> - {props.business.location.city}
                </Title>
                <Address>
                    {props.business.location.address1}
                </Address>
                <Price>
                    {props.business.price}
                </Price>
                <PhoneNumber href={`tel:${props.business.phone}`}>
                    {props.business.display_phone}
                </PhoneNumber>
            </MainContent>
            <Ratings>
                <RatingTitle>Rating:</RatingTitle>
                <Emoji>
                {RatingToEmoji(props.business.rating)}
                </Emoji>
                <Stars>
                {StarRatings(props.business.rating, props.business.id)} 
                </Stars>
                <RatingCount>
                {`(${props.business.review_count})`} 
                </RatingCount>
            </Ratings>
        </ItemWrapper>
    )
}

export default YelpItem;