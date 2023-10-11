import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<BrowserRouter basename={process.env.PUBLIC_URL}>< App /></BrowserRouter>);
*/

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("iconanim");
  if (image) {
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();