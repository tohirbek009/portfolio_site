import React from 'react'
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../styles/Layout'
import SmallTitle from './SmallTitle'
import Title from './Title'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem'

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />

    return (
        <ResumeStyle>
            <Title title={"Resume"} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={"2015-2020"}
                        title={"Computer Science Teacher"}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo aspernatur? Porro atque voluptate soluta, sequi dolor accusamus earum tenetur?'}
                    />
                    <ResumeItem 
                        year={"2015-Present"}
                        title={"Full Stack Developer"}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo aspernatur? Porro atque voluptate soluta, sequi dolor accusamus earum tenetur?'}
                    />
                    <div className="u-margin-bottom">
                        <ResumeItem 
                            year={"2010-2027"}
                            title={"User Interface Designer"}
                            subTitle={'Google Inc'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo aspernatur? Porro atque voluptate soluta, sequi dolor accusamus earum tenetur?'}
                        />
                    </div>   
                </div>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={"2015-2020"}
                        title={"Computer Science Teacher"}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo aspernatur? Porro atque voluptate soluta, sequi dolor accusamus earum tenetur?'}
                    />
                    <ResumeItem 
                        year={"2015-Present"}
                        title={"Full Stack Developer"}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo aspernatur? Porro atque voluptate soluta, sequi dolor accusamus earum tenetur?'}
                    />
                    <ResumeItem 
                        year={"2010-2027"}
                        title={"User Interface Designer"}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo aspernatur? Porro atque voluptate soluta, sequi dolor accusamus earum tenetur?'}
                    />   
                </div>
            </InnerLayout>
        </ResumeStyle>
    )
}

const ResumeStyle = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
    // Utilities 
    .u-margin-bottom{
        margin-bottom: 4rem;
    }
`

export default Resume
