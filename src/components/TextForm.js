import React , {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //  console.log("upper click was clicked : " + text);
     let newtext = text.toUpperCase();
     setText(newtext);
     props.showAlert("Converted to Upper Case!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }

  const handleLowClick = ()=>{
    // console.log("lower case has been initiated");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case!", "success");
  }

  const handleClearClick = ()=>{
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className = "container" style={{color: props.mode === 'dark'?'white' : 'black'}}>
        <h1 className="mb-3">{props.heading}</h1>

        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white', color: props.mode === 'dark'?'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
   <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
   <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick} >Clear</button>
   <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleCopy} >Copy All</button>
    </div>

    <div className="container my-5" style={{color: props.mode === 'dark'?'white' : 'black'}}>
        <h3>Your text summary</h3>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>

        <h4>Preview</h4>
        <p>{text.length > 0 ?text:"Nothing to Preview"}</p>
    </div>

    </>
  )
}
