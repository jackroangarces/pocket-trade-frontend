import React from 'react';
import CardItem from './carditem';
import { Card } from './carditem'; // Import Card type from CardItem


export default function CardList({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}