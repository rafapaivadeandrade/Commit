import React from "react";
import HeaderInternal from "./HeaderInternal";
import Category from "./Category";
import Announce from "./Announce";
import { Link, Route } from "react-router-dom";

class Categories extends React.Component {
  render() {
    return (
      <>
        <HeaderInternal />
        <div className="container" style={{ paddingTop: "120px" }}>
          <h1>Categories:</h1>
          <div className="row">
            <div className="col-lg-4">
              <ul>
                {this.props.categories.map((category) => {
                  return (
                    <li key={category.url}>
                      <Link to={`/categories/${category.url}`}>
                        {category.category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-8">
              <Route
                path="/categories/:urlCategory"
                exact
                component={Category}
              />
              <Route
                path="/categories/:urlCategory/:idAnnounce"
                render={(props) => <Announce {...props} />}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Categories;
