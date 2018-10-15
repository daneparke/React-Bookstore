import React, { Component } from 'react';
import './App.css';
import Search from './component/Search'
import Books from './component/Books'
// import Cart from './component/Cart'


class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []

    }
  }

  async componentDidMount() {
    console.log('time to fetch!')
    // fetch('http://localhost:8082/api/books').then(function (thing) {
    //   return thing.json()
    // }).then(function (data) {
    //   console.log('data', data)
    // })
    let result = await fetch('http://localhost:8082/api/books')
    let data = await result.json();
    console.log('data', data)
    this.setState({
      books: data
    })
  }


  render() {
    return (
      <>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>REACT BOOKSTORE</h1>
        <Search />
        <Books books={this.state.books} />
        {/* <Cart /> */}

      </>


    );
  }
}

export default App;
