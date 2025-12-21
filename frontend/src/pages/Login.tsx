import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../api/http';
import Button from '../components/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await http.post('/api/auth/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.data.token);
        navigate('/');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-emerald-50/60 dark:from-slate-950 dark:to-slate-950 text-[color:var(--c-text)]">
      <div className="w-full max-w-md p-8 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-2xl shadow-xl dark:bg-slate-950/60 dark:border-slate-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-lg text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:bg-slate-950/40 dark:border-slate-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-lg text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:bg-slate-950/40 dark:border-slate-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
              required
            />
          </div>
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm dark:bg-red-900/30 dark:border-red-500/30 dark:text-red-200">
              {error}
            </div>
          )}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

