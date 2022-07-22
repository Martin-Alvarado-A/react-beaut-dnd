import * as React from "react"
import './App.css';
import initialData from "./data/initial-data";
import Column from "./components/column";
import { ColumnInterface } from "./interfaces/app.interface";

class App extends React.Component {
  state = {...initialData};

  render(){

    let column: ColumnInterface;
    let tasks;

    this.state.columnOrder.forEach((columnId) => {
      column = this.state.columns[columnId];
      tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
    });

    return (
      <div className="app">
        <Column key={column.id} column={column} tasks={tasks} />
      </div>
    );
  }
}

export default App;