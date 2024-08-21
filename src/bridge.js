const axios = require('axios');

// Fetch data from JSON server
axios.get('http://localhost:3000/target_clicks', 'http://localhost:3000/total_budget')
  .then(response => {
    const budgetData = response.data;

    // Send data to Flask API
    axios.post('http://127.0.0.1:5000/calculate_allocation', budgetData)
      .then(response => {
        console.log('Data sent to Flask API successfully');
        console.log('Response from Flask API:', response.data);
      })
      .catch(error => {
        console.error('Error sending data to Flask API:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching data from JSON server:', error);
  });
