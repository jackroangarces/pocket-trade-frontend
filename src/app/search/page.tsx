'use client';

import React, { useState } from 'react';
import { cards } from '@/utils/dummyData';
import CardList from '@/components/cardlist';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filterCards = () => {
    const filtered = cards.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="search-page">
      <h1>Search for Cards</h1>
      <input
        type="text"
        placeholder="Search for a card..."
        className="search-input"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button className="search-button" onClick={filterCards}>
        Search
      </button>

      {/* Display search results */}
      <div className="search-results">
        {filteredCards.length > 0 ? (
          <CardList cards={filteredCards} />
        ) : (
          <p>No results found...</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;