function Box({ text, handleClick }) {
    return (
        <div>
            <div>
                <button
                    style={{
                        all: 'unset',

                        borderRadius: '10px',
                        height: '50px',
                        width: '220px',
                        padding: '0 10px',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '10px',
                        backgroundColor: 'white',
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
