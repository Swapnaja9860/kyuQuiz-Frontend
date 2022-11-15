import React from 'react'
import Footer from './index'
import {Link} from 'react-router-dom'

function FooterContainer(){
    return(
        <Footer style={{ background:"linear-gradient(to right, #d16ba5, #c761b0, #b75bbc, #a058ca, #7e58d9, #666ce9, #457ff6, #008fff,  #00ccff, #5edeec, #a9f5f0)"}}>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Link to="our_partners"><Footer.Link >Our Partners</Footer.Link></Link>
                    <Link to="testimonials"><Footer.Link>Testimonials</Footer.Link></Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <article style={{ color:"white"}}>Training</article>
                    <article style={{ color:"white"}}>Consulting</article>
                    <article style={{ color:"white"}}>Marketing</article>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <article style={{ color:"white"}}>Telephone: 0712-776859</article>
                    <p style={{ color:"white"}}>Email id: Kyuquizz@gmail.com</p>
                    <article style={{ color:"white"}}>Office address:Gulmohar Palace, Thane, Mumbai</article>
                </Footer.Column>
                <Footer.Column className="text-center">
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"> <span  className="mdi mdi-facebook-box mdi-24px facebook-box "></span></Footer.Link>
                    <Footer.Link href="#"><span  className="mdi mdi-instagram mdi-24px instagram "></span></Footer.Link>
                    <Footer.Link href="#"><span  className="mdi mdi-youtube mdi-24px youtube "></span></Footer.Link>
                </Footer.Column>
                <br/>
                <br/>
                </Footer.Row>
                <p align="center" style={{color: "white"}}>Copyright &copy;2020 KyuQuiz.All rights reserved</p>
            </Footer.Wrapper>
         </Footer>
    )
    }
    export default FooterContainer;