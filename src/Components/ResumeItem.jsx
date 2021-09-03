import React from 'react'
import styled from 'styled-components'

function ResumeItem({year, title, subTitle, text}) {
    return (
        <ResumeItemstyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemstyled>
    )
}

const ResumeItemstyled = styled.div`
display: flex;
:not(:last-child){
    padding-bottom: 3rem;
}
    .left-content{
        width: 50%;
        padding-left: 30px;
        position: relative;
        ::before{
            content: "";
            position: absolute;
            left: -10px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        ::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            width: 3rem;
            height: 2px;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: 0.4rem;
        }
        h6{
            padding-bottom: 0.4rem;
            font-size: 1.4rem;
        }
    }
`

export default ResumeItem
