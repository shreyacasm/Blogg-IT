import React from 'react';
import {Link} from 'react-router-dom';
import "./article.css";
import 'antd/dist/antd.css';
import { Row, Col, Slider } from 'antd';
import articleIcon from "./icon.png";
const ArticleList = ({articles}) => (
    <>
    {articles.map( (article, key)=> (
        <Link key={key} to={`/article/${article.name}`}>
            <div className="article-div">
                <Row>
                    <Col span={5}><img style={{width:"90%",height:"150px"}} src={articleIcon}/></Col>
                    <Col span={19}>
                        <h3 className="article-h1">{article.title}</h3>
                        <p className="article-p">{article.content[0].substring(0,100)}...</p>
                    </Col>
                </Row>
                
            </div>
            
        </Link>
        
    ))}
    </>
);

export default ArticleList;