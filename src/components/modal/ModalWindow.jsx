import React from 'react';
import s from './ModalWindow.module.scss';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { PostUsers } from '../../redux/asyncActions/PostUser';
import { closeModalAction } from '../../redux/reducers/users';


const ModalWindow = () => {
    const dispatch = useDispatch()
    const [addedValue, setAddedValue] = useState({
        title: '', 
        description: '',
        published: false,
    })

    const handleChage = (e) => {
        e.preventDefault();
        dispatch(
            PostUsers(addedValue)
        )
        dispatch(closeModalAction())
    }

    return (
        <div className={s.modal__background} onClick={() => dispatch(closeModalAction())}>
            <form className={s.form} onClick={e => { e.stopPropagation(); }}> 
                <div className={s.close} onClick={() => dispatch(closeModalAction())}>
                    <span></span>
                    <span></span>
                </div>
                <h3>Send Messege</h3>

                <input type="text" placeholder='Name' value={addedValue.title} onChange={e=> setAddedValue({...addedValue, title: e.target.value})}/>
                <div className={s.date__checkbox}>
                    {/* <input type="date"value={addedValue.date} onChange={e=> setAddedValue({...addedValue, date: e.target.value})}/> */}
                    <input type="checkbox" value={addedValue.published} onChange={e => setAddedValue({...addedValue, published: e.target.checked})}/>
                </div>
                <textarea placeholder='Description' value={addedValue.description} onChange={e=> setAddedValue({...addedValue, description: e.target.value})}></textarea>

                <button onClick={handleChage}>Submite</button>
            </form>
        </div>
    );
};

export default ModalWindow;