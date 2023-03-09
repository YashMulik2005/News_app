import React from 'react'
import newshook from './NewsContext'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function NewsCard({ title, description, author, urlToImage, url, publishedAt }) {
    const { theme, changetheme, data } = newshook();
    return (
        <div className={`p-4 flex justify-center flex-col relative w-full h-full sm:p-4 bg-[#282828] text-white rounded`}>
            <section className='flex justify-center items-center w-full mb-2'>
                <LazyLoadImage className='h-40 w-full object-contain rounded-md' src={urlToImage} alt={title} effect="blur" />
            </section>
            <div className=' flex justify-between items-center'>
                <section>{publishedAt.substring(0, 10)}</section>
                <section>{(author == null) ? 'UnKnown' : author.substring(0, 25)}</section>
            </div>
            <div className='p-3'>
                <h1 className=' text-darkprimary font-bold'>{title}</h1>
                <br />
                <section className=' line-clamp-4'>{description}</section>
                <section className=' m-2'>
                    <a href={url} className=" absolute bottom-2 right-1 font-bold hover:border-b-2 hover:border-green-500 text-green-500">
                        Full Article</a>
                </section>
            </div>
        </div>
    )
}

export default NewsCard