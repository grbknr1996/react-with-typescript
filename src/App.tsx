import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import UserSearch2 from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";
import { Provider } from "react-redux";
import { store } from "./redux";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <div className="App">
      <h1>
        <Parent />
      </h1>
      <GuestList />
      <br />
      <UserSearch />
      <br />
      <br />
      <UserSearch2 />
      <br />

      <EventComponent />
      <div>
        <Provider store={store}>
          <div>
            <h1>Search for a Package</h1>
            <RepositoriesList />
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
