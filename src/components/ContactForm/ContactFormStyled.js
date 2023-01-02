import styled from "styled-components";

export const Form = styled.form`
    width: 400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
`
export const Input = styled.input`
  width: 400px;
  margin-bottom: 20px;
  outline: none;
  height: 30px;
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


`;

export const Button = styled.button`
display: block;
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  background-color: #24cca7;
  border-color: transparent;
  outline: none;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;

  :hover,
  :focus {
    border: 1px solid #24cca7;
    color: #24cca7;
    background-color: #ffffff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (max-width: 768px) {
    width: 280px;
  }
`
export const Text = styled.p`
font-size:25px;
color: #fff;
`