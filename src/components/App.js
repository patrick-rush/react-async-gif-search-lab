import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer.js'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )

  // VUTpRuro8hQsZfttzNI5lxl291xxBqub
  // https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=VUTpRuro8hQsZfttzNI5lxl291xxBqub&rating=g


}

export default App
