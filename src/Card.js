import React, { useState } from 'react';
import './Cards.css';

const Card = ({ card, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [videoUrl, setVideoUrl] = useState(card.videoUrl);

  const handleDelete = () => {
    onDelete(card.id);
  };

  const handleEdit = () => {
    const updatedCard = {
      id: card.id,
      title,
      description,
      videoUrl,
    };
    onEdit(updatedCard);
    setIsEditing(false);
  };

  return (
    <div className='card'>
      {isEditing ? (
        <div className='card__edit'>
          <input className='card__input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          <textarea className='card__textarea' value={description} onChange={(e) => setDescription(e.target.value)} />
          <br />
          <input className='card__link' type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
          <br />
          <button type="button" onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className='card__show'>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          {card.videoUrl && (
            <div>
              <iframe src={card.videoUrl} allowFullScreen width="560" height="315" title="Video" />
            </div>
          )}
          <button className='button_delete' type="button" onClick={handleDelete}>Delete</button>
          <button className='button_edit' type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}

    </div>
  );
};

export default Card;
