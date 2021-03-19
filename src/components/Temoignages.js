import React, { Component } from "react";
import axios from "axios";
import TemoignageItem from "./TemoignageItem";

export class Temoignages extends Component {
  state = {
    temoignages: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/temoignages")
      .then((res) =>
        this.setState({
          temoignages: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { temoignages, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {temoignages.map((t) => (
            <TemoignageItem key={t.id} temoignage={t} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Temoignages;
