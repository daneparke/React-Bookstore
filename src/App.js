import React, { Component } from 'react';
import './App.css';
import Search from './component/Search'
import Books from './component/Books'
import Cart from './component/Cart'


class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      search: '',
      cart: [],
      filtered: [],
      total: 0
    }
  }

  async componentDidMount() {
    console.log('time to fetch!')
    let result = await fetch('http://localhost:8082/api/books')
    let data = await result.json();
    console.log('data', data)
    this.setState({
      books: data,
      filtered: data
    })
  }

  searcher = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  filter = (event) => {
    event.preventDefault()
    const value = event.target.value
    const books = this.state.books
    const filteredBooks = this.findMatch(value, books)
    this.setState({
      filtered: filteredBooks
    })
  }

  findMatch(search, books) {
    return books.filter(item => {
      const regex = new RegExp(search, 'gi')
      return item.title.match(regex) || item.author.match(regex)
    })
  }

  addButton = (event) => {
    this.setState({
      cart: [...this.state.cart, event.target.value]
    })
    this.setState({
      total: this.state.total + parseInt(event.target.value.split(',split,')[1])
    })
  }

  render() {
    return (
      <>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>REACT BOOKSTORE</h1>
        <Search filter={this.filter} filtered={this.state.filtered} />
        <div className='row'>
          <Books books={this.state.books} addButton={this.addButton} filtered={this.state.filtered} />
          <Cart cart={this.state.cart} books={this.state.books} total={this.state.total} />
        </div>
      </>
    );
  }
}

export default App;
