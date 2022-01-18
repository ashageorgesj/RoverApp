import './App.css';
import React,{Component} from 'react';
import Image from './Image.js';

function ImgList(props){
	
	//return <div>{props.images.map((image)=><div key={image.id}><img src={image.img_src}/></div>)}</div>
	return <div>{props.images.map((image)=><div key={image.id}><Image image={image}/></div>)}</div>

}


export default ImgList;