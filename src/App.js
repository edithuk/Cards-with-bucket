import React, { useState } from 'react';
import Card from './Card';
import './App.css'
// import Bucket from './Bucket'

const App = ({ initialCard }) => {
  const [bucket, setBucket] = useState([]);

  const handleCreate = () => {
    const newCard = {
      id: Date.now().toString(),
      title: 'New Card',
      description: 'This is a new card.',
      videoUrl: '',
    };
    setBucket([...bucket, newCard]);
  };

  const handleDelete = (cardId) => {
    const updatedBucket = bucket.filter((card) => card.id !== cardId);
    setBucket(updatedBucket);
  };

  const handleEdit = (updatedCard) => {
    const updatedBucket = bucket.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      } else {
        return card;
      }
    });
    setBucket(updatedBucket);
  };

  return (
    <div className='app'>
      <div className='create'>
      <h1>My Bucket</h1>
      <button className='app__button' type="button" onClick={handleCreate}>
        New Card
      </button>
      {bucket.map((card) => (
      <Card
        key={card.id}
        card={card}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    ))}
      </div>      
    </div>
  );
};

export default App;
