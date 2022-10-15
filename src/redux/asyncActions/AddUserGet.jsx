import axios from 'axios';
import { addUserAction } from '../reducers/users';

export const GetUsers = () => {
    return function (dispatch) {
        axios.get(`https://jibek123.pythonanywhere.com/news/`)
        .then(res => dispatch(addUserAction(res.data)))
    }
}
