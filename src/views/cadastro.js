import React from 'react'
import Card from '../Components/Card'
import FormGroup from '../Components/form-group'

class Cadastro extends React.Component{

    state = {
       nome:'',
       email:'',
       cnpj:'',
       telefone:'',
       senha:'',
       senhaRepeticao: ''     
    }
    cadastrar = ()=>{
        console.log(this.state)
    }

    render(){
        return(
            
                <Card title="Cadastro de Cervejeiro">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text"
                                           id="inputNome"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({ nome : e.target.value})} />
                                </FormGroup>    
                                <FormGroup label="email: *" htmlFor="inputEmail">
                                    <input type="text"
                                           id="inputEmail"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({ email : e.target.value})} />
                                </FormGroup>    
                                <FormGroup label="cnpj: *" htmlFor="inputCnpj">
                                    <input type="text"
                                           id="inputCnpj"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({ cnpj : e.target.value})} />
                                </FormGroup>    
                                <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                    <input type="text"
                                           id="inputTelefone"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({ telefone : e.target.value})} />
                                </FormGroup>    
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password"
                                           id="inputSenha"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({ senha : e.target.value})} />
                                </FormGroup>    
                                <FormGroup label="Confirma: *" htmlFor="inputConfirma">
                                    <input type="password"
                                           id="inputConfirma"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({ nome : e.target.value})} />
                                </FormGroup>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>&nbsp;
                                <button type="button"className="btn btn-danger">Cancelar</button>    
                                    
                                
                            </div>
                        
                        </div>
                    
                    </div>
                </Card>
                


        )
    }
}
export default Cadastro