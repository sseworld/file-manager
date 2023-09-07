import React, { useState, useEffect, useRef } from 'react';
import './CodeEditor.css'; // Import CSS for styling

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [lineNumbers, setLineNumbers] = useState([]);
  const codeEditorRef = useRef(null);

  // Function to handle code changes
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    updateLineNumbers(newCode);
  };

  // Function to update line numbers
  const updateLineNumbers = (code) => {
    const lines = code.split('\n');
    const lineNumbersArray = new Array(lines.length).fill(null).map((_, index) => index + 1);
    setLineNumbers(lineNumbersArray);
  };

  // Function to handle scrolling synchronization
  const handleScroll = () => {
    if (codeEditorRef.current) {
      const { scrollTop, scrollLeft } = codeEditorRef.current;
      codeEditorRef.current.scrollTop = scrollTop;
    }
  };

  // Update line numbers and synchronize scrolling on code change
  useEffect(() => {
    updateLineNumbers(code);
    handleScroll();
  }, [code]);

  return (
    <div className="code-editor-container">
      <div className="line-numbers">
        {lineNumbers.map((lineNumber, index) => (
          <div key={index}>{lineNumber}</div>
        ))}
      </div>
      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => handleCodeChange(e.target.value)}
        onScroll={handleScroll}
        ref={codeEditorRef}
      ></textarea>
    </div>
  );
};

export default CodeEditor;
