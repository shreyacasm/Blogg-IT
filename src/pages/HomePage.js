import React from 'react';
import './page.css';
import home from './home.jpg';
import {ReadOutlined } from '@ant-design/icons';
import Slide from 'react-reveal/Slide';

const HomePage = () => (
    <div className="home-div">
    <img  src={home} className="img-home"/>
    <Slide left>
        <h1 className="home-head"><i>"A Blog is a <b>message</b> in a bottle, both in <b>purpose</b> and likely <b>readership</b>"</i></h1>
    </Slide>
    <ReadOutlined className="read-icon" />
    <div className="home-box">
        <div className="home-box-content">
            <h2>Hello Readers,<br/> Welcome to my world</h2>
            <div className="content-para">
                To the people who feel too much as much they read,
                A very warm welcome to 
                my new & fresh blogging site.
                Do you know coming up with first blog post is always hard because 
                nobody knows you & nobody cares what are you doing. But here I am to 
                explore my interests and mix up them with yours. 
                <br/>
                If coming to my educational background, I am a software engineer, 
                <br/>so my interest lies always in world of technology. 
                <br/>
                The only reason I started blogging because it was fun 
                & it was something I enjoyed doing.
                <br/>
            </div>
                <span className="content-last">
                I love doing work which makes me happy,<br/> that’s why I love Blogging.
                </span>
    
            
        </div>
        </div>
        <ReadOutlined className="read-icon-last" />
    </div>
);
export default HomePage;