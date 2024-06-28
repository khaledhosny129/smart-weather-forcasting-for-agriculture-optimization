/* eslint-disable */

export const emailConfirm = async (token) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:3000/api/v1/users/verify/${token}`,
      });
  
      if (res.data.status === 'success') {
        showAlert('success', 'Email Confirmed');
        window.setTimeout(() => {
          location.assign('/Home');
        }, 1500);
      }
       
      
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };