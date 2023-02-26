import React from 'react'
import newshook from './NewsContext'

function NewsCard({ title, description, author, urlToImage, url, publishedAt }) {
    const { theme, changetheme, data } = newshook();
    return (
        <div className={`p-2 flex justify-center flex-col relative w-full h-full sm:p-3 bg-[#282828] text-white rounded`}>
            {/* <h1>{id}</h1> */}
            <img className='h-40 object-contain m-2' src={urlToImage} alt="" />
            <div className=' flex justify-between items-center'>
                <section>{publishedAt.substring(0, 10)}</section>
                <section>{(author == null) ? 'UnKnown' : author.substring(0, 30)}</section>
            </div>
            <div className='p-3'>
                <h1 className=' text-darkprimary font-bold'>{title}</h1>
                <br />
                <section className=' line-clamp-4'>{description}</section>
                <section className=' m-2'>
                    <a href={url} className=" absolute bottom-2 right-1 bg-green-700 hover:bg-green-900 p-1 rounded font-semibold">Full Article</a>
                </section>
            </div>
        </div>
    )
}

export default NewsCard