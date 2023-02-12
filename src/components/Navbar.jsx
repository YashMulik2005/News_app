import React from 'react'
import newshook from './NewsContext'

function Navbar() {
    const { topic, changetopic, loadnews } = newshook();
    let arr = ['Cricket', 'Education', 'Coding', 'Artificial-Intelligence', 'Politics', 'Sports', 'Health', 'Mobile', 'Art', 'Space', 'Football', 'Entertainment', 'Music', 'Travel', 'Defence', 'History', 'Science', 'Superhero', 'Food'];
    // function selecttopic(id) {
    //     let e = document.getElementById(`${id}`);

    //     // changetopic(e.innerText);
    //     console.log(id);
    // }
    return (
        <div>
            <div className=' flex justify-between items-center bg-slate-400 p-2'>
                <h1 className=' font-bold text-xl'>NEWS <span className=" text-blue-600 font-bold">24/7</span></h1>
                <h1>button</h1>
            </div>
            <div className=' p-2'>
                <ul className=' flex overflow-x-auto gap-5 pb-2 font-semibold mx-3 cursor-pointer'>
                    {
                        arr.map((item, index) => {
                            return <li key={index} id={`${index}`} onClick={(e) => {
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