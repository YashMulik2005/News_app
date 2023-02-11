import React from 'react'
import News from './components/News'
import { Newsprovider } from './components/NewsContext'


function App() {

  return (
    <Newsprovider>
      <div>
        <News />
      </div>
    </Newsprovider>
  )
}

export default App
