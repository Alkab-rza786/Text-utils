import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success ");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success ");
    }
  }

  return (
    <>
      {/* <Router> */}


      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <Routes>
            <Route exact path="/about" element={<About />} >

            </Route> */}
        <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />

        {/* <Route exact path="/home" element={}> */}

        {/* </Route> */}
        {/* </Routes> */}


      </div>


      {/* </Router> */}

    </>
  );
}

export default App;
