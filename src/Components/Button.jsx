import React from 'react'
import styled from 'styled-components'

function Button({filter, button}) {
    return (
        <ButtonsStyle>
            {
                button.map((but, i) => {
                    return <ButtonStyle key={i} onClick={()=> filter(but)}>
                        {but}
                    </ButtonStyle>
                })
            }
        </ButtonsStyle>
    )
}

const ButtonStyle = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: 0.4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :active, :focus{
        background-color: var(--primary-color);
    }
    :hover{
        background-color: var(--primary-color);
    }
    :not(:last-child){
        margin-right: 1rem;
    }
`

const ButtonsStyle = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;
`

export default Button
