import './App.css';
import React,{Component} from 'react';

class Image extends Component {
	constructor(props){
		super(props);
		this.state = {like:false};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		if (this.state.like){
			this.setState({like:false});
		}
		else{
			this.setState({like:true});
		}
	}
	render(){
		let tag;
		if (this.state.like){
			tag = <button id='likeBtn'  onClick={this.handleClick}>Liked</button>
		}
		else{
			tag = <button id='likeBtn'  onClick={this.handleClick}>Like?</button>
		}
		return (<div>
				<div id='imageLocn'>
				<img  src={this.props.image.img_src} alt="Not Found"/>
				</div>
				<div>
				<div>
				<p id='text'>{this.props.image.rover.name + ' - ' + this.props.image.camera.full_name}</p>
				<p id='text'>{this.props.image.earth_date}</p>
				</div>
				<div id='footer'>{tag}</div>
				</div>
				</div>)
	}

}

export default Image;