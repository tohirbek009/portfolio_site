import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ReviewItem from './ReviewItem'
import Title from './Title'

function ReviewsSections() {
    return (
        <ReviewsStyled>
            <Title title={"Reviews"} span={"reviews"}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor sit amet consectetur'}/>
                    
                    <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor sit amet consectetur'}/>
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}


const ReviewsStyled = styled.section`
    .reviews{
        display: flex;
        
    }
`


export default ReviewsSections
