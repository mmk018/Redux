import {createStore} from 'redux';


const reducer = (state = 0, action)=>{
 
  switch(action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state -1;
    case 'RESET':
      return state = 0;    
    default:
      return state; 
  }
  
 }

 const store = createStore(reducer);
 document.getElementById('plus').addEventListener('click', ()=>{
  store.dispatch({type: 'PLUS'});
 });
 document.getElementById('minus').addEventListener('click', ()=>{
  store.dispatch({type: 'MINUS'});
 });
 document.getElementById('reset').addEventListener('click', ()=>{
   store.dispatch({type: 'RESET'});
 })
 
 const update = ()=>{
  document.getElementById('counter').textContent= store.getState()
 }

 store.subscribe(update);