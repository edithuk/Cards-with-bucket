import React from 'react';
import App from './App';

const initialCard = {
  id: '1',
  title: 'Example Card',
  description: 'This is an example card.',
  videoUrl: '',
};

const Bucket = () => {
  return (
    <div className='bucket__body'>
      <App initialCard={initialCard} />
    </div>
  );
};

export default Bucket;
