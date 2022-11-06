import React from 'react'
import { useState } from 'react'

export default function Textarea(props){
    const handleOnUp=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleOnLow=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleOnClear=()=>{
        let newtext=("")
        setText(newtext)
    }
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here");
  return (
    <div className={`text-${props.mode==='light' ? 'dark': 'light'}`}>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1"  className="form-label"><h3>Write your text here</h3></label>
  <textarea className="form-control" value={text} onChange={handleOnchange}  id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button onClick={handleOnUp}  type="button" className="btn btn-primary m-2">Uppercase</button>
<button onClick={handleOnLow}  type="button" className="btn btn-primary m-2">Lowercase</button>
<button onClick={handleOnClear}  type="button" className="btn btn-primary m-2">Clear Text</button>
<h2>Text Summary</h2>
<p>{text.length} Characters and {text.split(" ").length} Words</p>
    </div>
  )
}
