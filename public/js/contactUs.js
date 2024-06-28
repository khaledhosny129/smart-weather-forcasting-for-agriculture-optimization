/* eslint-disable */

export const Contact = async (name, email, subject, message) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/users/contact',
        data: {
          name,
          email,
          subject,
          message,
        },
      });
  
      if (res.data.status === 'success') {
        showAlert('success', 'sent successfully!');
        window.setTimeout(() => {
          location.assign('/home');
        }, 1500);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };