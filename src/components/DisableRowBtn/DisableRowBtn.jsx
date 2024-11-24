import "./DisableRowBtn.css";


function DisableRowBtn({ changeState, disabled }) {
  return (
    <>
      <button className="btn disableRowBtn" onClick={changeState}>
        {disabled == false ? "disable" : "enable"}
      </button>
    </>
  );
}

export default DisableRowBtn;
