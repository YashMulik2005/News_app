import React from 'react'

function NewsCard({ title, description, author, urlToImage, url, id }) {
    return (
        <div className=' border-2 p-2'>
            {/* <h1>{id}</h1> */}
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{author}</p>
            <img className=' w-full h-40 object-contain' src={urlToImage} alt="" />
            <a href={url}>link to full article</a>
        </div>
    )
}

export default NewsCard