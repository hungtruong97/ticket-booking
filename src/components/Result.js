import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteChair } from "../actions/chair";

export class Result extends Component {
  render() {
    const { chairSelectedList, deleteChair } = this.props;
    return (
      <div>
        <h3 className="text-white mb-3">Your selected chair lists</h3>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex gap-3">
            <div className="ghe disabled ms-0"></div>
            <span className="text-white">Booked Seats</span>
          </div>
          <div className="d-flex gap-3">
            <div className="gheDangChon"></div>
            <span className="text-white">Selected Seats</span>
          </div>
          <div className="d-flex gap-3">
            <div className="ghe ms-0"></div>
            <span className="text-white">Available Seats</span>
          </div>
          <table className="table text-white table-bordered fw-bold">
            <thead>
              <tr>
                <th>Chair Number</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {chairSelectedList.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteChair(item)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
              {chairSelectedList.length ? (
                <tr>
                  <td>Total</td>
                  <td>
                    {chairSelectedList
                      .reduce((total, item) => {
                        return (total += item.gia);
                      }, 0)
                      .toLocaleString()}
                  </td>
                  <td></td>
                </tr>
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteChair: (chair) => dispatch(deleteChair(chair)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
