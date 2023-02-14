import React from 'react'
import newshook from './NewsContext'

function NewsCard({ title, description, author, urlToImage, url, publishedAt }) {
    const { theme, changetheme } = newshook();
    console.log(publishedAt);
    return (
        <div className={`border-2 bg-${theme}primary flex justify-center  flex-col relative w-full h-full sm:p-3`}>
            {/* <h1>{id}</h1> */}
            <img className='h-40 object-contain m-2' src={urlToImage} alt="" />
            <div className=' flex justify-between items-center'>
                <section>{publishedAt.substring(0, 10)}</section>
                <section>{(author === null) ? 'UnKnown' : author}</section>
            </div>
            <h1 className=' text-darkprimary font-bold'>{title}</h1>
            <section>{description.substring(0, 150) + '......'}</section>
            <section className=' m-2'>
                <a href={url} className=" absolute bottom-2 right-1">link to full article</a>
            </section>
        </div>
    )
}

export default NewsCard