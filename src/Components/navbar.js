import React from 'react'
import NavebarItem from './navbaritem'

function Navbar(){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
             <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <NavebarItem href="#/Home" label="Home"/>
                            <NavebarItem href="#/cadastro" label="Cadastre-se"/>
                            <NavebarItem href="#login" label="Entrar"/>
                            
                            
                            
                        </ul>


                    </div>
                    
                    <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                </div>
        </div>

    )
}
export default Navbar