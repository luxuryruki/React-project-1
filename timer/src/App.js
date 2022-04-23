import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Table, Col, Container, Row } from 'react-bootstrap';

function App() {
  let [level, levelChange] = useState(0)
  let [breakLevel, breakLevelChange] = useState(0)
  let [structureShow,structureShowChange] = useState(false)
  let [structureArray,structureArrayChange] = useState([])

  return (
    <div className="App">

        <div className = "structureTitle">
          Blind Structure
        </div> 
        
        <Container fluid>
          <Row className='d-flex justify-content-center'>
            <Col lg={6}>
              <div className='d-flex justify-content-end'>
                <input placeholder="Level" onChange={(e)=>{levelChange(e.target.value)}}/>
                <input placeholder="Break level" onChange={(e)=>{breakLevelChange(e.target.value)}}/>
                <button onClick={()=>{}}>추가{level}</button>
              </div>
            </Col>
            <Col lg={6}>
              {
                structureShow === true 
                ? <Structure level={level} breakLevel={breakLevel} />
                : null
                
              }
              
            </Col>
          </Row>
        </Container>
    </div>
  );
}

function Structure(props){
  
  return(

    <div>
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
          {/* { map이옹} */}
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
    </div>
    
  )
}

export default App;

function CreateStructure(){

}