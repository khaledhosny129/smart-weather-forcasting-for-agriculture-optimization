/* eslint-disable */
export const deleteFarm = async (farmID) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `http://localhost:3000/api/v1/farms/${farmID}`, 
        });

        // console.log(res);
        if (res.status === 204) {
            showAlert('error', 'Farm Deleted');
            window.setTimeout(() => {
                location.reload();
            }, 1500);
        } else {
            showAlert('error', 'Failed to delete farm');
        }
    } catch (err) {
        // console.log(err);
        showAlert('error', 'Error deleting farm');
    }
};
