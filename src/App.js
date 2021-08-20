import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classcounter from './components/classcounter';
import Functioncounter from './components/hookscounter';
import LifeCycle2 from './components/lifeCycle2'
import Jsonform from './components/json-form'
import Jsonform1 from './components/json-form1'
import JsonMaterialForm from './components/json-form-materialUI'
import MaterialForm2 from './components/material-form2'
class App extends React.Component {
  render(){
          return (
    <div className="App">
        {/* <Classcounter/> */}
        {/* <Functioncounter/> */}
         {/* <LifeCycle2/> */}
        {/* <Jsonform/> */}
        {/* <Jsonform1/> */}
        {/* <JsonMaterialForm/> */}
        <MaterialForm2/>
    </div>
  );
  }

}

export default App;
