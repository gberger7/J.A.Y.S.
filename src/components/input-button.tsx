import styled from "styled-components";


const SubmitButton = styled.input.attrs({ 
    type: 'submit',
    value: 'Submit'
  })`
    background: #f398a0;
    color: #fff;

    margin-bottom: 0;
    padding: 0.7rem 1.8rem;

    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;

    border-radius: 10rem;
    border: none;
    box-shadow: 0px;
    outline: none;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #f36060;
    }
    &:disabled {
      opacity: 0.5;
      cursor: unset;
      
    }
    &:disabled:hover {
      background: #f398a0;
      
    }
  `

  export default SubmitButton;