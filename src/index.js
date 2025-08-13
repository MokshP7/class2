import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tree from './App.js';
import reportWebVitals from './reportWebVitals';
class Student extends React.Component {
  render() 
  {
return <h2>Hi my name is Moksh</h2>;
  }
}
function Teacher() {
  return <h2>Hi,I am Moksh,Teacher Thangamani</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root.render(<Student />);
root2.render(<Teacher />);
root3.render(
  <React.StrictMode>
    <Tree />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
