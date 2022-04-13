import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        Nome:
        <input
          data-testid="name-input"
          type="text"
          label="Form"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <br />
        Descrição:
        <textarea
          data-testid="description-input"
          label="description"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <br />
        Primeiro atributo:
        <input
          data-testid="attr1-input"
          label="attr1"
          type="number"
          min="0"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <br />
        Segundo atributo:
        <input
          data-testid="attr2-input"
          label="attr2"
          type="number"
          min="0"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <br />
        Terceiro atributo:
        <input
          data-testid="attr3-input"
          label="attr3"
          type="number"
          min="0"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <br />
        Imagem:
        <input
          data-testid="image-input"
          label="image"
          name="cardImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <br />
        Tipo:
        <select
          data-testid="rare-input"
          label="rare"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <br />
        Trunfo:
        <div>
          { hasTrunfo ? <h3>Você já tem um Super Trunfo em seu baralho</h3> : (
            <input
              data-testid="trunfo-input"
              label="trunfo"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )}
        </div>
        <br />
        <button
          data-testid="save-button"
          name="saveButton"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
