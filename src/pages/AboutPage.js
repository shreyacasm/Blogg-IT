import React from 'react';
import myimage from './about-me.jpeg';
import about1 from './about.jpeg';
import myimg from './about_me.jpeg';
import Zoom from 'react-reveal/Zoom';
import './page.css';
import 'antd/dist/antd.css';
import ArticleList from '../Components/ArticlesList';
import articleContent from './article-content';
import { Row, Col, Slider } from 'antd';
import {ReadOutlined } from '@ant-design/icons';

const style = { background: '#0092ff'};
const AboutPage = () => (
    <>

    <img  src={about1} className="img-home"/>
    {/* <img  src={about2} className="img-home"/>
     */}
    <Zoom animateIn='fadeIn'>
        <h1 className="about-head" >"It's All About Creativity"</h1>
    </Zoom>
    <div className="about-box">
        <h1 style={{color:"rgb(129, 21, 21)", fontWeight:"900", marginTop:"3%"}}>Blogg<span style={{color:" #ffb3b3", fontWeight:"900"}}>It</span> by Shreya Suroliya</h1> 
        <Row gutter={24} type="flex">
            <Col className="gutter-row" span={16}>
                <Row className="about-row">
                    <Col span={8}> <img src={myimage} className="image-me" /></Col>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <div className="hi-col" >Hi! I’m Shreya and this is my blogging platform.</div>
                        <div>Shreya has been sharing articles on technology and life since 2016.<br/> 
                            She is currently the editor and creator of <a>BloggIT</a>.</div>
                    </Col>
                </Row>
                <Row>
                    <h1 style={{color:"rgb(129, 21, 21)", marginTop:"8%",fontWeight:"900"}}>More About BloggIT...</h1>
                    <p style={{fontSize:"18px", marginTop:"3%"}} className="hi-col">
                        <b>BloggIT</b>, was started in May 2020, during the lockdown period, due to Covid spreading widely in India,
                        Firstly, it was an interest, later editor developed a new habit of learning more and more about technology 
                        and let world acknowledge what are the pros and cons of technologies available. 
                        <br/>IT in BloggIT represents the feild of Information Technology, 
                        and deals with numerous topics like Artificial Intelligence, Augumented-Virtual Reality, Web, Cloud, Cyber Security 
                        and all latest technologies. 
                        <br/>
                        So, let's dive into this mini world of technology, do like and comment...
                        </p>
                    <ReadOutlined className="read-icon ic-about" />
                </Row>
                    
            </Col>
            <Col className="gutter-row" span={8}>
                <div className="about-side" >
                    <h2 style={{textAlign:"center", color:"rgb(5, 65, 65)"}}>WHAT’S BLOGGIT?</h2>
                    <hr/>
                    <hr/>
                    <p style={{fontSize:"18px"}}>BloggIT is an IT blogging site, providing all knowledge and latest reviews about technology.</p>
                    <h2 style={{textAlign:"center", color:"rgb(5, 65, 65)"}}>Who's behind BloggIT ?</h2>
                    <p style={{fontSize:"18px"}}><b>Shreya Suroliya</b>, an IT student and creative content curator, writing blogs since 2016.</p>
                    
                    <img src={myimg} className="image-me sh-img"/>
                </div>
            </Col>
        </Row>
        <h1>Articles</h1>
        <Row>                
            <ArticleList articles={articleContent}/>
        </Row>
    </div>
    </>
);
export default AboutPage;