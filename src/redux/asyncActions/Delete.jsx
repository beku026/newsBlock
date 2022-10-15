import axios from 'axios';
import { deleteUserAction } from '../reducers/users';

export const DeleteUsers = (id) => {
    return function (dispatch) {
        axios.delete(`https://jibek123.pythonanywhere.com/news/${id}/delete/`)
        .then(res => dispatch(deleteUserAction(id)))
    }
}
