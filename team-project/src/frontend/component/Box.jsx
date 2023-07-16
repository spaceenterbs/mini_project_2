import styled from 'styled-components';
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: 2px solid #4c200b;
    font-size: 24px;
    font-weight: 700;
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
