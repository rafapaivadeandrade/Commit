import React from "react";
import AnnounceHome from "./AnnounceHome";
import HeaderHome from "./HeaderHome";
import LinkCategory from "./LinkCategory";
import axios from "axios";

class Home extends React.Component {
  state = {
    // categories: [],
    announces: {},
  };
  componentDidMount() {
    // axios
    //   .get("https://market-49096.firebaseio.com/category.json")
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ categories: res.data });
    //   });
    // "https://market-49096.firebaseio.com/announces.json?orderBy=category;limitToLast=2"
    const url =
      "https://market-49096.firebaseio.com/announces.json?orderBy=%22category%22";
    axios.get(url).then((res) => {
      // console.log(res.data);
      this.setState({ announces: res.data });
    });
  }
  render() {
    let index = 0;
    return (
      <div>
        <HeaderHome />

        <div className="container">
          <h3>Last announces</h3>
          <div className="row">
            {Object.keys(this.state.announces).map((key) => {
              const announce = this.state.announces[key];
              return <AnnounceHome id={key} key={key} announce={announce} />;
            })}
          </div>
          <h3>Category</h3>
          <div className="row">
            {this.props.categories.map((category, key) => {
              return [
                <LinkCategory category={category} key={key} />,
                ++index % 4 === 0 && (
                  <div key={"c" + key} className="w-100"></div>
                ),
              ];
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
