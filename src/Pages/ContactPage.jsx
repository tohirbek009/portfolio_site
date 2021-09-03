import styled from 'styled-components'
import Title from '../Components/Title'
import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import PrimaButton from '../Components/PrimaButton'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem'
//   EMAIL_JS Import  //
import emailjs from 'emailjs-com'

function ContactPage() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_udcgsqh', e.target, 'user_j4AYkZQzmzlNkUuTjB0Eg')
          .then((result) => {
              alert(result.text)
          }, (error) => {
              alert(error.text)
          });
          e.target.reset();
    }

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyle>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" onSubmit={sendEmail}>
                            <div className="form-field">
                                <label htmlFor="name">Enter your name*</label>
                                <input type="text" id='name' name='name' required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter your email*</label>
                                <input type="email" id='email' name='email' required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="number">Enter your number*</label>
                                <input type="number" id='number' name='number' required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Enter your subject*</label>
                                <input type="text" id='subject' name='subject' required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="textarea">Enter your message*</label>
                                <textarea name="message" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaButton title={'Send Email'} type='submit'/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem 
                            icon={<PhoneIcon />} 
                            title={'Phone'}
                            contact1={'+998901504978'}
                            contact2={'+998900609066'}
                        />
                        <ContactItem 
                            icon={<EmailIcon />} 
                            title={'Email'}
                            contact1={'odilovtohirbek009@gmail.com'}
                            contact2={'odilovtohirjon2003@gmail.com'}
                        />
                        <ContactItem 
                            icon={<LocationOnIcon />} 
                            title={'Location'}
                            contact1={'Baghdad dis, Fergana reg, Uzbekistan'}
                            contact2={'Mirzo Ulugbek dis, Tashkent city, Uzbekistan'}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyle>
        </MainLayout>
    )
}

const ContactPageStyle = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                label{
                    position: absolute;
                    left: 20px;
                    top: -20px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 0.5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background-color: transparent;
                    height: 45px;
                    padding: 25px 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    padding: 0.8rem 15px;
                    width: 100%;
                    resize: unset;
                }
            }
        }
    }
`

export default ContactPage
