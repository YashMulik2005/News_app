import React from 'react'
import newshook from './NewsContext'
import { GiNewspaper } from 'react-icons/gi'

function Navbar() {
    const { topic, changetopic, loadnews, theme, changetheme } = newshook();
    let arr = ['Cricket', 'Education', 'Coding', 'AI', 'Politics', 'Sports', 'Health', 'Mobile', 'Art', 'Space', 'Football', 'Entertainment', 'Music', 'Travel', 'Defence', 'History', 'Science', 'Superhero', 'Food', 'Anime', 'Gaming'];

    return (
        <div>
            <div className=' flex justify-between items-center bg-[#282828] p-2'>
                <h1 className=' font-bold text-xl text-white'>NEWS <span className=" text-green-500 font-bold">24/7</span></h1>
                <section className=''>
                    <GiNewspaper size={28} color="white" />
                </section>
            </div>
            <hr />
            <div className=' sm:p-2 bg-[#282828] h-8 sm:h-10 overflow-x-auto mb-4'>
                <ul className=' flex gap-5 font-semibold sm:mx-3 cursor-pointer text-white '>
                    {
                        arr.map((item, index) => {
                            return <li className='hover:border-b-2' key={index} id={`${index}`} onClick={(e) => {
                                changetopic(e.target.textContent);
                                console.log(topic);
                            }}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar