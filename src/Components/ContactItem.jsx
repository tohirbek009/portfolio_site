import React from 'react'
import styled from 'styled-components'

function ContactItem({icon, title, contact1, contact2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 0.2rem 1.5rem 2rem;
    background-color: var(--background-dark-color-2);
    display: flex;
    align-items: center;
    :not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 2rem;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding: 0.2rem 0;
        }
        p{
            padding: 0.5rem 0;
        }
    }
`

export default ContactItem
