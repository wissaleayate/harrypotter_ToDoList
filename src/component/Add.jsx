import React, { useState } from 'react';
import './add.css';
import { useEffect} from 'react';
import music from './Hedwigs Theme.mp3';

function Add() {
  useEffect(() => {
    const audio = new Audio(music);
    audio.play();
  }, []);

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks(prev => [...prev, { text: input, done: false }]);
      setInput('');//empty input
    }
  };

  const toggleDone = index => {
    setTasks(prev =>
      prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t))
    );
  };
  const deleteTask= (index) =>{
    const newTasks = tasks.filter((_,i)=> i !== index);
    setTasks(newTasks);

  };

  return (
    <>
      <h2>add tasks</h2>
      <div className='box'>
        <input
          id='inputTask'
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button id='btn' onClick={addTask}>
          add
        </button>
        <div className="task-list" id='task-list'>
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="task"
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}
            >
              <p>{task.text}</p>
              {!task.done && (
                <button
                  className="mark-done"
                  onClick={() => toggleDone(idx)}
                >
                  Done
                </button>
              )}
              <button onClick={()=>deleteTask(idx)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Add;
