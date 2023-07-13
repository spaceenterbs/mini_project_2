import styled from 'styled-components';
const ButtonActive = styled.button`
    all: unset;
    cursor: pointer;
    border-radius: 10px;
    height: 50px;
    width: 220px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    background-color: white;
    // position: relative;
    // // opacity: 1;
    // transition: opacity 1s;

    // @keyframes {
    //     0% {
    //         opacity: 0;
    //     }
    //     100% {
    //         opacity: 1;
    //     }
    // }
`;
const ButtonHidden = styled.button`
    all: unset;
    cursor: pointer;
    border-radius: 10px;
    height: 50px;
    width: 220px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    background-color: white;
    // position: absolute;
    // visibility: hidden;
    // opacity: 0;
    // transition: opacity 1s ease;
`;
function Box({ text, handleClick, style }) {
    return (
        <div>
            <div>
                <ButtonActive style={style} onClick={handleClick}>
                    {text}
                </ButtonActive>
            </div>
        </div>
    );
}
export default Box;
