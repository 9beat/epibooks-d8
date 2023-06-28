import React, { useState } from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import './Browse.css';


// search engine component
function SearchInput(props) {

    // set state of search input & placeholder
    const [searchText, setSearchText] = useState("")
    const [placeholder, setPlaceholder] = useState("Search your book")

    // handle search input click
    function handleInputClick(e) {
        if (placeholder !== "") {
            setPlaceholder("");
        }
    }

    // handle search input blur
    function handleInputBlur(e) {
        if (searchText === "") {
            setPlaceholder("Search your book");
        }
    }

    // handle search input change
    function handleInputChange(e) {
        const inputValue = e.target.value;
        setSearchText(inputValue);
        props.onQueryChange(inputValue)
        // console.log(inputValue);
    }

    // return search input
    return(
        <input  
            type="text" 
            className="text-center bg-secondary w-100 text-warning" 
            placeholder={placeholder} 
            value={searchText}  
            onChange={handleInputChange}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
        />
    )
}

// render browse page
export default function Browse(props) {
    
    function handleCategoryChange(event) {
        const selectedCategory = event.target.value;
        props.onCategoryChange(selectedCategory);
    }

    // set state of query
    function handleQueryChange(value) {
        props.onQueryChange(value)
    }

    // return browse page
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" className='m-auto'>
        <Container>
            <Nav className='d-flex align-items-center justify-content-center m-auto'>
                
                {/* search input */}
                <SearchInput onQueryChange={handleQueryChange} />
                
                {/* select-form */}
                <Form.Select
                    size="sm"
                    className="bg-dark text-center form-select w-100"
                    onChange={handleCategoryChange}>
                        <option value="tutte">ALL CATEGORIES</option>
                        <option value="fantasy">FANTASY</option>
                        <option value="scifi">SCI-FI</option>
                        <option value="history">HISTORY</option>
                        <option value="romance">ROMANCE</option>
                        <option value="horror">HORROR</option>
                </Form.Select>
            </Nav>
        </Container>
        </Navbar>
        </>
    )
}
