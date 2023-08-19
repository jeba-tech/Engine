import React from 'react';
import './App.css';
import InputForm from './Components/InputForm/InputForm';
function App() {
  return (
    <div className=" bg-secondary" >
      <header >
        <h1 className='text-white d-flex justify-content-center mb-5 p-5'>XYZ Engine Project</h1>
      </header>
      <main >

        <InputForm></InputForm>
      </main>
    </div>
  );
}

export default App;
