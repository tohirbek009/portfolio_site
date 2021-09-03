import React from 'react'
import styled from 'styled-components'

function ReviewItem({text}) {
    return (
        <ReviewItemSrtyle>
            <p>{text}</p>
        </ReviewItemSrtyle>
    )
}

const ReviewItemSrtyle = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-color-2);
    position: relative;
    width: 50%;
    :not(:first-child){
        margin-left: 1rem;
    }
    ::after{
        content: '';
        position: absolute;
        left: 1rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-color-2) transparent transparent var(--background-dark-color-2);
    }
    p{
        padding: 1rem 0;
    }
`;

export default ReviewItem
