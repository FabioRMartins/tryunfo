import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <text data-testid="name-input"> </text>
        <textarea data-testid="description-input" />
        <number data-testid="attr1-input" />
        <number data-testid="attr2-input" />
        <number data-testid="attr3-input" />
        <text data-testid="image-input" />
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <checkbox data-testid="trunfo-input" />
        <button data-testid="save-button" type="button">Salvar</button>
      </div>
    );
  }
}

export default Form;
