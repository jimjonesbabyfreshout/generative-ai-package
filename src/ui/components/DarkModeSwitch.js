import React, { useState } from 'react';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle dark mode globally in your application
  };

  return (
    <div className="dark-mode-switch">
      <h2>Dark Mode Switch</h2>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
        Dark Mode
      </label>
    </div>
  );
};