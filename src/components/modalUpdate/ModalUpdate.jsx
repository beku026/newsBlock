import React from 'react';
import s from './ModalUpdate.module.scss'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { GetUsers } from '../../redux/asyncActions/UpdateUser';

const ModalUpdate = ({name, description, published, date,  id, open }) => {
  const dispatch = useDispatch()
  const [addedValue, setAddedValue] = useState({
    title: name, 
    description: description,
    published: published,
  })

  return (
    <div className={s.modal__background} onClick={e => open(false) }>
      <form className={s.form} onClick={e => { e.stopPropagation(); }}> 
          <div className={s.close} onClick={e => open(false) }>
            <span></span>
            <span></span>
          </div>
          <h3>Update Messege</h3>
          <input type="text" placeholder='Name' value={addedValue.title} onChange={e=> setAddedValue({...addedValue, title: e.target.value})}/>
          <div className={s.date__checkbox}>
            {/* <input type="date"value={addedValue.date} onChange={e=> setAddedValue({...addedValue, date: e.target.value})}/> */}
            <input type="checkbox" checked={addedValue.published} onChange={e => setAddedValue({...addedValue, published: e.target.checked})}/>
          </div>
          <textarea placeholder='Description' value={addedValue.description} onChange={e=> setAddedValue({...addedValue, description: e.target.value})}></textarea>
          <button onClick={e => { 
            e.preventDefault();
            dispatch(GetUsers(id, addedValue))
            open(false)
          }} >Submite</button>
      </form>
    </div>
  );
};

export default ModalUpdate;