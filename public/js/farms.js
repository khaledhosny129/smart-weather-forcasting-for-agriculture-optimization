/* eslint-disable */
const axios = require('axios');

exports.getfarms = async (pageNumber, token) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:3000/api/v1/farms?page=${pageNumber}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true // Ensure cookies are sent with the request
    });

    if (!res.data || !res.data.data || !res.data.data.doc) {
      throw new Error('Invalid response structure from farms API');
    }

    const farms = res.data.data.doc;
    const totalCount = res.data.totalCount;
    const resultsPerPage = 5;
    const totalPages = Math.ceil(totalCount / resultsPerPage);

    return { farms, totalPages };
  } catch (err) {
    // console.error('Error fetching farms:', err);
    // throw new Error('Failed to fetch farms');
    showAlert('error', err.response.data.message);
  }
};
