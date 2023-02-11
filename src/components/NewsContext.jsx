import React, { createContext, useContext, useState } from 'react'

const NewsContext = createContext();

export const Newsprovider = ({ children }) => {
    const [data, setdata] = useState();

    const changedata = (val) => {
        setdata(val);
    }

    const value = {
        data,
        changedata
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
