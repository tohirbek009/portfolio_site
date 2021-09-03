import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import { MainLayout } from '../styles/Layout'
import ServicesSection from '../Components/ServicesSection'
import ReviewsSections from '../Components/ReviewsSections'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About me'} />
                <ImageSection/>
                <ServicesSection />
                <ReviewsSections />
            </AboutStyled>
        </MainLayout>
    )
}


const AboutStyled = styled.section`

`


export default AboutPage
