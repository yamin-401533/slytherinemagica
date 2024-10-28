import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const booksData = [
  {
    id: 1,
    image: require('../assets/images/img2.jpg'),
    link: 'https://drive.google.com/file/d/1JEtO2E4TjNkpLQVCN1PiT3zM5_BorUeY/view?usp=drive_link',
    title: "Harry Potter and the Philosopher's Stone",
    releaseDate: "1997",
    pages: "223",
    description: "Harry Potter discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id: 2,
    image: require('../assets/images/img3.jpg'),
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    title: "Harry Potter and the Chamber of Secrets",
    releaseDate: "1998",
    pages: "251",
    description: "Harry's second year at Hogwarts takes a sinister turn as a mysterious force terrorizes the school."
  },
  {
    id: 3,
    image: require('../assets/images/img4.jpg'),
    link: 'https://drive.google.com/file/d/1PegG-ejx61X082yQ4akE0AajqwE16FTP/view?usp=drive_link',
    title: "Harry Potter and the Prisoner of Azkaban",
    releaseDate: "1999",
    pages: "317",
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    description: "Harry learns more about his past as escaped prisoner Sirius Black seems to be hunting him."
  },
  {
    id: 4,
    image: require('../assets/images/img5.jpg'),
    link: 'https://drive.google.com/file/d/16fP0lN6Czak4fEhZSCM7tU5aznL82MvP/view?usp=drive_link',
    title: "Harry Potter and the Goblet of Fire",
    releaseDate: "2000",
    pages: "636",
    description: "Harry mysteriously enters a dangerous tournament between three major schools of magic."
  },
  {
    id: 5,
    image: require('../assets/images/img6.jpg'),
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    title: "Harry Potter and the Order of the Phoenix",
    releaseDate: "2003",
    pages: "766",
    description: "Harry forms a secret group to teach defensive magic as dark forces gather strength."
  },
  {
    id: 6,
    image: require('../assets/images/img7.jpg'),
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    title: "Harry Potter and the Half-Blood Prince",
    releaseDate: "2005",
    pages: "607",
    description: "Dumbledore prepares Harry for his final battle as they investigate Voldemort's past."
  },
  {
    id: 7,
    image: require('../assets/images/img9.jpg'),
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    title: "Harry Potter and the Deathly Hallows",
    releaseDate: "2007",
    pages: "607",
    description: "The final battle between good and evil in the wizarding world comes to an epic conclusion."
  }
];

const AppBooks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBooks = 3; 

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev + visibleBooks >= booksData.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? booksData.length - visibleBooks : prev - 1
    );
  };

  const getVisibleBooks = () => {
    const books = [];
    for (let i = 0; i < visibleBooks; i++) {
      const index = (currentIndex + i) % booksData.length;
      books.push(booksData[index]);
    }
    return books;
  };

  const getDotCount = () => Math.ceil(booksData.length / visibleBooks);

  const getCurrentDot = () => Math.floor(currentIndex / visibleBooks);

  return (
    <section id="books" className="books-slider">
      <div className="slider-container">
        <div className="title-holder">
          <h1>Hogwarts Library</h1>
          <div className="subtitle">Discover the Complete Harry Potter Book Series</div>
        </div>

        <div className="slider-wrapper">
          <button 
            className="nav-button prev"
            onClick={prevSlide}
            aria-label="Previous books"
          >
            <ChevronLeft className="nav-icon" />
          </button>

          <div className="books-container">
            <div 
              className="books-track"
              style={{
                transform: `translateX(-${currentIndex * (3 / visibleBooks)}%)`
              }}
            >
              {getVisibleBooks().map((book, index) => (
              <div key={`${book.id}-${index}`} className="book-card">
              
                  <div className="book-image">
                    
                    <img 
                      src={book.image} 
                      alt={book.title}
                      style={{ width: '525px', height: '600px' }}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="book-content">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-date">Release Date: {book.releaseDate}</p>
                    <p className="book-pages">Pages: {book.pages}</p>
                    <p className="book-description">{book.description}</p>
                    <a href={book.link}>
                      <button className="read-button">Read & explore Now</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-button next"
            onClick={nextSlide}
            aria-label="Next books"
          >
            <ChevronRight className="nav-icon" />
          </button>
        </div>

        <div className="slider-dots">
          {[...Array(getDotCount())].map((_, index) => (
            <span
              key={index}
              className={`dot ${getCurrentDot() === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * visibleBooks)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppBooks;