/* eslint-disable */

export const createFarm = async (userId, name, coordinates, time) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `http://localhost:3000/api/v1/users/${userId}/my/farms`,
        data: {
          name,
          Location: {
            coordinates,
          },
          time,
        },
      });
  
      if (res.data.status === 'success') {
        showAlert('success', 'Farm created successfully! Show Result');
        window.setTimeout(() => {
          location.assign(`/dashboard/${userId}/my-farms`);
        }, 4000);
      }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
  };
  