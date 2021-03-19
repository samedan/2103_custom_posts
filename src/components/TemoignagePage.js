// rce
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class TemoignagePage extends Component {
  state = {
    temoignage: {},
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get(`/wp-json/wp/v2/temoignages/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          temoignage: res.data,
          isLoaded: true,
        });
        console.log(res.data.acf.testimony);
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { temoignage, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <Link to="/">Go back</Link>
          <hr />
          <h1>{temoignage.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: temoignage.content.rendered,
            }}
          ></div>
          <h4>
            testimony:{" "}
            {temoignage.acf.testimony
              ? temoignage.acf.testimony
              : "nothing here"}
          </h4>
        </>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default TemoignagePage;
