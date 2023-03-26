import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {

  //function for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    //after which message will remove
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b387b';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
    }
  }

  return (
   <>
   
   <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode ={toggleMode}/>
   <Alert alert= {alert}/>

   <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter the text here" mode={mode}/>
   </div>

   </>
  );
}

export default App;
