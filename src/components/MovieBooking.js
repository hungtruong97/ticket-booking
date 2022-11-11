import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from "./Result";
import "./MovieBooking.css";

class MovieBooking extends Component {
  render() {
    return (
      <div
        className="container background p-5"
        style={{ backgroundImage: "url(/img/bgmovie.jpg" }}
      >
        <h2 className="text-center fw-bold mt-3 text-white">
          Book Movie Ticket
        </h2>
        <div className="row">
          <div className="col-8">
            <div className="bg-black text-white my-5 text-center fs-4 screen">
              Screen
            </div>
            <ChairList />
          </div>
          <div className="col-4">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBooking;
