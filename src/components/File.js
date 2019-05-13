import React from 'react'
import './Peers.css'
import {Container, Row,Col} from 'react-bootstrap'
import download from './download-image.png'
import upload from './upload-Icon.png'
import DragAndDrop from './dragDrop'

const Files =(props) =>{
let tableTitles=null;
if(props.fileList.length!==0){
    tableTitles=<Row className='tableTitles'><Col sm={3}>NAME</Col><Col sm={4}>CID</Col><Col sm={3}>SIZE</Col><Col sm={2}></Col></Row>
}
    return(
        <div>
<Row style={{padding:'1.5%', fontFamily:'Roboto Mono', fontSize:'20px', fontStyle:'bold',borderBottom:'2px solid rgb(208, 211, 216)', marginBottom:'20px'}}><Col>Files</Col></Row>
<Row style={{marginBottom:'6%'}}><Col><input onChange={props.onInputChange}placeholder='Enter a multihash' className='answer'/><button onClick={props.onFetchClick} className='search' style={{padding:'8px 2%'}}>Fetch</button></Col></Row>

 <DragAndDrop handleDrop={props.handleDrop} >
       <div style={{marginBottom:'10%',height: 200, width: 550, border:'2px dashed grey'}}>
      <div style={{marginTop:'10%', fontFamily:'Lato',fontSize:'20px'}}> <img style={{height:80, width:80}} src={upload}/><span>Drag & Drop files here</span></div>
       </div>
              </DragAndDrop>


<Container className='table'>
{tableTitles}
{props.fileList.map((file)=>{
    return(
        <Row style={{padding:'1%'}}><Col sm={3}>{file.Name}</Col><Col sm={4}>{file.CID}</Col><Col sm={3}>{file.Size}</Col><Col sm={2}><img onClick={props.onImageClick} style={{width:'20px',height:'20px'}}src={download}/></Col></Row>
    );
})}
</Container>
</div>
    );
}

export default Files;