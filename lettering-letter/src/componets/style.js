import styled from 'styled-components';

import React from 'react';

export const StyledInput = styled.input`
    width: 70%;
    padding: 10px;
    font-size: 15px;

`

export const StyledButton = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    transition: 0.5s;

    &:hover {
     background-color: antiquewhite;
    }

`

export const UlLetterContainer = styled.ul`
    background-color: violet;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
`

export const StyledText = styled.p`
    margin-top: 5rem;
    font-size: 25px;
    line-height: 1.5;

`

export const StyledList = styled.li`
    list-style: none;
`
