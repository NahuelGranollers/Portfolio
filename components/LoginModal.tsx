import React, { useState, FormEvent } from 'react';

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Junior2016#') {
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative bg-brand-surface rounded-lg shadow-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-brand-text-secondary">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full bg-brand-bg border border-brand-surface rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-text-secondary">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full bg-brand-bg border border-brand-surface rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
              required
            />
          </div>
          
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex justify-end space-x-4 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-brand-text rounded-md hover:bg-brand-bg">Cancelar</button>
            <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
              Entrar
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 text-brand-text-secondary hover:text-white transition-colors"
          aria-label="Close login modal"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default LoginModal;