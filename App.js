import Header from "./components/Header";
import Banner from "./components/Banner";
import ServicesExperience from "./components/ServicesExperience";
import Projects from "./components/Projects";
import React,{useState} from 'react';
import './App.css';
function App() {
  const[Hori,setHori]= useState(10)
  const[Veri,setHVeri]= useState(10)
  const[Blur,setBLur]= useState(10)
  const[clur,setColor]= useState(10)
  const[checkon,setCheck]= useState(false)
  return (
    <>
    <div className="App">
<div className="controls">
<label>HORIJONTAL LENGTH</label>
<input type="range"  min="-200" max="200" value={Hori} onChange={()=>setHori(e.target.value)} />
<label>BLUR LENGTH</label>
<input type="range"  min="0" max="200" value={Blur} onChange={()=>setBLur(e.target.value)} />
<label>VERTICAL LENGTH</label>
<input type="range"  min="-200" max="200" value={Veri} onChange={()=>setHVeri(e.target.value)} />
<label>COLOR</label>
<input type="color"  min="0" max="200" value={clur} onChange={()=>setColor(e.target.value)} />
<div className="switch">
    <label>
      OUTLINE
      <input type="checkbox" checked={checkon} onChange={()=>setCheck(!checkon)}/>
      <span className="lever"></span>
      INSET
    </label>
  </div>

</div>
<div className="output">
  <div className="box" style={{boxShadow:` ${checkon ?"inset": ""} ${Hori}px ${Veri}px ${Blur}px`}}>
    <p>box-shadow: {Hori}px {Veri}px {Blur}px {clur}</p>
    </div>
    </div>
    </div>
    </>
  );
}
export default App;