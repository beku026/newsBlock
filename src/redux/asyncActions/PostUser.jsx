import axios from 'axios';
import { addedUserAction } from '../reducers/users';

export const PostUsers = (obj) => {
    return function (dispatch) {
        axios.post(`https://jibek123.pythonanywhere.com/news/add/`, obj)
        .then(res => dispatch(addedUserAction(res.data)))
    }
}
