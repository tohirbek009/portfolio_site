import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { Blogs } from '../data/Blogs'
import { MainLayout, InnerLayout } from '../styles/Layout'

function BlogPage() {
    return (
        <MainLayout>
            <BlogsStyled>
               <Title title={'blogs'} span={'blogs'} />
                <InnerLayout className={'blog'}>
                    {
                        Blogs.map((blog)=>
                            <div key={blog.id} className={"blog-item"}>
                                <div className="image">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="title">
                                    <a href={blog.link}>{blog.title}</a>
                                </div>
                            </div>
                        )
                    }
                </InnerLayout>
            </BlogsStyled> 
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        .blog-item{
            background-color: var(--background-dark-color-2);
            padding: 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all 0.4s ease-in-out;
                :hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }
        .title{
            a{
                font-size: 1.7rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                :hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`

export default BlogPage
