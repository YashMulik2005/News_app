import React from 'react'

function NewsCard({ title, description, author, urlToImage, url }) {
    console.log(title);
    return (
        <div className=' border-2 p-2'>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{author}</p>
            <img className=' w-40 h-40' src={urlToImage} alt="" />
            <a href={url}>link to full article</a>
        </div>
    )
}

export default NewsCard