import { Component } from "react";
import done from "./done-icone.png";

export class Wedding extends Component {
  state = {
    userInput: "",
    checkList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please enter in item");
    } else {
      let listArray = this.state.checkList;
      listArray.push(input);
      this.setState({ checkList: listArray, userInput: "" });
    }
  }

  deleteItem() {
    let listArray = this.state.checkList;
    listArray = [];
    this.setState({ checkList: listArray });
  }

  crossWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="container">
          <input
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => {
              this.onChangeEvent(e.target.value);
            }}
            value={this.state.userInput}
          />
        </div>

        <div className="container">
          <div className="container2">
            <button
              onClick={() => this.addItem(this.state.userInput)}
              className="add btn"
            >
              Add
            </button>
          </div>

          <div className="container2">
            <button onClick={() => this.deleteItem()} className="delete btn">
              Delete
            </button>
          </div>
        </div>

        <ul>
          {this.state.checkList.map((item, index) => (
            <li onClick={this.crossWord} key={index}>
              <img src={done} width="20px" alt="done" />
              {item}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}
