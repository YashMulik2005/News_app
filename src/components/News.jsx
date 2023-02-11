import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import newshook from './NewsContext'

function News() {
    const { data, changedata } = newshook();
    async function loadnews() {
        const result = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=70c8447e46874793860fbfa10dfbb5f6')
        const res = await result.json();
        const arr = res.articles;
        changedata(arr);
    }
    useEffect(() => {
        loadnews();
        console.log(data);
    }, [])
    console.log(data);
    return (
        <div>
            <div>
                <h1 className=' text-3xl font-bold'>TOP NEWS</h1>
            </div>
            <div className=' grid grid-cols-3 gap-4 m-4 mt-7 mb-5'>
                {
                    data?.map((item, index) => {
                        return <NewsCard title={item.title} description={item.description} author={item.author} urlToImage={item.urlToImage} url={item.url} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default News