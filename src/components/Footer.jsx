import React from 'react'

function Footer() {
    let date = new Date();
    return (
        <div>
            <div className='flex justify-center items-center'>
                <p className=' text-white mb-3 text-md'>@{date.getFullYear()} News24/7</p>
            </div>
        </div>
    )
}

export default Footer