import React from 'react';
import Footer from './apps/todo/components/Footer';
import AddTodo from './apps/todo/containers/AddTodo';
import VisibleTodoList from './apps/todo/containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
