import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { setSelectedChair } from "../actions/chair";

class Chair extends Component {
  render() {
    const { chair, chairSelectedList, handleSelectedChair } = this.props;

    return (
      <button
        className={clsx(
          "ghe btn text-white d-flex justify-content-center align-items-center",
          {
            gheDuocChon: chair.daDat,
            gheDangChon: chairSelectedList.find(
              (item) => item.soGhe === chair.soGhe
            ),
          }
        )}
        disabled={chair.daDat}
        onClick={() => {
          handleSelectedChair(chair);
        }}
      >
        <span>{chair.soGhe.slice(1)}</span>
      </button>
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
    handleSelectedChair: (item) => {
      dispatch(setSelectedChair(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
