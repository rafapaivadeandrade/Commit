import React from "react";
import axios from "axios";
import base, { storage } from "./base";
import { Redirect } from "react-router-dom";
import HeaderInternal from "./HeaderInternal";
class NewAnnounce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const file = this.photo.files[0];
    const { name, size } = file;
    const ref = storage.ref(name);
    ref.put(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        const newAnnounce = {
          name: this.name.value,
          description: this.description.value,
          price: this.price.value,
          seller: this.seller.value,
          photo: url,
          telephone: this.telephone.value,
          category: this.categories.value,
        };
        base
          .push("announces", {
            data: newAnnounce,
          })
          .then(() => {
            this.setState({ success: true });
          });
      });
    });
    return false;
  }
  render() {
    return (
      <div>
        {this.state.success && <Redirect to="/" />}
        <div className="container" style={{ paddingTop: "120px" }}>
          <HeaderInternal />
          <h1>New Announce</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Photo</label>
              <input
                type="file"
                className="form-control"
                id="photo"
                placeholder="Photo"
                ref={(ref) => (this.photo = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                ref={(ref) => (this.name = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Categories</label>
              <select ref={(ref) => (this.categories = ref)}>
                {this.props.categories.map((category) => (
                  <option key value={category.url}>
                    {" "}
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Description"
                ref={(ref) => (this.description = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                ref={(ref) => (this.price = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                placeholder="Telephone"
                ref={(ref) => (this.telephone = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="seller">Seller</label>
              <input
                type="text"
                className="form-control"
                id="seller"
                placeholder="Seller"
                ref={(ref) => (this.seller = ref)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default NewAnnounce;
