import React from "react";
import axios from "axios";

class Announce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announce: {},
      isLoading: true,
    };
    const id = this.props.match.params.idAnnounce;
    const url = `https://market-49096.firebaseio.com/announces/${id}.json`;
    axios.get(url).then((response) => {
      this.setState({ announce: response.data, isLoading: false });
    });
  }
  render() {
    const announce = this.state.announce;
    if (this.state.isLoading) {
      return <i class="fa fa-circle-o-notch fa-spin fa-3x  fa-fw"></i>;
    }
    return (
      <>
        <h1>{announce.name}</h1>
        <p>
          <img src={announce.photo} alt="photo" />
        </p>
      </>
    );
  }
}
export default Announce;
