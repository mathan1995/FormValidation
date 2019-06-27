import React, { Component } from "react";

class EmptyValidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        { name: "price", value: 0, error: "" },
        { name: "downP", value: 0, error: "" },
        { name: "term", value: 0, error: "" },
        { name: "interest", value: 0, error: "" }
      ]
    };
  }

  handleInputChange = (idx, event) => {
    const target = event.target;
    const name = target.name;
    let error = "";

    if (isNaN(target.value)) {
      error = `${name} field can only be number`;
    }

    if (!target.value) {
      error = `${name} field cannot be empty`;
    }

    this.state.inputs[idx] = {
      ...this.state.inputs[idx],
      value: target.value,
      error
    };

    this.setState({
      inputs: [...this.state.inputs]
    });
  };

  render() {
    return (
      <form>
        {this.state.inputs.map((input, idx) => (
          <div>
            <label htmlFor="">{input.name}</label>
            <input
              type="text"
              value={input.value}
              onChange={e => this.handleInputChange(idx, e)}
            />
            {input.error && <span style={{ color: "red" }}>{input.error}</span>}
          </div>
        ))}
      </form>
    );
  }
}
export default EmptyValidate;
