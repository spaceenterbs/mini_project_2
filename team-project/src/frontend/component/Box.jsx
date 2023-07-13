
import styled from 'styled-components';
function Box({ text, handleClick }) {
  return (
    <div>
      <div>
        <button
          style={{
            all: "unset",

            borderRadius: "10px",
            height: "auto",
            width: "480px",
            padding: "0 10px",
            textAlign: "center",
            marginBottom: "20px",
            backgroundColor: "white",
          }}
          onClick={handleClick}
        >
          {text}
        </button>
      </div>
    </div>
  );



}
export default Box;
