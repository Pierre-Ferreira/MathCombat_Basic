import React from 'react';
import PropTypes from 'prop-types';
import './TableMultiDivComp.css'

const TableMultiDivComp = (props) => {
  return (
    <section id="table-multi-div-area">
      <label>Tafel</label>
      <select
        className="selectpicker"
        onChange={props.onChangeFunc}
        value={props.value}
      >
        <optgroup label="Tafel">
          <option>12</option>
          <option>11</option>
          <option>10</option>
          <option>9</option>
          <option>8</option>
          <option>7</option>
          <option>6</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
          <option>0</option>
        </optgroup>
      </select>
    </section>
  );
};

export default TableMultiDivComp;
