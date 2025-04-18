import React, { Component } from "react";
import Taskcolumn from "./Taskcolumn";

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inProgress: [],
      completed: [],
      taskText: "",
      selectedColumn: "todo",
    };
  }

  handleInputChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  handleSelectChange = (event) => {
    this.setState({ selectedColumn: event.target.value });
  };

  addTask = () => {
    if (this.state.taskText.trim()) {
      this.setState((prevState) => {
        return {
          [prevState.selectedColumn]: [
            ...prevState[prevState.selectedColumn],
            prevState.taskText,
          ],
          taskText: "",
        };
      });
    }
  };

  moveTask = (task, fromColumn, toColumn) => {
    this.setState((prevState) => {
      return {
        [fromColumn]: prevState[fromColumn].filter((t) => t !== task),
        [toColumn]: [...prevState[toColumn], task],
      };
    });
  };

  render() {
    return (
      <div className="task-board">

        <div className="task-input">
          <input className="task-element" type="text" value={this.state.taskText} onChange={this.handleInputChange} placeholder="Enter task" />
          <select className="task-element" onChange={this.handleSelectChange}>
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className="task-element" onClick={this.addTask}>Add Task</button>
        </div>

        <div className="columns">
          <Taskcolumn title="To Do" tasks={this.state.todo} columnKey="todo" moveTask={this.moveTask} />
          <Taskcolumn title="In Progress" tasks={this.state.inProgress} columnKey="inProgress" moveTask={this.moveTask} />
          <Taskcolumn title="Completed" tasks={this.state.completed} columnKey="completed" moveTask={this.moveTask} />
        </div>
        
      </div>
    );
  }
}

export default TaskBoard;
