import React from 'react'
import Login from '../views/login'
import Cadastro from '../views/cadastro' 

import {Route,Switch,HashRouter} from 'react-router-dom'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas