import React from 'react'
import './Peers.css'
import {Container, Row,Col} from 'react-bootstrap'

const Node =(props)=>{
return(
    <div>
    <Row style={{padding:'1%', fontFamily:'Roboto Mono', fontSize:'20px', fontStyle:'bold',borderBottom:'2px solid rgb(208, 211, 216)', marginBottom:'20px'}}><Col>Node</Col></Row>
    <Row style={{padding:'1%'}}><Col style={{fontFamily:'Roboto Mono'}} sm={2}>ID</Col><Col sm={8}>QmVcIro95OR4IDw9T053o2XjFVn5bPdPL69mL8PH4</Col></Row>
    <Row style={{padding:'2%'}}><Col style={{fontFamily:'Roboto Mono'}} sm={2}>Addresses</Col><Col sm={8}>/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmVcIro95OR4IDw9T053o2XjFVn5bPdPL69mL8PH4</Col></Row>
    <Row style={{paddingBottom:'2%'}}><Col style={{fontFamily:'Roboto Mono'}} sm={2}>Logs</Col><Col style={props.style} sm={8}>{props.log}</Col></Row>
    </div>

);
}

export default Node;