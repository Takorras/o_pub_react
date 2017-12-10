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
          dispatch(addItem(input));
          input = ''
        }}
      >
        <Input
          onChange={(_, textInput ) => {
            input = textInput.value
          }}
        />
      </form>
    </div>
  )
}

AddItem = connect()(AddItem);

export default AddItem;
