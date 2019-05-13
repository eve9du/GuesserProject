import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row,Col} from 'react-bootstrap'
import Peers from './components/Peers'
import Files from './components/File'
import Node from './components/Node'
import DragAndDrop from './components/dragDrop'

class App extends Component {
  state={log:'',fValue:'',pValue:'',peerList:['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmVcSqVEsvm5RR9mBLjwpb2XjFVn5bPdPL69mL8PH4','/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmVcSqVEJ4029jkeo90291Jl2jodkIE08582J206meo94D39',
'/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmVcSqVEskot93Psk6Jo0jiUR04wR8930FJ5R9KW98ijsk', '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmVcSqVork3069JFOKMS059mco29f490K0395jf095jKFJ','/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmVcSqkf20D09F27gd7SR6Gw6489fbGY798d7s6HF99fe'],
fileList:[{Name:'image.png', CID:'QMalsoifhUT9382JKJJS084j9837JDL209', Size:'425617'},{Name:'dog.png', CID:'GS904928jld02JDLi7W903FJjfgs983JLJ7',Size:'598379'},{Name:'readme.md',CID:'FH9582JFUS9482hhdiORIW83929cj0W',Size:'309482'}]

};


handleConnect=()=>{
  let listToShow=[...this.state.peerList];
      if(this.state.pValue.includes('/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/')&& !(this.state.peerList.includes(this.state.value))){
          listToShow.push(this.state.pValue)
          this.setState({peerList:listToShow, log:'Successfully Connected to Peer!'});
      }
      else{
      this.setState({log:'Unable to connect to Peer!'})
      }   
}
handlePInputChange=(e)=>{
 
  this.setState({pValue:e.target.value})
}
 makeid =(length)=> {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

handleFileDrop = (files) => {
  console.log('here');
  let fileList = [...this.state.fileList]
  
    if (!files[0].name) return
    console.log(fileList.includes(files[0].name));
    for(let i=0;i<fileList.length;i++){
      if(fileList[i].Name === files[0].name){
        this.setState({log:'Unable to upload' +' '+files[0].name +' '+'again.'})
        return;
      }
    }
    fileList.push({Name:files[0].name, CID: this.makeid(32), Size: Math.floor(100000 + Math.random() * 900000)})
  this.setState({fileList:fileList, log:fileList[fileList.length-1].Name+ ' '+ 'was successfully uploaded!'});
  console.log(fileList);
  
}
handleFInputChange=(e)=>{
  this.setState({fValue:e.target.value})
}
handleDownloadClick=()=>{
  this.setState({log:'Unable to download file!'})
}
handleFetch=()=>{
  let string ='Unable to fetch file'
  this.setState({log:string+' '+ this.state.fValue});
}
  render(){
   
    let style;
    if(this.state.log.includes('Unable')){
      style={color:'red'}
    }
    else{
      style={color:'green'}
    }
  return (
    <div className="App">
  <Row><Col style={{backgroundColor:'rgb(239, 241, 244)', marginBottom:'0.5%'}}><Node style={style} log={this.state.log}/></Col></Row>
  <Row>
    <Col style={{fontFamily:'Inconsolata', backgroundColor:'rgb(239, 241, 244)',marginBottom:'0.5%'}} sm={4}><Peers value={this.state.pValue}addressList={this.state.peerList} onClick={this.handleConnect}onChange={(e)=>this.handlePInputChange(e)}/></Col>
    <Col style={{backgroundColor:'rgb(239, 241, 244)',borderLeft:'7px solid rgb(3, 20, 45)',marginBottom:'0.5%'}} sm={8}><Files handleDrop={this.handleFileDrop} onInputChange={(e)=>this.handleFInputChange(e)} onFetchClick={this.handleFetch}onImageClick={this.handleDownloadClick} fileList={this.state.fileList}/></Col>
  </Row>;

    </div>
  );
}
}
export default App;
