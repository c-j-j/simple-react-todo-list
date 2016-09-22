import React from 'react';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itemDescription: ''}

    this.updateDescription = this.updateDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.itemDescription.length > 0) {
      this.props.addItem(this.state.itemDescription);
      this.setState({itemDescription: ''})
    }
  };

  updateDescription(e) {
    this.setState({ itemDescription: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.itemDescription} placeholder="Add an item" onChange={ this.updateDescription }/>
        <button>Add item</button>
      </form>
    );
  }
}
