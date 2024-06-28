/* eslint-disable */
const axios = require('axios');

exports.getMyFarms = async (pageNumber, userId, token) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/users/${userId}/my/farms?page=${pageNumber}`,
        // http://localhost:3000/api/v1/users/5c8a1f292f8fb814b56fa184/my/farms?page=1
      headers: {
            Authorization: `Bearer ${token}`
        },
       withCredentials: true // Ensure cookies are sent with the request
    });
    const resultsPerPage = 3;
    const totalCount = res.data.totalCount;
    const farms = res.data.data.doc;
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / resultsPerPage);

    // Return both farms data and total pages
    return { farms, totalPages };
  } catch (err) {
    // console.error(err);
    // throw err; console.error(err);
    // throw err; 
    showAlert('error', err.response.data.message);
  }
};
