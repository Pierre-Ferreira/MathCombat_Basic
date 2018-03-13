import React from 'react';
import PropTypes from 'prop-types';
/*import './RangePlusMinusComp.css'*/

const RangePlusMinusComp = (props) => {
  return (
    <section id="range-plus-minus-area">
      <label>Bo limiet</label>
      <select
        className="selectpicker"
        onChange={props.onChangeFunc}
        value={props.value}
      >
        <optgroup label="Dak limiet">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </optgroup>
      </select>
    </section>
  );
};

export default RangePlusMinusComp;
