import React from 'react'
import styled from 'styled-components'

function PrimaButton({title}) {
    return (
        <PrimaButtonStyled title={title}>
            {title}
        </PrimaButtonStyled>
    )
}

const PrimaButtonStyled = styled.button`
    background-color: var(--primary-color);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    border: none;
    outline: none;
    width: ${({title}) => title === 'Send Email' ? '100%':''};
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .3rem;
        left: 0;
        bottom: 0;
        opacity: 0.7;
        transition: all .4s ease-in-out;
    }
    &:hover::after
    {
        width: 100%;
        background-color: white;
    }
`

export default PrimaButton
