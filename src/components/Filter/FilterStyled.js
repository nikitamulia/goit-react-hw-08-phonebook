import styled from "styled-components";

export const Box= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const Text = styled.p`
font-size: 25px;
`
export const Input = styled.input`
width: 500px;
outline: none;
height: 34px;
padding-left: 55px;
font-size: 18px;
line-height: 27px;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 0.5px, solid;
border-color: #e7eaf2;

:focus {
border-color: #0396FF;
}

::placeholder {
    color: #e7eaf2;
    text-align: left;
  }

@media screen and (max-width: 768px) {
    width: 280px;
    height: 32px;
  }
`