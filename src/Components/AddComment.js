import React, {useState} from 'react';

const AddComment = ({ articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const res = await fetch(`/api/articles/${articleName}/add-comment`,{
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await res.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
        
    }
    return(
        <div className="add-comm">
        <label className="name-comm">
            <h4><b>Add Your Comment :</b></h4>
            <textarea style={{width:"100%"}} value={commentText} onChange={(event) => setCommentText(event.target.value)} />
        </label>
        <label className="name-comm">
            Name: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <button onClick={() => addComment()}  className="button-add"><span>Add Comment</span></button>
        </div>
    );
}
export default AddComment;