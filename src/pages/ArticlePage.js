import React, {useState, useEffect} from 'react';
import AddComment from '../Components/AddComment';
import ArticleList from '../Components/ArticlesList';
import CommentList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import { Row, Col, Slider } from 'antd';
const ArticlePage = ({ match }) => {
   const name = match.params.name; 
   const article = articleContent.find(article => article.name === name);
   
    const [articlesInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    
    }, [name]);
   if(!article) return <NotFoundPage/>
   
   const otherArticles = articleContent.filter(article => article.name !== name);
   
   return(
    <div className="article-page">
    <h1 className="home-head">{article.title}</h1>
            
    <Row type="flex">
        <Col span={15}>
            {article.content.map((paragraph, key) => (
                <p className="article-para" key={key} >{paragraph}</p>
            ) )}
        </Col>
        <Col span={1}></Col>
        <Col span={8}>
            <div className="article-para like-comment">
                <UpvotesSection articleName={name} upvotes={articlesInfo.upvotes} setArticleInfo={setArticleInfo} />
                <CommentList comments={articlesInfo.comments}/>
                <AddComment articleName={name} setArticleInfo={setArticleInfo} />
            </div>
        </Col>
    </Row>   
    
   
    
    
    
    <h1 className="home-head">View Other Articles</h1>
    <ArticleList articles={otherArticles}/>
    </div>
   ); 
    
}
export default ArticlePage;