import React from 'react'
import {InnerLayout} from '../styles/Layout'
import styled from 'styled-components'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { ServiceData } from '../data/ServiceSectionData'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />   
                <div className="services">
                    {
                        ServiceData.map(({image_, paragraph_, title_})=>
                            <ServiceCard 
                                image={image_} 
                                title={title_}
                                paragraph={paragraph_}
                            /> 
                        )
                    }
                </div>
            </ServicesSectionStyled>       
        </InnerLayout>
    )
}


const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;

    }   
`

export default ServicesSection
