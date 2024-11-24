import "./DeleteRowBtn.css";


function DeleteRowBtn({ removeRow, disabled }) {
  return (
    <>
      <button className={`btn ${disabled ? 'disabledDeleteRowBtn' : 'deleteRowBtn'}`} disabled={disabled} onClick={removeRow}>
        Delete Row
      </button>
    </>
  );
}

export default DeleteRowBtn;
