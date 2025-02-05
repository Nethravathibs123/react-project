import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import UserDataForm from './components/UserDataForm/UserDataForm';
import RichTextEditor from './components/RichTextEditor/RichTextEditor';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/global.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/user-data" element={<UserDataForm />} />
      <Route path="/rich-text" element={<RichTextEditor />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;