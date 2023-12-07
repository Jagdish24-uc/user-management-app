// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPassword = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Signed in successfully!');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={signInWithEmailAndPassword}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
