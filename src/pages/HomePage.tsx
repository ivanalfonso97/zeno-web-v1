import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark-base text-dark dark:text-white">
      <h1 className="title font-bold mb-4">Welcome to Zeno AI Chat!</h1>
      <p className="text-lg">This is your new home page. Start chatting!</p>
    </div>
  )
}

export default HomePage; 