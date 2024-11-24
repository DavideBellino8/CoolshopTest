import "./AddRowBtn.css";

function AddRowBtn({addRow}) {
    
  return (
    <>
      <button className="btn addRowBtn" onClick={addRow}>Add row</button>
    </>
  );

}

export default AddRowBtn;
