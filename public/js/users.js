/* eslint-disable */
const axios = require('axios');

exports.getUsers = async (pageNumber) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:3000/api/v1/users?page=${pageNumber}`,
    });
    const resultsPerPage = 5;
    const totalCount = res.data.totalCount;
    const users = res.data.data.doc;
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / resultsPerPage);

    // Return both user data and total pages
    return { users, totalPages };
    // Handle pagination logic here (if needed)
  } catch (err) {
    // console.log(err);
    // You can handle the error (e.g., show an error message to the user)
  }
};
