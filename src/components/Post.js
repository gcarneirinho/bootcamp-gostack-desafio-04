import React from 'react';
import Comment from './Comment';

function Post(post) {

    const {id, author, date, content, comments} = post;

    return(
        <div className="postlist__post">
            <header>
                <img src={author.avatar} title={author.name}/>
                <div>
                    <h1>{author.name}</h1>
                    <p className="date">{date}</p>
                </div>
            </header>
            <p className="content">{content}</p>
            <div>
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} {...comment} />
                    )
                })}
            </div>
        </div>
        
    )
}

export default Post;