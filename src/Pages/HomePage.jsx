import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'
// import Particle from '../Components/Particle'

function HomePage() {
    return (
        <HomePageStyled>
            {/* <div className="partical-con">
                <Particle/>
            </div> */}
            <div className="typography">
                <h1>Hi, I'm <span>Tohirbek</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Molestiae, quo provident atque praesentium omnis placeat veniam quibusda
                     m! Officiis, nemo quos. Lorem ipsum dolor sit amet.
                </p>
                <div className="icons">
                    <a href='#' className="i-facebook icon">
                        <FacebookIcon/>
                    </a>
                    <a href='https://github.com/tohirbek009' className="i-github icon">
                        <GithubIcon/>
                    </a>
                    <a href='#' className="i-youtube icon">
                        <YoutubeIcon/>
                    </a>

                </div>
            </div>
        </HomePageStyled>
    )

}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;


        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:50%;
                transition: all .4s ease-in-out;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                    cursor: pointer;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: 0.5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5f4687;
                    color: #5f4687;
                }
            }
        }
    }
`

export default HomePage
