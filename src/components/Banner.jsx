import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import {Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg';




export const Banner = () => {
    const [lopNum,setLoopNum]=useState(0);
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="togline">Welcome tp my Portfolio</span>
                    <h1>{`Hi I'm webdecoded`}<span className="warp">web developer</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus ipsam aliquid quam reprehenderit libero, totam suscipit ut rem eligendi doloribus nostrum aspernatur? Asperiores, libero! Obcaecati, corrupti. Eaque, commodi eveniet.</p>
                    <button onClick={()=> console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}