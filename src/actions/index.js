import firebase from 'firebase';
import { firebaseConfig } from '../config';

const database = firebase.initializeApp(firebaseConfig).database();
let nextItemId = 0;

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
  nextItemId = (items) ? Object.keys(items).length : 0;
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
  return diapatch => {
    database.ref('items')
    .push({
      id: nextItemId,
      text: text,
      point: 0
    })
  }
}

export const increasePoint = (key, item) => {
  return dispatch => {
    database.ref('items')
    .child(key)
    .set({
      id: item.id,
      text: item.text,
      point: item.point + 1
    })
  }
}
