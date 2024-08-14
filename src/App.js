import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
