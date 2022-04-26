
/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Table, Col, Container, Row } from 'react-bootstrap';

function App() {
  let [level, levelChange] = useState(0)
  let [breakLevel, breakLevelChange] = useState(0)
  let [structureShow,structureShowChange] = useState(false)
  let [structureArray,structureArrayChange] = useState([])
  
  let rows = [];
  
    for (let i = 1; i <= 10; i++) {
  
      rows.push(<ObjectRow num={i} key={i} />);
      
  }
  
  
  
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
                <button onClick={()=>{structureShowChange(true)}}>추가{structureArray}</button>
              </div>
            </Col>
            <Col lg={6}>
              {
                structureShow === true 
                ? <Structure level={level} breakLevel={breakLevel} rows={rows} />
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
        <button>저장</button>
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

          {props.rows}
          
        </tbody>
      </Table>
    </div>
    
  )
}

export default App;

function ObjectRow(props){

  useEffect(()=>{
    console.log("된다")
  });

  return(
    <tr>
      <td>{props.num}</td>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
    </tr>

  )
}