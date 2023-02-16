import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from './reducers';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Post } from './reducers/posts';
import { fetchPosts, getPosts } from './actions/posts';

type Props={
  onIncrement: ()=>void;
  onDecrement: ()=>void;
}



function App({ onIncrement, onDecrement } :Props) {
  const dispatch =useDispatch();
  const counter =useSelector((state : RootState)=>state.counter);
  const todos : string[] =useSelector((state : RootState)=>state.todos);
  const posts :Post[] =useSelector((state :RootState)=>state.posts[0]);

  const [todoValue, setTodoValue] =useState("");
  const handleChange=(e : React.ChangeEvent<HTMLInputElement>)=>{
    setTodoValue(e.target.value);
  }



  const addTodo =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch({
      type:"ADD_TODO",
      text:todoValue
    });
    setTodoValue("");
  }

  
    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch ]);

  
 

  return (
    <div className="App">
         Clicked : {counter} times 

        <button onClick={onIncrement}>
          +
        </button>

        <button onClick={onDecrement}>
          -
        </button>
       <ul>
          {todos.map((todo, index)=><li key={index}>{todo}</li>)}
       </ul>
      <form onSubmit={addTodo}>
          <input type='text' value={todoValue} onChange={handleChange} />
          <input type="submit" />
      </form>

          <ul>
            {posts && posts.map((post,index)=><li key={index}>{post.title}</li> ) }
          </ul>
    </div>
  );
}

export default App;
