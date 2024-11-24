import DeleteRowBtn from "../DeleteRowBtn/DeleteRowBtn";
import DisableRowBtn from "../DisableRowBtn/DisableRowBtn";
import "./Row.css";

function Row({id, operation, value, isDisabled, removeRow, updateRow}) {

  /**
   * toggles the disabled state of the current row
   * * @returns {void}
   */
  const changeState = () => {
    updateRow(id, "isDisabled", !isDisabled); 
  };

 /**
   * updates the operation of the current row
   * @param {object} event - the event object from the select input
   * * @returns {void}
   */
  const getOperator = (event) => {
    updateRow(id, "operation", event.target.value);
  };

 /**
   * updates the value of the current row
   * @param {object} event - the event object from the input field
   * @returns {void}
   */
  const getValue = (event) => {
    updateRow(id, "value", event.target.value);
  };
  return (
    <>
      <li>
        <select name="add" id="add" disabled={isDisabled} value={operation} onChange={getOperator}>
          <option value="plus">+</option>
          <option value="minus">-</option>
        </select>

        <input type="number" disabled={isDisabled}  value={value} onChange={getValue}></input>
        <DeleteRowBtn disabled={isDisabled} removeRow={()=>removeRow(id)}></DeleteRowBtn>
        <DisableRowBtn changeState={changeState} disabled={isDisabled}></DisableRowBtn>
        
      </li>
    </>
  );
}

export default Row;
