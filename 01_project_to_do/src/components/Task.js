import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <p>{this.props.task}</p>
        <div className="actions">
          {this.props.columnKey !== "todo" && (
            <button onClick={() => this.props.moveTask(this.props.task, this.props.columnKey, "todo")}>
              To Do
            </button>
          )}
          {this.props.columnKey !== "inProgress" && (
            <button onClick={() => this.props.moveTask(this.props.task, this.props.columnKey, "inProgress")}>
              In Progress
            </button>
          )}
          {this.props.columnKey !== "completed" && (
            <button onClick={() => this.props.moveTask(this.props.task, this.props.columnKey, "completed")}>
              Completed
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Task;