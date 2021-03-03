import React from 'react'
import styled from 'styled-components';

const TextField = styled.input`
    color: #f398a0;
    font-weight: bold;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 8px solid white;
    font-size: 3.7rem;
    font-size: clamp(2rem, 7vw, 3.7rem);
    display: block;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    transition: border 0.2s ease-in;
    width: 100%;

    &:focus { 
        border-color: #f398a0;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #e1abaf;
        font-weight: bold;
        text-transform: lowercase;
        opacity: 0.7; /* Firefox */
    }
    
`;

export default TextField;