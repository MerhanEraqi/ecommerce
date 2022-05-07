import styled from 'styled-components';

const Toast = (props) => {
    return(
    <Container className={'toast align-items-center text-white bg-success bg-opacity-75 border-0' + (props.isAdded ? " show" : "")}>
        <div className="d-flex">
            <div className="toast-body">
                Product added to cart successfully
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </Container>
    );
}

export default Toast;

const Container = styled.div`
    position: fixed;
    bottom: 50px;
    left: 50px;
`