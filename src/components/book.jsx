import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../Css/book.css';

const Book = () => {
  const [bookList, setBookList] = useState([]);
  const [activeTab, setActiveTab] = useState('books'); 

  const getClassicBooks = () => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:classic") 
      .then(response => response.json())
      .then(json => setBookList(json.items))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getClassicBooks();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'books' && <BookList bookList={bookList} />}
    </div>
  );
}

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className={activeTab === 'books' ? 'active' : ''} onClick={() => onTabChange('books')}>Books</li>
        
      </ul>
    </nav>
  );
}

const BookList = ({ bookList }) => {
  const navigate = useNavigate();

  return (
    <div className="book-container">
      <div className='navbar-container'>
        <button onClick={() => navigate("/home")}>Go Home</button>
      </div>
      <ul className="book-list">
        {bookList.map(book => (
          <li key={book.id} className="book-item">
            <img
              className="book-image"
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192.png'} // Eğer kitap resmi yoksa bir yer tutucu resim kullanabilirsiniz
              alt={book.volumeInfo.title}
            />
            <p className="book-title">{book.volumeInfo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
