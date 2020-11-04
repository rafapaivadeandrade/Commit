import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import NewAnnounce from "./NewAnnounce";
import Categories from "./Categories";
import axios from "axios";
import base from "./base";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    categories: [],
    announces: [],
  };
  componentDidMount() {
    axios
      .get("https://market-49096.firebaseio.com/category.json")
      .then((res) => {
        this.setState({ categories: res.data });
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            render={() => <Home categories={this.state.categories} />}
          />
          <Route
            path="/novo-anuncio"
            exact
            render={() => <NewAnnounce categories={this.state.categories} />}
          />
          <Route
            path="/categories"
            render={() => <Categories categories={this.state.categories} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
