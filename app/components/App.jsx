import React from 'react';
import AddItem from './AddItem'
import TodoItem from './TodoItem'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [ {id: 1,
                            message: "Hello",
                            checked: false},
                           {id: 2,
                            message: "World",
                           checked: false} ] };
  }

  renderItem(item) {
    return (
      <TodoItem checkItem={this.checkItem.bind(this)} item={item} key={item.id} />
    );
  }

  checkItem(id) {
    this.setState({items: this.state.items.map((i) => {
      if (i.id === id){
        i.checked = !i.checked;
      }
      return i;
    })});
  }

  addNewItem(item) {
    const newItem = {id: this.state.items.length + 1,
                     message: item,
                     checked: false};
    this.setState({items: this.state.items.concat(newItem)});
  }

  render() {
    return (
      <div id="content">
        <h1>Todo List</h1>
        { this.state.items.map(this.renderItem.bind(this)) }
        <AddItem addItem={this.addNewItem.bind(this)} />
      </div>
    );
  }
}
