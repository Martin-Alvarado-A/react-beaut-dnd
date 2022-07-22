import * as React from "react";
import { ColumnInterface, TaskInterface } from "../interfaces/app.interface";

interface Props {
  column: ColumnInterface;
  tasks: any;
}

interface State {
  column: ColumnInterface,
  tasks: Array<TaskInterface>,
}

export default class Column extends React.Component<Props, State>{
  
  render() {
    console.log(this.props.tasks);
    return (
      <div className="app__column" >
        <h3 className="app__column__title" >{this.props.column.title}</h3>
        <div className="app__column__tasks" ></div>
      </div>
    );
  }
}