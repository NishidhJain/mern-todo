import React, { useState } from 'react';
import Todo from '../components/Todo';

function Dashboard() {
	const [todo, setTodo] = useState('');
	const [remainingTasks, setRemainingTasks] = useState([1, 2]);
	const [completedTasks, setCompletedTasks] = useState([1]);

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleAddTodo = (e) => {
		e.preventDefault();
		console.log('Add todo :', todo);
		setTodo('');
	};

	return (
		<section className='dashboard'>
			<div>
				<input
					type='text'
					name='todo'
					placeholder='Write your task here...'
					value={todo}
					onChange={handleChange}
				/>
				<button type='submit' onClick={handleAddTodo}>
					Add Todo
				</button>
			</div>
			<h2>Remaining tasks</h2>
			<div className='tasks'>
				{remainingTasks.map((todo) => (
					<Todo />
				))}
			</div>
			<h2>Completed Tasks</h2>
			{completedTasks.map((todo) => (
				<Todo />
			))}
		</section>
	);
}

export default Dashboard;
