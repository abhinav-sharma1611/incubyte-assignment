"use client";
import { useState } from 'react';
import { add } from "../utils/stringCalculator"

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const sum = add(input);
      setResult(sum);
    } catch (err: any) {
      setError(err.message);
    }
  };


  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Incubyte Assignment - String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numbers">Enter numbers seperated with comma:</label>
          <input
            type="text"
            id="numbers"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{
          padding: '10px 20px',
          border: '2px solid #6c757d',
          backgroundColor: '#6c757d',
          color: '#fff',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Calculate</button>
      </form>
      {result !== null && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Result:</strong> {result}
        </div>
      )}
      {error && (
        <div style={{ marginTop: '20px', color: 'red', fontSize: '18px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};
