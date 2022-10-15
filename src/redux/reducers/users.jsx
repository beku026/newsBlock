const initialState = {
    users: [],
    isOpenModal: false,
    updateObj: {}
}

const addUser = 'addUser';
const addedUser = 'addedUser';
const openModal = "openModal"
const closeModal = "closeModal"
const deleteUser = "delete"
const update = 'update;'

export const userReducer = (state = initialState, action ) => {
    switch(action.type) {
        case addUser:
            return {...state, users: [...action.payload]}
        case addedUser:
            return {...state, users: [...state.users, action.payload]}
        case openModal:
            return { ...state, isOpenModal: action.payload }
        case closeModal:
            return { ...state, isOpenModal: action.payload }
        case deleteUser: 
            return { ...state, users: state.users.filter(item => item.id !== action.payload) }  
        case update: 
            return {...state, users: state.users.map(item => item.id === action.payload.id ? action.payload : item),}
        default: 
            return state;
    }
}

export const addUserAction = (payload) => ({type: addUser, payload: payload})
export const addedUserAction = (payload) => ({type: addedUser, payload: payload})
export const openModalAction = () => ({type: openModal, payload: true})
export const closeModalAction = () => ({type: closeModal, payload: false})
export const deleteUserAction = (payload) => ({type: deleteUser, payload: payload})
export const updateUserAction = (payload) => ({type: update, payload: payload})