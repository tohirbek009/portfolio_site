import React from 'react'
import styled from 'styled-components'
import { GitHub } from '@material-ui/icons'
import { Pinterest } from '@material-ui/icons'

function Menu({menuItem}) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item) => {
                    return <div className='grid-item' key={item.id}>
                        <div className='portfolio-content'>
                            <div className='portfolio-image'>
                                <img src={item.image} alt=''/>
                                <ul>
                                  <li>
                                      <a href={item.link1}>
                                          <GitHub />
                                      </a>
                                  </li>
                                  <li>
                                      <a href={item.link2}>
                                          <Pinterest />
                                      </a>
                                  </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-100px);
                transition: all 0.4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
            }
            .portfolio-image{
                ::before{
                    content: '';
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    width: 0;
                    height: 0;
                    transition: all 0.4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    position: absolute;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    /* transition-delay: 100ms; */
                    li{
                        background-color: var(--border-color);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 0.5rem;
                        transition: all 0.4s ease-in-out;
                        :hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            justify-content: center;
                            align-items: center; 
                        }
                    }
                    li:hover{
                        color: var(--white-color);
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                    ::before{
                        height: calc(100% - 32%);
                        width: calc(100% - 4%);
                        background-color: white;
                        transform-origin: left;
                        opacity: 0.9;
                    }
            }
        }
    }
`

export default Menu
