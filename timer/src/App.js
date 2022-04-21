import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Table, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

        <div>
          Blind Structure
        </div> 

        

        
        <div className="container d-flex">
          <Col sm={6}>
            <div>
              <input placeholder="Level"></input>
              <input placeholder="Break level"></input>
              <button>추가</button>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <input placeholder="Title"></input>
              <button>저장하기</button>
            </div>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Small</th>
                  <th>Big</th>
                  <th>Ante</th>
                  <th>Time</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><input></input></td>
                  <td><input></input></td>
                  <td><input></input></td>
                  <td><input></input></td>

                </tr>
                <tr>
                  <td>2</td>
                  <td><input></input></td>
                  <td><input></input></td>
                  <td><input></input></td>
                  <td><input></input></td>

                </tr>
                <tr>
                  <td>3</td>
                  <td><input></input></td>
                  <td><input></input></td>
                  <td><input></input></td>
                  <td><input></input></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </div>
    </div>
  );
}



export default App;

function CreateStructure(){

}