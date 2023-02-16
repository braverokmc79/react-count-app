import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const loggerMiddleware =(store : any) =>(next:any) =>(action:any)=>{
    console.log("store" , store);
    console.log("action", action);
    next(action);
}
const middleware =applyMiddleware(thunk, loggerMiddleware);
const store =createStore(rootReducers , middleware);


const render = ()=>root.render(
  <React.StrictMode>
  <Provider  store={store}>
        <App  
            onIncrement={()=> store.dispatch({type:"INCREMENT"})}
            onDecrement={()=> store.dispatch({type:"DECREMENT"})}
        />
    </Provider>
  </React.StrictMode>
);

render();

store.subscribe(render);

