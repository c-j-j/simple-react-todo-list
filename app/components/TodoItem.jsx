import React from 'react';

export default class TodoItem extends React.Component {
  checkItem() {
    this.props.checkItem(this.props.item.id);
  }

  render() {
    let className = this.props.item.checked? "done" : "";
    return (
      <div>
        <li onClick={this.checkItem.bind(this)} className={className}>{ this.props.item.message }</li>
      </div>
    )
  }
}
