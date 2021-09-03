import React from 'react'
import styled from 'styled-components'
import resume from '../img/resume.jpg'
import PrimaButton from './PrimaButton'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resumeimage" />
            </div>
            <div className="right-content">
                <h4>I am <span>Tohirbek</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae quidem 
                    recusandae cumque a atque vero est magnam necessitatibus? Numquam, 
                    facilis asperiores sapiente, autem, odit odio dignissimos dolore i
                    usto assumenda ipsa perferendis aperiam magni.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Tohirbek Odilkuziyev</p>
                        <p>: 19</p>
                        <p>: Uzbek</p>
                        <p>: Uzbek / English</p>
                        <p>: Fergana, Uzbekistan</p>
                        <p>: FrontEnd developer</p>
                    </div>
                </div>
                <PrimaButton title={'Download CV'}/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    
    .left-content{
        width: 100%;
        /* height: 60vh; */
        img{
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
        z-index: 10;
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: white;
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`

export default ImageSection
