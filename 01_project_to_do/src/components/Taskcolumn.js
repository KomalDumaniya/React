import React from "react";
import Task from "./Task";

class Taskcolumn extends React.Component {
  render() {
    return (
      <div className="column">
        <h2>
          {this.props.title} ({this.props.tasks.length})
        </h2>
        {this.props.tasks.map((task, index) => (
          <Task key={index} task={task} columnKey={this.props.columnKey} moveTask={this.props.moveTask}/>
        ))}
      </div>
    );
  }
}

export default Taskcolumn;
