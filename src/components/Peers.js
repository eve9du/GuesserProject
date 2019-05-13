import React, { Component }from 'react'
import './Peers.css'
import {Container, Row,Col} from 'react-bootstrap'

const Peers =(props)=>{

let toShow=null;
   toShow= (props.addressList.map((item)=>{
        return(<Row><Col style={{height:'60px',textAlign:'justify'}}>{item}</Col></Row>)
    }));

return(
        <div>
       <Row style={{padding:'3%', fontFamily:'Roboto Mono', fontSize:'20px', fontStyle:'bold', borderBottom:'2px solid rgb(208, 211, 216)',marginBottom:'20px'}}><Col> Peers</Col></Row>
      <Row style={{marginBottom:'6%'}}><Col><input placeholder='Enter a multiaddress'value={props.value} onChange={props.onChange}className='answer'/><button onClick={props.onClick}className='search' style={{ padding: '8px 5%'}}>Connect</button></Col></Row>
      <Container className='table'>
      <Row style={{fontSize:'14px',color:'rgb(182, 187, 193)'}}><Col>CONNECTED PEERS
      </Col><Col sm={7}></Col> </Row>
        {toShow}
        </Container>
        </div>
       
        
    );

}

export default Peers;