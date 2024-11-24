import { useState } from "react";
import "./App.css";
import AddRowBtn from "./components/AddRowBtn/AddRowBtn";
import Row from "./components/Row/Row";

function App() {
  //initial state of the rows
  const [rows, setRows] = useState([
    { id: 1, operation: "plus", value: "", isDisabled: false },
    { id: 2, operation: "plus", value: "", isDisabled: false },
    { id: 3, operation: "plus", value: "", isDisabled: false },
  ]);

  /**
   * adds a new row to the list of rows
   *
   * @returns {void}
   */
  const addRow = () => {
    let setId = rows.length + 1;
    let existingIds = rows.map((row) => row.id);

    //increments the value of id while the generated id exist
    while (existingIds.includes(setId)) {
      setId++;
    }

    //set the new row
    setRows([
      ...rows,
      { id: setId, operation: "plus", value: "", isDisabled: false },
    ]);
  };

  /**
   * removes a row based on its id
   *
   * @param {number} id - the id of the row
   * @returns {void}
   */
  const removeRow = (id) => {
    let updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  /**
   * updates a value of a specific field of a row based on its id
   *
   * @param {number} id - the id of the row
   * @param {string} field - the field to be updated
   * @param {any} value - the new value of the field
   * @returns {void}
   */
  const updateRow = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  /**
   * calculates the result based on the values and operations of all rows excluding teh rows that are disabled
   *
   * @returns {number} - the final result
   */
  const calculate = () => {
    return rows.reduce((result, row) => {
      //skips the disabled row
      if (row.isDisabled) return result;
      //parses the value
      const number = parseFloat(row.value) || 0;
      //return the result
      return row.operation === "plus" ? result + number : result - number;
    }, 0); //initial value
  };

  return (
    <>
    <h1>Coolshop test by Davide Bellino</h1>
      <AddRowBtn addRow={addRow}></AddRowBtn>

      <ul>
        {rows.map((row) => (
          <Row
            key={row.id}
            id={row.id}
            operation={row.operation}
            value={row.value}
            isDisabled={row.isDisabled}
            removeRow={removeRow} 
            updateRow={updateRow}
          ></Row>
        ))}
      </ul>

      <p className="result">Result: {calculate()}</p>
    </>
  );
}

export default App;
