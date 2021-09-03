import React from 'react'
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'my skills'} span={'my skills'}/>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JavaScript'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Java'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'Unity'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`

export default Skills
