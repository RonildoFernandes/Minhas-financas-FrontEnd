import React from 'react'
import NavebarItem from './navbaritem'

function Navbar(){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
             <div className="container">
                    <a href="https://bootswatch.com/" className="navbar-brand">Minhas Finanças</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <NavebarItem label="inicio" />
                            <NavebarItem href="#/cadastro" label="usuário"/>
                            <NavebarItem href="#login" label="Entrar"/>
                            
                            
                            
                        </ul>

                    </div>
                </div>
        </div>

    )
}
export default Navbar