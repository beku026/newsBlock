import axios from 'axios';
import { updateUserAction } from '../reducers/users';

export const GetUsers = (id, obj) => {
    return function (dispatch) {
        axios.post(`https://jibek123.pythonanywhere.com/news/${id}/update/`, obj)
        .then(res => dispatch(updateUserAction(res.data)))
    }
}
