import React from 'react';
import { useEffect } from 'react';
import { GetUsers } from '../../redux/asyncActions/AddUserGet';
import {useDispatch, useSelector} from 'react-redux';
import s from './Cards.module.scss';
import CardItem from './cardItem/CardItem';
import ModalWindow from '../modal/ModalWindow';
import { openModalAction } from '../../redux/reducers/users';

const Cards = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.users);
    const openModal = useSelector(state => state.userReducer.isOpenModal);

    useEffect( () => {
        dispatch(GetUsers())
    }, [])

    return (
        <div>
            <h2>Список постов</h2> 
            <button onClick={() => {dispatch(openModalAction())}}>Добавить пост</button>
            {openModal && <ModalWindow/>}
            <div className={s.cards}>
                {
                    user.map(item => {
                        return (<CardItem item={item} key={item.id}/>)
                    })
                }
            </div>
        </div>
    );
};

export default Cards;