import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUsers } from '../../../redux/asyncActions/Delete';
import ModalUpdate from '../../modalUpdate/ModalUpdate';
import s from './CardItem.module.scss';
import img from '../../../assets/img/Group.png';

const CardItem = ({item}) => {
    const dispatch = useDispatch();
    const [ modalUpdate, setModalUpdate] = useState(false)

    return (
        <>
            <div className={s.item}>
                <div className={s.card__heading}>
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                </div>
                <p>{item.description}</p>
                <img src={img} alt="header" />
                <div className={s.item__btns}>
                    <button onClick={e => {e.preventDefault(); setModalUpdate(true)}} >Изменить</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch(DeleteUsers(item.id))
                    }}>Удалить</button>
                </div>
            </div>
            {modalUpdate && <ModalUpdate key={item.id} open={setModalUpdate} id={item.id} name={item.title} description={item.description} published={item.published} date={item.date}/>}
        </>
    );
};

export default CardItem;