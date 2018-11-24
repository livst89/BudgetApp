import React, { Component } from 'react';
import './list.css';
import {getSum} from '../Controller/Calculator.js'


class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }



  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}, () => console.log('Posts fetched...', posts)));
  }

  render() {
    let incomes = this.state.posts.filter(posts => posts.type === 'income');
    let expenses = this.state.posts.filter(posts => posts.type === 'expense');

    return (
      <div>
        <h2>Poster</h2>
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Beløb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indkomster</td>
            </tr>
            {incomes.map(incomes =>
              <tr>
                <td>{incomes.title}</td>
                <td>{incomes.amount}</td>
              </tr>
            )}
            <tr>
              <td>Total:</td>
              <td>{getSum(incomes)}</td>
            </tr>
            <tr>
              <td>Udgifter</td>
            </tr>
            {expenses.map(expenses =>
              <tr>
                <td>{expenses.title}</td>
                <td>{expenses.amount}</td>
              </tr>
            )}
            <tr>
              <td>Total:</td>
              <td>{getSum(expenses)}</td>
            </tr>
            <tr>
              <td>Rest:</td>
              <td>{getSum(incomes) - getSum(expenses)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
