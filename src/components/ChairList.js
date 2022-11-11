import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

export class ChairList extends Component {
  render() {
    const { chairList } = this.props;
    return (
      <div>
        {chairList.map((row) => {
          return (
            <div key={row.hang} className="d-flex">
              <h1 className="rowNumber">{row.hang}</h1>
              <div className="d-flex">
                {row.danhSachGhe.map((item) => {
                  return <Chair key={item.soGhe} chair={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.chair.chairs,
  };
};

export default connect(mapStateToProps)(ChairList);
