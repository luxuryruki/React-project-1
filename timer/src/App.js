import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Table, Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

        <div className = "structureTitle">
          Blind Structure
        </div> 
        
        <Container fluid>
          <Row className='d-flex justify-content-center'>
            <Col lg={6}>
              <div className='d-flex justify-content-end'>
                <input placeholder="Level"></input>
                <input placeholder="Break level"></input>
                <button>추가</button>
              </div>
            </Col>
            <Col lg={6}>
              <div className='d-flex justify-content-end'>
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
          </Row>
        </Container>
    </div>
  );
}


export default App;

function CreateStructure(){

}