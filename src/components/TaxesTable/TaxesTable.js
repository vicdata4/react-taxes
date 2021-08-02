import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function TaxesTable(props) {
  return (
    <div>
      {
        props.list.length > 0 ?
          (<ul className="collection">
            {
              props.list.map(item => {
                return (
                  <div key={item.id}>
                    <li>{item.name}</li>
                    <Link to={`/taxes/${item.id}/form`}>Add submission</Link>
                  </div>
                )
              })
            }
          </ul>) :
          (<p className="center-align">You don't have taxes</p>)
      }
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    list: state.taxes.list
  }
}

export default connect(mapStateToProps)(TaxesTable);
