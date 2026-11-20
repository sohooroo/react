import React from 'react'

const PostItem = ({title,author}) => {
    return (
        <div>
            <strong>{title}</strong> : {author}
        </div>
    )
}

export default PostItem