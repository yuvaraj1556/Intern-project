import React from "react";
import { useState,useEffect } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
import SearchItem from "./Components/SearchItem";
import apiRequest from "./Components/apiRequest";

const App = () => {

  const API_URL = "http://localhost:8080/items";

  const [items, setItems] = useState([]);

  const [newItem,setNewItem] = useState('');

  const [search,setSearch] = useState('');

  const [fetchError,setFetchError] = useState(null);

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error('Data not received');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
          setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    (async () => fetchItems())();
    
  }, [])

  const addItem = async (item) => {
    const currId = items.length ? items[items.length - 1].id + 1: 1;
    const value = {
      id: currId,
      checked: false,
      text: item
    }

    const listItems = [...items,value]
    setItems(listItems)

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(value)
    }

    const result = await apiRequest(API_URL,postOptions);
    if(result) setFetchError(result)

  }

  const handleCheck = async (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);

    const filtered = updatedItems.filter((item) => item.id === id);

    const updateOptions = {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(filtered[0])
    }

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,updateOptions);
    if (result) setFetchError(result);
    
  };

  const handleDelete = async (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    const item = items.filter((item) => item.id === id);
    const deleteOptions = {
      method : 'DELETE',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(item[0])
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,deleteOptions);
    if (result) setFetchError(result);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }



  return (
    <div className="App">
      <Header />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoading && <p>Loading items..</p>}
        {fetchError && <p>{`Error : ${fetchError} `}</p>}
        { !isLoading && !fetchError && <Content
        items={items.filter
          ((item) => (item.text.toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>
      
      <Footer length={items.length} />
    </div>
  );
};

export default App;
