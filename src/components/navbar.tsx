
import React from 'react'
import styled from 'styled-components';

const Bar = styled.div`
    padding: 0rem 2rem;
    h1 {
        font-family: 'Lobster', cursive;
        font-size: 4rem;
        margin: 0;
    }
    h2 {
        font-family: "Cabin", sans-serif;
        font-weight: normal;
        font-size: 1.1rem;
        color: #f5b8be;
        margin: 0;
    }
`;

const Navbar = () => {

   return (
    <Bar>
        <h1>J.A.Y.S.</h1>
        <h2>(Just Awful Yelp Suggestions)</h2>
    </Bar>
   );
}

export default Navbar;