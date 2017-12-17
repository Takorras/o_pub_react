import firebase from 'firebase';
import { firebaseConfig } from '../config';

const database = firebase.initializeApp(firebaseConfig).database();

export const fetchItems = () => {
  return dispatch => {
    database.ref('items').on(
      'value',
      (snapshot) => { dispatch(loadItemsSuccess(snapshot.val())) },
      (error) => { dispatch(loadItemsError(error)) }
    )
  };
}

export const loadItemsSuccess = items => {
  return {
    type: 'LOAD_ITEMS',
    items: items
  }
}

export const loadItemsError = error => {
  return {
    type: 'ERROR',
    error: error
  }
}

export const addItem = (id, text) => {
  return dispatch => {
    database.ref('items').push({
      id: id,
      text: text,
      point: 0
    })
  }
}

export const increasePoint = id => {
  return {
    type: 'INCREASE_POINT',
    id
  }
}
