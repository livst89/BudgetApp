const express = require('express');

const app = express();

app.get('/api/posts', (req, res) => {
  const posts = [
    {id: 1, type: 'expense', title: 'Mad', amount: 5000, freq: 'monthly', startDate: '01-01-2018', endDate: ''},
    {id: 2, type: 'income', title: 'Løn Liv', amount: 20000, freq: 'monthly', startDate: '01-01-2018', endDate: '30-11-2018'},
    {id: 3, type: 'expense', title: 'Transport', amount: 500, freq:'monthly', startDate: '01-01-2018', endDate: ''},
    {id: 4, type: 'income', title: 'SU Steen', amount: 5000, freq: 'monthly', startDate: '01-01-2018', endDate: ''},
    {id: 5, type: 'expense', title: 'Headspace', amount: 600, freq: 'annual', startDate: '24-11-2018', endDate: '24-11-2019'}
  ];

  res.json(posts);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
