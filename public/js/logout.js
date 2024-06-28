/* eslint-disable */

export const logout = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/users/logout',
      });
      if (res.data.status === 'success') {
        location.assign('/Home');
      }
      showAlert('success', 'You are logged out');
    } catch (err) {
      // console.log(err.response);
      showAlert('error', 'Error logging out! Try again.');
    }
  };