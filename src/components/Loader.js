import styled from 'styled-components';

const Loader = () => {
    return (
        <Spinner>
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </Spinner>

    );
}

export default Loader;

const Spinner = styled.div`
    width: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`