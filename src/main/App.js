import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import '../views/custom.css'
import Navebar from '../Components/navbar'

import Rotas from './routes'

class App extends React.Component {

  render() {
    return (
      <>
        <Navebar/>
        <div className ="container">
          
          <Rotas />

          
        </div>
      </>
    )
  }
  
}

export default App;
