import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [content, setContent] = useState('');
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) setContent(savedContent);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [unsavedChanges]);

  const handleChange = (value) => {
    setContent(value);
    setUnsavedChanges(true);
  };

  const handleSave = () => {
    localStorage.setItem('richTextContent', content);
    setUnsavedChanges(false);
    alert('Content saved successfully!');
  };

  return (
    <div>
      <h1>Rich Text Editor</h1>
      <ReactQuill value={content} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default RichTextEditor;