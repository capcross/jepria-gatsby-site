import React, { Component } from "react";
import { Toolbar, Form, Statusbar } from "./components/cap";
import { Workstate } from "./state/workstate";

const fetchTasks = async function () {
  try {
    const auth = await fetch(
      "http://jepria.org/feature-json-jepria-backend/LoginServlet?username=alapygin@yandex.ru&password=jepria2017",
      {
        method: 'GET',
        credentials: 'include'
      });
  
    console.log("fakeTaskItems: auth = " + JSON.stringify(auth))
  
    const response = await fetch(
      "http://jepria.org/feature-json-jepria-backend/v1/features",
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Request-Method': 'GET',
          'Access-Control-Request-Headers': 'Content-Type',
          'Content-Type': 'application/json'
        }
      });
  
    const items = await response.json();

    //console.log("App,fetchTasks: items = " + JSON.stringify(items))

    return items;
  } catch(error) {
    console.error(error);
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workstate: Workstate.VIEW_LIST,
      currentIndex: null,
      items: []
    };

    this.actions.list();
  }

  actions = {
    add: () => {
      console.log("App.add()");
      this.setState({
        workstate: Workstate.ADD,
        currentIndex: null,
      });
    },
    save: () => {
      console.log("App.save()");
      this.setState({ workstate: Workstate.VIEW_DETAILS });
    },
    edit: () => {
      console.log("App.edit()");
      this.setState({ workstate: Workstate.EDIT });
    },
    select: selectedIndex => {
      console.log("App.select()");
      this.setState({
        workstate: Workstate.SELECTED,
        currentIndex: selectedIndex,
      });
    },
    search: () => {
      console.log("App.search()");
      this.setState({ workstate: Workstate.SEARCH });
    },
    find: () => {
      console.log("App.find()");
      this.setState({ workstate: Workstate.VIEW_LIST });
    },
    view: selectedIndex => {
      console.log("App.view()");
      console.log("App.view(): selectedIndex = " + selectedIndex);
      this.setState({
        workstate: Workstate.VIEW_DETAILS,
        currentIndex: selectedIndex ? selectedIndex : this.state.currentIndex,
      });
    },
    list: async () => {
      this.setState({
        workstate: Workstate.VIEW_LIST,
        items: await fetchTasks()
      });
    },
    delete: () => {
      console.log("App.delete()");
    },
  };

  render() {
    console.log("App.render(): this.state.workstate = " + this.state.workstate);

    const workstate = this.state.workstate;
    const actions = this.actions;

    const style = {
      height: "100%",
    };

    return (
      <div style={style}>
        <Toolbar workstate={workstate} actions={actions} />

        <Form
          workstate={workstate}
          actions={actions}
          items={this.state.items}
          currentIndex={this.state.currentIndex}
        />

        <Statusbar workstate={workstate} />
      </div>
    );
  }
}

export default App;
