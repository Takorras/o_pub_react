import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { addItem } from '../actions';

let AddItem = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addItem(input.value));
          input.value = '';
        }}>
        <Input
          ref={node => {
            input = node;
          }}
        />
      </form>
    </div>
  )
}

AddItem = connect()(AddItem);

export default AddItem;
