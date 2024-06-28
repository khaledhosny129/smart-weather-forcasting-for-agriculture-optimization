/* eslint-disable */

export const forgotPassword = async (email) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/forgotPassword',
      data: {
        email,
      },
    });

    if (res.data.status === 'success') showAlert('success', 'Check Your Email!');
     
    
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
}; 

export const resetPassword = async (token, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://localhost:3000/api/v1/users/resetPassword/${token}`,
      data: {
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'password changed successfully, wait for loggong in!');
      window.setTimeout(() => {
        location.assign('/Home');
      }, 1500);
    }
     
    
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
}; 