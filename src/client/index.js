import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
state = {
  count: 5,
};

Multiply = () => {

  const currentnumber = this.state.count;

  this.setState({
  // eslint-disable-next-line no-magic-numbers
    count: currentnumber * 2,
  });

}
divide = () => {

  const currentnumber = this.state.count;

  this.setState({
  // eslint-disable-next-line no-magic-numbers
    count: currentnumber / 2,
  });

}

render() {
  return <div>
    <h1>{this.state.count}</h1>
    <button onClick={this.Multiply}>+</button>
    <button onClick={this.divide}>-</button>
  </div>
}
}

render(<App />, document.getElementById('root'));