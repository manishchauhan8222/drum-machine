import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const controls = {
  Q: {name:"Heater 1", audio: "Q", id: "a1" },
  q: {name:"Heater 1", audio: "Q" , id: "a1"},
  W: {name:"Heater 2", audio: "W" , id: "a2"},
  w: {name:"Heater 2", audio: "W" , id: "a2"},
  E: {name:"Heater 3", audio: "E" , id: "a3"},
  e: {name:"Heater 3", audio: "E" , id: "a3" },
  A: {name:"Heater 4", audio: "A" , id: "a4"},
  a: {name:"Heater 4", audio: "A" , id: "a4" },
  S: {name:"Clap", audio: "S", id: "a5"},
  s: {name:"Clap", audio: "S", id: "a5"},
  D: {name:"Open-HH", audio: "D", id: "a6"},
  d: {name:"Open-HH", audio: "D", id: "a6"},
  Z: {name:"Kick-n'-Hat", audio: "Z", id: "a7"},
  z: {name:"Kick-n'-Hat", audio: "Z", id: "a7"},
  X: {name:"Kick", audio: "X", id: "a8"},
  x: {name:"Kick", audio: "X", id: "a8"},
  C: {name:"Closed-HH", audio: "C", id: "a9"},
  c: {name:"Closed-HH", audio: "C", id: "a9"},
}

const Display = props => {
  return(
      <div id='display'>
          <h3>{props.show}</h3>
      </div>
  )
}



const DrumPads = props => {
  return(
      <div className='pads' >
          <button className='drum-pad' id='a1' value={"Q"} onClick={props.onClick}>Q 
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip' id='Q'></audio> 
          </button>
          <button className='drum-pad' id='a2' value={"W"} onClick={props.onClick}>W
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className='clip' id='W'></audio> 
          </button>
          <button className='drum-pad' id='a3' value={"E"} onClick={props.onClick}>E
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className='clip' id='E'></audio> 
          </button>
          <button className='drum-pad' id='a4' value={"A"} onClick={props.onClick}>A
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className='clip' id='A'></audio> 
          </button>
          <button className='drum-pad' id='a5' value={"S"} onClick={props.onClick}>S
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='S'></audio> 
          </button>
          <button className='drum-pad' id='a6' value={"D"} onClick={props.onClick}>D
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className='clip' id='D'></audio> 
          </button>
          <button className='drum-pad' id='a7' value={"Z"} onClick={props.onClick}>Z
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip' id='Z'></audio> 
          </button>
          <button className='drum-pad' id='a8' value={"X"} onClick={props.onClick}>X
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id='X'></audio> 
          </button>
          <button className='drum-pad' id='a9' value={"C"} onClick={props.onClick}>C
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='C'></audio> 
          </button>
      </div>
  )
}

class App extends React.Component{
  constructor(props){
      super(props);

      this.state = {
          key: ""
      }
      this.handleClick = this.handleClick.bind(this);
      this.escFunction = this.escFunction.bind(this);

  }

  escFunction(e){
      document.getElementById(controls[e.key].audio).play();
      document.getElementById(controls[e.key].id).style.background = "#442c2e4d";
      this.setState({
          key: controls[e.key].name
      })
      setTimeout(()=>{
      document.getElementById(controls[e.key].id).style.background = "#feeae6";
      },100)
    }
    componentDidMount(){
      document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.escFunction, false);
    }

  handleClick(e){
      document.getElementById(e.target.value).play();
      document.getElementById(e.target.id).style.background = "#442c2e4d";
      this.setState({
          key: controls[e.target.value].name
      })
      setTimeout(()=>{
        document.getElementById(e.target.id).style.background = "#feeae6";
        },100)
  }



  render(){
      return(
        <div>
        <h1 id="heading">DRUM PLAYER</h1>
          <div id='drum-machine'> 
              <DrumPads onClick = {this.handleClick} onKeyPress = {this.handleKeyPress}/>
              <Display show = {this.state.key} />
          </div>
        </div>

      )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




