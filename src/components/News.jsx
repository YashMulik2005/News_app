import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import newshook from './NewsContext'

function News() {
    const { data, changedata, topic, loadnews, changetopic } = newshook();
    const [temp, settemp] = useState()
    useEffect(() => {
        loadnews();
    }, [topic])
    return (
        <div>
            <div className=' flex flex-col items-center sm:justify-between sm:items-center sm:px-3 sm:flex-row'>
                <h1 className='text-3xl font-bold mb-2'>TOP NEWS</h1>
                <div>
                    <input type="text" className=' border-2 rounded p-1' onChange={(e) => {
                        settemp(e.target.value);
                    }} />
                    <button className=' border-2 bg-blue-600 text-white p-1 px-2 rounded mx-2'
                        onClick={() => {
                            changetopic(temp)
                        }}>Search</button>
                </div>
            </div>
            <div className=' grid grid-cols-1 gap-4 m-4 mt-7 mb-5 sm:grid-cols-3 lg:grid-cols-4'>
                {
                    data?.slice(0, 30).map((item, index) => {
                        return <NewsCard title={item.title} description={item.description} author={item.author} urlToImage={item.urlToImage} url={item.url} key={index} id={index} publishedAt={item.publishedAt} />
                    })
                }
            </div>
        </div>
    )
}

export default News