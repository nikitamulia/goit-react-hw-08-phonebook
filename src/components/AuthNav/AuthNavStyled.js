import styled from "styled-components";
import {NavLink } from "react-router-dom"; 

export const Link = styled(NavLink)`
    text-decoration: none;
    color:#0043ff;
    font-size: 20px;

    :hover,
    :focus {
      color: #fff;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
`
export const Box = styled.div`
display: flex;
gap: 10px;
`