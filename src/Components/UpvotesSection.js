import React from 'react';
import {LikeTwoTone}  from '@ant-design/icons';
import "./article.css";

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
    
    const upvoteArticle = async() => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    
    return (
    <div className="vote-div">
       <button className="vote" onClick={ () => upvoteArticle()}>
           Like  <LikeTwoTone className="vote-like" />
        </button>
       <p className="vote-desc">    This post has <i>{upvotes}</i>  <LikeTwoTone/></p> 
       <hr className="vote-hr" />
    </div>
    );
}

export default UpvotesSection;