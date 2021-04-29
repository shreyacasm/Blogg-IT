import React from 'react';
import './article.css';
import {UserOutlined } from '@ant-design/icons';

const CommentList = ({ comments }) => (
    <div className="comment-div">
    <h3><b>Comments :</b></h3>
    <hr className="comment-hr"/>
    {comments.map((comment, key) =>(
        <div key={key}>
            <h4><b>{comment.username}</b></h4>
            <p>{comment.text}</p>
        </div>
    ))}
    <hr className="comment-hr"/>
    </div>
);
export default CommentList;