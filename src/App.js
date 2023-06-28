import React, { useState, useEffect } from 'react';

// import react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import components
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import BookDetail from "./components/BookDetail";
import Spinner from './components/Spinner';

// import views
import Home from './pages/Home';
import About from './pages/About';
import Browse from './pages/Browse';
import ErrorPage from './pages/ErrorPage';

// import json files
import allBooks from "./json/allbooks.json";
import horror from "./json/horror.json";
import scifi from "./json/scifi.json";
import romance from "./json/romance.json";
import history from "./json/history.json";
import fantasy from "./json/fantasy.json";
import LatestRelease from './components/LatestRelease';



// APP
export default function App() {

    // category state
    const [query, setQuery] = useState('')

    // category selection state
    const [selectedCategory, setSelectedCategory] = useState(allBooks);

    // selected book state 
    const [selectedBook, setSelectedBook] = useState(-1);
    
    // loading state
    const [loading, setLoading] = useState(true);

    // handle search input change
    function handleInputChange(value) {
      setQuery(value)
    }

    // handle category change
    function handleCategoryChange(selectedCategory) {
        setSelectedCategory(selectedCategory);
        // console.log("handle category change -->", selectedCategory);
    }

    // handle book selection
    function handleBookSelect(asin) {
      setSelectedBook(asin);
    }

    // initialize selected book
    let filteredBooks = null;

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 0.00001);
    }, [filteredBooks]);

    // filter books category based on the selected category
    if (selectedCategory === "horror") {
        filteredBooks = horror.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    } else if (selectedCategory === "scifi") {
        filteredBooks = scifi.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    } else if (selectedCategory === "history") {
        filteredBooks = history.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    } else if (selectedCategory === "romance") {
        filteredBooks = romance.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    } else if (selectedCategory === "fantasy") {
        filteredBooks = fantasy.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    } else {
        filteredBooks = allBooks.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    // RETURN APP
    return (
      <Router>
        <MyNav />
        <Routes>
          <Route 
            index
            element={<Home />} 
          />
          <Route 
            path="about" 
            element={<About />}
          />
          <Route 
            path="browse" 
            element=
              {
              <>
                <Browse
                  onQueryChange={handleInputChange}
                  onCategoryChange={handleCategoryChange}
                />{
                  loading ? <Spinner /> : <LatestRelease 
                    books={filteredBooks}
                    onBookSelect={handleBookSelect}
                />}
              </>
              } 
          />
          <Route 
            path="*" 
            element={<ErrorPage /> } 
          />

          <Route path=':category/:id' element={<BookDetail />} />
        </Routes>
        <MyFooter />
      </Router>
    );
}


