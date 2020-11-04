import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import AnnounceHome from "./AnnounceHome";
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announces: {},
      isLoading: false,
    };
    this.loadAnnounces = this.loadAnnounces.bind(this);
    this.loadAnnounces(this.props.match.params.urlCategory);
    // const url = `https://market-49096.firebaseio.com/announces.json?orderBy=%22category%22&equalTo=%22${this.props.match.params.urlCategory}%22`;
  }
  loadAnnounces(urlCategory) {
    this.setState({ isLoading: true, announces: {} });
    const url = `https://market-49096.firebaseio.com/announces.json?orderBy=%22category%22&equalTo=%22${urlCategory}%22`;
    axios.get(url).then((data) => {
      this.setState({
        announces: data.data,
        isLoading: false,
      });
      this.category = urlCategory;
    });
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.urlCategory) {
      if (!this.category !== newProps.match.params.urlCategory) {
        this.loadAnnounces(newProps.match.params.urlCategory);
      }
    }
  }
  render() {
    return (
      <>
        <h1>Category: {JSON.stringify(this.props.match.params.urlCategory)}</h1>
        {this.state.isLoading && (
          <i class="fa fa-circle-o-notch fa-spin fa-3x  fa-fw"></i>
        )}
        {!this.state.isLoading &&
          Object.keys(this.state.announces).length === 0 && (
            <p>No product registered</p>
          )}
        <div className="row">
          {Object.keys(this.state.announces).map((key) => {
            const announce = this.state.announces[key];
            return <AnnounceHome id={key} key={key} announce={announce} />;
          })}
        </div>
      </>
    );
  }
}
export default Category;
