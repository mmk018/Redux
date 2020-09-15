import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from './actions';
import Counter from './components/Counter';
import './styles.css';
import App from './components/app';


//107 29:30

const store = createStore(reducer);
/* const {dispatch} = store; */

/* const bindActionCreator = (creator, dispatch)=>(...args)=>{
  dispatch(creator(args));
}  */





/* const {inc, dec, rnd} = bindActionCreators(
actions ,dispatch); */
/* const decDispatch = bindActionCreators(dec,dispatch);
const rndDispatch = bindActionCreators(rnd,dispatch); */



 
/*  document.getElementById('inc').addEventListener('click', 
  inc
);
 document.getElementById('dec').addEventListener('click', 
  dec
 );
 document.getElementById('rnd').addEventListener('click', ()=>{
    const value = Math.floor(Math.random() * 10);
   rnd(value)
 }) */
 
 
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    
    , document.getElementById('root'));
 

 
