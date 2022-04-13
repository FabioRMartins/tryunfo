import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange = ({ target }) => {
    const { value, name, type, checked } = target;
    this.setState({ [name]: type === 'checkbox' ? checked : value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const attrMaximo = 90;
      const attrSoma = 210;
      const attrMinimo = 0;
      const soma = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10);
      if (cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== ''
      && (parseInt(cardAttr1, 10) <= attrMaximo && parseInt(cardAttr1, 10) >= attrMinimo)
      && (parseInt(cardAttr2, 10) <= attrMaximo && parseInt(cardAttr2, 10) >= attrMinimo)
      && (parseInt(cardAttr3, 10) <= attrMaximo && parseInt(cardAttr3, 10) >= attrMinimo)
      && soma <= attrSoma) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick() {

  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled } = this.state;

    console.log(cardName);

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h2>Pré-vizualização</h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
