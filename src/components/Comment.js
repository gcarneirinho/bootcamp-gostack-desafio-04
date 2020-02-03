import React from 'react';

function Comment(comment) {

    const {author, content} = comment;

    return (
        <div className="comment">
            <img src={author.avatar} alt={author.name} />
            <div>
                <p><span>{author.name} </span>{content}</p>
            </div>
        </div>
    )
}

export default Comment;