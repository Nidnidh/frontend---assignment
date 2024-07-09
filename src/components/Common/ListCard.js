import React from 'react';

const ListCard = ({ items, title }) => (
  <div className="list-card">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ListCard;
