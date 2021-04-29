import React from 'react';
import ArticleList from '../Components/ArticlesList';
import articleContent from './article-content';
import {ReadOutlined } from '@ant-design/icons';
import ArticleImg from './article.jpg';
const ArticleListPage = () => (
    <>
    {/* <img  src={ArticleImg} className="img-home"/> */}
    <div className="article-page">
        <h1 className="home-head" style={{textAlign:"center", fontSize:"50px", paddingTop:"0px"}}>Articles</h1>
        <ReadOutlined className="read-icon ic2" />
        <ArticleList articles={articleContent}/>
    </div>
    </>
);
export default ArticleListPage;