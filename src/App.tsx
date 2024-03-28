import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Pagination from './components/Pagination';
import './App.css'; // Make sure to create a corresponding CSS file

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(24);

  // Dummy data for the cards
    const cardsData = [
        {
            id: 1,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Shawshank Redemption',
            rating: 9.3,
            year: 1994
        },
        {
            id: 2,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Godfather',
            rating: 9.2,
            year: 1972
        },
        {
            id: 3,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Dark Knight',
            rating: 9.0,
            year: 2008
        },
        {
            id: 4,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Pulp Fiction',
            rating: 8.9,
            year: 1994
        },
        {
            id: 5,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Forrest Gump',
            rating: 8.8,
            year: 1994
        },
        {
            id: 6,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            rating: 8.8,
            year: 2001
        },
        {
            id: 7,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Inception',
            rating: 8.8,
            year: 2010
        },
        {
            id: 8,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Matrix',
            rating: 8.7,
            year: 1999
        },
        {
            id: 9,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Schindler\'s List',
            rating: 8.9,
            year: 1993
        },
        {
            id: 10,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Silence of the Lambs',
            rating: 8.6,
            year: 1991
        },
        {
            id: 11,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Saving Private Ryan',
            rating: 8.6,
            year: 1998
        },
        {
            id: 12,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Jurassic Park',
            rating: 8.1,
            year: 1993
        },
        {
            id: 13,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Departed',
            rating: 8.5,
            year: 2006
        },
        {
            id: 14,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Prestige',
            rating: 8.5,
            year: 2006
        },
        {
            id: 15,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Green Mile',
            rating: 8.6,
            year: 1999
        },
        {
            id: 16,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Shining',
            rating: 8.4,
            year: 1980
        },
        {
            id: 17,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Interstellar',
            rating: 8.6,
            year: 2014
        },
        {
            id: 18,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Avengers',
            rating: 8.0,
            year: 2012
        },
        {
            id: 19,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Whiplash',
            rating: 8.5,
            year: 2014
        },
        {
            id: 20,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Revenant',
            rating: 8.0,
            year: 2015
        },
        {
            id: 21,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Moonlight',
            rating: 7.4,
            year: 2016
        },
        {
            id: 22,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'La La Land',
            rating: 8.0,
            year: 2016
        },
        {
            id: 23,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Dunkirk',
            rating: 7.8,
            year: 2017
        },
        {
            id: 24,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Blade Runner 2049',
            rating: 8.0,
            year: 2017
        },
        {
            id: 25,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Three Billboards Outside Ebbing, Missouri',
            rating: 8.2,
            year: 2017
        },
        {
            id: 26,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Roma',
            rating: 7.7,
            year: 2018
        },
        {
            id: 27,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'A Star Is Born',
            rating: 7.7,
            year: 2018
        },
        {
            id: 28,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Parasite',
            rating: 8.6,
            year: 2019
        },
        {
            id: 29,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Joker',
            rating: 8.4,
            year: 2019
        },
        {
            id: 30,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Once Upon a Time in Hollywood',
            rating: 7.6,
            year: 2019
        },
        {
            id: 31,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Nomadland',
            rating: 7.3,
            year: 2020
        },
        {
            id: 32,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Trial of the Chicago 7',
            rating: 7.8,
            year: 2020
        },
        {
            id: 33,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Mank',
            rating: 6.8,
            year: 2020
        },
        {
            id: 34,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Soul',
            rating: 8.0,
            year: 2020
        },
        {
            id: 35,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Minari',
            rating: 7.5,
            year: 2020
        },
        {
            id: 36,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Father',
            rating: 8.1,
            year: 2020
        },
        {
            id: 37,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Judas and the Black Messiah',
            rating: 7.5,
            year: 2021
        },
        {
            id: 38,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Green Knight',
            rating: 6.5,
            year: 2021
        },
        {
            id: 39,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Dune',
            rating: 8.0,
            year: 2021
        },
        {
            id: 40,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'The Power of the Dog',
            rating: 6.9,
            year: 2021
        },
        {
            id: 41,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'CODA',
            rating: 7.9,
            year: 2021
        },
        {
            id: 42,
            image: 'https://img.dopebox.to/xxrz/250x400/243/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
            title: 'Belfast',
            rating: 7.5,
            year: 2021
        }
    ];

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
      <div className="app">
        <Header title="Flick Fusion" />
        <div className="card-grid">
          {currentCards.map(card => (
              <Card key={card.id} image={card.image} title={card.title} rating={card.rating} year={card.year} />
          ))}
        </div>
        <Pagination cardsPerPage={cardsPerPage} totalCards={cardsData.length} paginate={paginate} currentPage={currentPage} />
      </div>
  );
};

export default App;