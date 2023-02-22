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
            <div className=' flex flex-col items-center sm:justify-between sm:items-center sm:px-3 sm:flex-row m-2'>
                <h1 className='text-3xl font-bold mb-2 text-white'>TOP NEWS Of {topic}</h1>
                <div>
                    <input type="text" required className=' border-2 rounded p-1 focus:outline-none' placeholder='Search Catageries' onChange={(e) => {
                        settemp(e.target.value);
                    }} />
                    <button className='bg-green-700 text-white p-1 px-2 rounded mx-2 font-bold hover:bg-green-900'
                        onClick={() => {
                            changetopic(temp)
                        }}>Search</button>
                </div>
            </div>
            <div className=' grid grid-cols-1 gap-4 m-4 mt-7 mb-5 sm:grid-cols-3 lg:grid-cols-4 p-2'>
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