import React from 'react'


// Components
import Nav from './Nav'
import MainPreview from './MainPreview'
import Preview from './Preview'

function App () {

  return (
    <>
      <div className='app'>
        <MainPreview />
        <Preview />
        <Nav />
      </div>
    </>
  )
}

export default App
