//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import ImgList from './ImgList.js';

class App extends Component {
  constructor(props){
    super(props);
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth()+1;
    if (month < 10){
      month = '0'+month;
    }
    let day = currentDate.getDate();
    this.state = {date:year+'-'+month+'-'+day,photos:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    this.getImages();
  }
  handleChange(e){
    this.setState({date:e.target.value});
  }

  handleSubmit(e){
     this.getImages();
     e.preventDefault();

  }
  getImages(){
    const {REACT_APP_API_KEY} = process.env;
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.state.date}&api_key=${REACT_APP_API_KEY}`)
     .then(res=>(res.json())
      .then(result=>{
        this.setState({photos:result.photos})})
      .catch(e=>console.log(e))
      )
     .catch(e=>console.log(e));
  }
  
  render(){
    const hasImages = this.state.photos.length > 0
    let tag;
    if (hasImages){
      tag = (<ImgList images={this.state.photos}/>)
    }
    else{
      tag = (<p>'There are no images'</p>)
    }
    console.log(tag)
  return (
    <div className="App">
      <header className="App-header">
      <p id='largetext'>Spacestagram</p>
      <p id='smalltext'>Brought to you by NASA's Image API</p>
      </header>
      <form className='Picker' onSubmit={this.handleSubmit}>
      <label>
      Choose a Date:
      <input type="date" name="pick" value={this.state.date} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="submit"/>
      </form>
      {tag}
      <footer><p>Built by <a href="https://www.linkedin.com/in/ashageorgesj/">Asha George</a></p></footer>
    </div>);
  }
    
    
    
  
}

export default App;
