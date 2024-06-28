/* eslint-disable */

export const confirmEmail = async (email) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/users/confirmEmail',
        data: {
            email,
        },
      });
      if (res.data.status === 'success') {
        location.assign('/dashboard/me');
      }
      showAlert('success', 'Email Sent!');
    } catch (err) {
      // console.log(err.response);
      showAlert('error', 'Error Sending Email! Try again.');
    }
  };