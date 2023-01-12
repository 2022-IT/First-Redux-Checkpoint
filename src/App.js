import React from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

const App = () => {
	const handleClick = event => {
		if (event.target.style.textDecoration) {
		  event.target.style.removeProperty('text-decoration');
		} else {
		  event.target.style.setProperty('text-decoration', 'line-through');
		}
	  };
	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
			<TodoList />
			<center><p style={{fontSize:"1.4cm",fontWeight:"bold"}} onClick={handleClick}>Go To Work</p></center>

            <br />

            <center><p style={{fontSize:"1.4cm",fontWeight:"bold"}} onClick={handleClick}>Buy Groceries</p></center>

            <br />

            <center><p style={{fontSize:"1.4cm",fontWeight:"bold"}} onClick={handleClick}>Travel To Spain</p></center>
		</div>
	);
};

export default App;