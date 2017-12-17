import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { addItem } from '../actions';

let AddItem = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={ e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addItem(0, input.value));
          input.value = '';
        }}
      >
        <Input
          type='text'
          ref={ node => {
            input = node.inputRef;
          }}
        />
      </form>
    </div>
  )
}

export default connect()(AddItem);
