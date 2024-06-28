/* eslint-disable */
export const deleteUser = async (userId) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `http://localhost:3000/api/v1/users/${userId}`, 
        });

        // console.log(res);
        if (res.status === 204) {
            showAlert('error', 'User Deleted');
            window.setTimeout(() => {
                location.assign('/dashboard/users');
            }, 1500);
        } else {
            showAlert('error', 'Failed to delete user');
        }
    } catch (err) {
        // console.log(err);
        showAlert('error', 'Error deleting user');
    }
};
