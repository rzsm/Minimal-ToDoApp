import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

  onChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  taskAdder() {
      this.props.taskAdder(this.state.inputValue);
      this.setState({
          inputValue: ''
      })
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeHandler.bind(this)}
        />
        <button onClick={this.taskAdder.bind(this)}>Add Task</button>
      </div>
    );
  }
}
