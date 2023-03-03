import React from 'react'
import News from './components/News'
import { Newsprovider } from './components/NewsContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <Newsprovider>
      <div>
        <Navbar />
        <News />
        <Footer />
      </div>
    </Newsprovider>
  )
}
//const result = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&apiKey=70c8447e46874793860fbfa10dfbb5f6`)

export default App
