import { Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function Arduinos(){

  const[my_arduinos, setArduinos] = useState([]);
  const navigate = useNavigate();

  // Read, busca todos os registros da api
  useEffect(() => {
    api.get('api/v1/arduinos', {})
    .then(response => {setArduinos(response.data)})
  },[]);

  // Update, navega para tela NewUpdate
  async function updateArduino(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('Erro ao navegar');      
    }
  }


  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Arduinos Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_arduinos.map(arduino => (
              <tr key={arduino.id}>
                <th scope="row">{arduino.id}</th>
                <td>{arduino.name}</td>
                <td>{arduino.description}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateArduino(arduino.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger">Excluir</button>

                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}