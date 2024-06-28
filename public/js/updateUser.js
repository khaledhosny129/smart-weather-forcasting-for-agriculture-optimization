/* eslint-disable */
export const updateUser = async (userId, name, email, emailConfirm, role) => {
    try{
        const res = await axios({
            method: 'PATCH',
            url: `http://localhost:3000/api/v1/users/${userId}`,
            data: {
              name,
              email,
              confirmEmail: emailConfirm === 'Yes', // Convert string to boolean
              role,
            }, 
          });
      
          if (res.data.status === 'success') {
            showAlert('success', 'DATA updated successfully');
            window.setTimeout(() => {
              location.assign('/dashboard/users');
            }, 1500);
          }
    } catch (err) {
        showAlert('error', err.response.data.message);
      }

};