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
    async function loadnews() {
        let date = new Date();
        const result = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&apiKey=70c8447e46874793860fbfa10dfbb5f6`)
        const res = await result.json();
        const arr = res.articles;
        changedata(arr);
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
