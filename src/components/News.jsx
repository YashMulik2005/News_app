import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import newshook from './NewsContext'
import ClipLoader from 'react-spinners/ClipLoader';

function News() {
    const { data, changedata, topic, loadnews, changetopic } = newshook();
    const [temp, settemp] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(topic);
        loadnews(topic);
        setLoading(false);
    }, [topic])

    const handleclick = (e) => {
        e.preventDefault();
        changetopic(temp)
    }
    return (
        <div>
            <div className=' flex flex-col sm:justify-between justify-center items-center sm:px-3 sm:flex-row m-2'>
                <section className='flex justify-center items-center'>
                    <p className='text-3xl font-bold mb-5 text-white w-full  sm:mb-2 break-all sm:break-normal'>TOP NEWS OF<span> </span>
                        {topic.toUpperCase()}</p>
                </section>
                <div>
                    <form onSubmit={handleclick}>
                        <input type="text" required className=' border-2 rounded p-1 focus:outline-none' placeholder='Search Catageries'
                            onChange={(e) => {
                                settemp(e.target.value);
                            }} />
                        <button type="submit" className='bg-green-600 text-white p-1 px-2 rounded mx-2 font-bold hover:bg-green-900'
                        >Search</button>
                    </form>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                {loading ? <section className='m-10'><ClipLoader size={35} color="#ffffff" loading={loading} /></section> :
                    (data?.error) ? <div className='text-white flex flex-col m-3 mt-10 mb-4 p-6 bg-[#282828] rounded justify-center 
                    sm:w-1/2'>
                        <h1 className=' text-2xl font-bold text-green-500 p-1'>News not found</h1>
                        <p className=' text-md '>Sorry, we couldn't find news for topic you are looking for.....</p>
                    </div> :

                        <div className='grid grid-cols-1 gap-4 m-4 mt-7 mb-5 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 p-2'>
                            {
                                data?.map((item, index) => {
                                    return <NewsCard title={item.title} description={item.description} author={item.author}
                                        urlToImage={item.urlToImage} url={item.url} key={index} id={index} publishedAt={item.publishedAt} />
                                })
                            }
                        </div>}
            </div>
        </div>
    )
}

export default News