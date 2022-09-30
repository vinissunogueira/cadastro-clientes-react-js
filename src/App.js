import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background-clientes.png';
import { Form } from './styles';

export default function App(){
  const [ users, setUsers ] = useState([]);
  const [ newNome, setNewNome] = useState ('');
  const [ NewEmail, setNewEmail] = useState ('');
  const [ NewCPF, setNewCPF] = useState ('');
  const [ NewTelefone, setNewTelefone] = useState ('');
  const [ NewLogradouro, setNewLogradouro] = useState ('');
  const [ NewNumero, setNewNumero] = useState ('');
  const [ NewComplemento, setNewComplemento] = useState ('');
  const [ NewBairro, setNewBairro] = useState ('');
  const [ NewCidade, setNewCidade] = useState ('');
  const [ NewEstado, setNewEstado] = useState ('');
  const [ NewCEP, setNewCEP] = useState ('');

  // useState retorna um array com 2 posicoes
  // 
  // 1. variavel com seu valor inicial 
  // 2. função para atualizacao deste valor 

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

//CAMPOS DO FORMULARIO
//NOME
  function handleInputChangeNewNome(e) {
    setNewNome(e.target.value);
  }
//EMAIL
  function handleInputChangeNewEmail(e) {
    setNewEmail(e.target.value);
  }
//CPF
  function handleInputChangeNewCPF(e) {
    setNewCPF(e.target.value);
  }
//TELEFONE
  function handleInputChangeNewTelefone(e) {
    setNewTelefone(e.target.value);
  }
//ENDEREÇO - LOGRADOURO
  function handleInputChangeNewLogradouro(e) {
    setNewLogradouro(e.target.value);
  }
//ENDEREÇO - NUMERO
  function handleInputChangeNewNumero(e) {
    setNewNumero(e.target.value);
  }  
//ENDEREÇO - COMPLEMENTO
  function handleInputChangeNewComplemento(e) {
    setNewComplemento(e.target.value);
  }
//ENDEREÇO - BAIRRO
  function handleInputChangeNewBairro(e) {
    setNewBairro(e.target.value);
  }
//ENDEREÇO - CIDADE
  function handleInputChangeNewCidade(e) {
    setNewCidade(e.target.value);
  }
//ENDEREÇO - ESTADO
  function handleInputChangeNewEstado(e) {
    setNewEstado(e.target.value);
  }
//ENDEREÇO - CEP
  function handleInputChangeNewCEP(e) {
    setNewCEP(e.target.value);
  }

  async function addNewUser(e) {
    e.preventDefault();
    setNewNome(newNome);
    setNewEmail(NewEmail);
    setNewCPF(NewCPF);
    setNewTelefone(NewTelefone);
    setNewLogradouro(NewLogradouro);
    setNewNumero(NewNumero);
    setNewComplemento(NewComplemento);
    setNewBairro(NewBairro);
    setNewCidade(NewCidade);
    setNewEstado(NewEstado);
    setNewCEP(NewCEP);
    
    const response = await api.post('users', {
      Nome: `${newNome}`,
      Email: `${NewEmail}`,
      CPF: `${NewCPF}`,
      Telefone: `${NewTelefone}`,
      Logradouro: `${NewLogradouro}`,
      Numero: `${NewNumero}`,
      Complemento: `${NewComplemento}`,
      Bairro: `${NewBairro}`,
      Cidade: `${NewCidade}`,
      Estado: `${NewEstado}`,
      CEP: `${NewCEP}`
    });

    const user = response.data;
    
    console.log(user);

    setUsers([...users, user]); // spread operator
    setNewNome('');
    setNewEmail('');
    setNewCPF('');
    setNewTelefone('');
    setNewLogradouro('');
    setNewNumero('');
    setNewComplemento('');
    setNewBairro('');
    setNewCidade('');
    setNewEstado('');
    setNewCEP('');
	}

return (
  <Form>
  <Header> CADASTRO DE CLIENTES
    <br/>
    <img width={250} src={backgroundImage} />
    <br/>
    <br/>
    <p1>DADOS PESSOAIS</p1>
    <br/>
    <input
        type="text"
        placeholder="Nome..."
        value={newNome}
        onChange={handleInputChangeNewNome}
        />
    <br/>    
    <input
        type="text"
        placeholder="E-mail..."
        value={NewEmail}
        onChange={handleInputChangeNewEmail}
        />
    <br/>    
    <input
        type="text"
        placeholder="CPF..."
        value={NewCPF}
        onChange={handleInputChangeNewCPF}
        />
    <br/>
    <input
        type="text"
        placeholder="Telefone..."
        value={NewTelefone}
        onChange={handleInputChangeNewTelefone}
        />
    <br/>
    <br/>
    <p1>ENDEREÇO DO CLIENTE</p1>
    <br/>
    <input
        type="text"
        placeholder="Logradouro..."
        value={NewLogradouro}
        onChange={handleInputChangeNewLogradouro}
    />    
    <br/>
    <input
        type="text"
        placeholder="Numero..."
        value={NewNumero}
        onChange={handleInputChangeNewNumero}
        />
    <br/>
    <input
        type="text"
        placeholder="Complemento..."
        value={NewComplemento}
        onChange={handleInputChangeNewComplemento}
        />
    <br/>
    <input
        type="text"
        placeholder="Bairro..."
        value={NewBairro}
        onChange={handleInputChangeNewBairro}
        />
    <br/>
    <input
        type="text"
        placeholder="Cidade..."
        value={NewCidade}
        onChange={handleInputChangeNewCidade}
        />
    <br/>
    <input
        type="text"
        placeholder="Estado..."
        value={NewEstado}
        onChange={handleInputChangeNewEstado}
        />
    <br/>
    <input
        type="text"
        placeholder="CEP..."
        value={NewCEP}
        onChange={handleInputChangeNewCEP}
        />
    <br/>
    <br/>
      <ul>
        {users.map(user => <li key={user.id}> 
          <span>DADOS PESSOAIS:</span>
          <br/>
          <span>{`NOME: `+user.Nome}</span>
          <span>{` -- E-MAIL: `+user.Email}</span>
          <span>{` -- CPF: `+user.CPF}</span>
          <span>{` -- TEL: `+user.Telefone}</span>
          <br/>
          <span>DADOS DO ENDEREÇO:</span>
          <br/>
          <span>{`LOGRADOURO: `+user.Logradouro}</span>
          <span>{` -- NUM: `+user.Numero}</span>
          <span>{` -- BAIRRO: `+user.Bairro}</span>
          <span>{` -- CIDADE: `+user.Cidade}</span>
          <span>{` -- UF: `+user.Estado}</span>
          <span>{` -- CEP: `+user.CEP}</span>
          <br/>
          <br/>
        </li>)}        
      </ul>
    </Header>
    <br/>
    <button type="button" onClick={addNewUser}>Adicionar Cliente</button>
  </Form>
  );
}