import {useEffect, useState} from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import "./App.css"
import Scanner from "./components/Scanner";
import Change from "./components/Change";

import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
  
  

  return (
    <div className="App">
      <h1 className="App">QR Code Scanning in React</h1>
      <Scanner/>
      <Change/>
    </div>
  );
}

export default App;
