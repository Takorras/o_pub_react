import firebase from 'firebase';
import { firebaseConfig } from '../config';

const database = firebase.initializeApp(firebaseConfig).database();

export function fetchItems() {
  return dispatch => {
    database.ref('items').on(
      'value',
      (snapshot) => { dispatch(loadItemsSuccess(snapshot.val())) },
      (error) => { dispatch(loadItemsError(error)) }
    )
  };
}

export const loadItemsSuccess = items => {
  console.log('hoge');
  return {
    type: 'LOAD_ITEMS',
    data: items
  }
}

export const loadItemsError = error => {
  return {
    type: 'ERROR',
    error: error
  }
}

export const addItem = text => {
  database.ref('items').set({
    text: text,
    point: 0
  })
}

export const increasePoint = id => {
  return {
    type: 'INCREASE_POINT',
    id
  }
}
