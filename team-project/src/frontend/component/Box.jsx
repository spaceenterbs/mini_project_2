import styled from "styled-components";
const Button = styled.button`
  &:hover {
    background-color: #f5e9d5;
    // color: #4c200b;
    // font-weight: 700;
  }
  all: unset;
  border-radius: 10px;
  height: auto;
  width: 480px;
  padding: 0 10px;
  text-align: center;
  margin-bottom: 20px;
  background-color: white;
`;
function Box({ text, handleClick }) {
  return (
    <div>
      <div>
        <Button
          // style={{
          //     all: 'unset',

          //     borderRadius: '10px',
          //     height: 'auto',
          //     width: '480px',
          //     padding: '0 10px',
          //     textAlign: 'center',
          //     marginBottom: '20px',
          //     backgroundColor: 'white',
          // }}
          onClick={handleClick}
        >
          {text}
        </Button>
      </div>
    </div>
  );
}
export default Box;
