import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import newshook from './NewsContext'

function News() {
    const { data, changedata, topic, loadnews, changetopic } = newshook();
    // const [temp, settemp] = useState()
    useEffect(() => {
        loadnews();
    }, [topic])
    return (
        <div>
            <div className=' flex justify-between'>
                <h1 className=' text-3xl font-bold'>TOP NEWS</h1>
                <div>
                    <input type="text" className=' border-2 rounded' />
                    <button>Search</button>
                </div>
            </div>
            <div className=' grid grid-cols-3 gap-4 m-4 mt-7 mb-5'>
                {
                    data?.slice(0, 30).map((item, index) => {
                        return <NewsCard title={item.title} description={item.description} author={item.author} urlToImage={item.urlToImage} url={item.url} key={index} id={index} />
                    })
                }
            </div>
        </div>
    )
}

export default News