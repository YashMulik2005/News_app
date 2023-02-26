import React, { createContext, useContext, useState } from 'react'

const NewsContext = createContext();

export const Newsprovider = ({ children }) => {
    const [data, setdata] = useState();
    const [topic, settopic] = useState('cricket');
    const [theme, settheme] = useState('white');


    const changedata = (val) => {
        setdata(val);
    }
    const changetopic = (event) => {
        settopic(event);
    }
    const changetheme = () => {
        (theme == 'white') ? settheme('black') : settheme('white')
    }
    async function loadnews(topic) {
        console.log(topic);
        const result = await fetch(`http://localhost:3000`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "topic": topic
            })
        });
        const { data } = await result.json();
        changedata(data);
    }

    const value = {
        data,
        changedata,
        topic,
        changetopic,
        loadnews,
        theme,
        changetheme
    }

    return <NewsContext.Provider value={value}>
        {children}
    </NewsContext.Provider>
}

const newshook = () => {
    const context = useContext(NewsContext);
    if (context === undefined) {
        throw new Error('hook is not working')
    }
    return context
}

export default newshook;
