import styled from 'styled-components';

const HeaderSection = (props) => {
    return (
        <Header>
            <ol className="breadcrumb container">
                <li class="text-center w-100"><h3>{props.title}</h3></li>
            </ol>
        </Header>
    )
}

export default HeaderSection;

const Header = styled.div`
margin-bottom: 50px;
    padding: 8.6rem 0 5rem;
    background-image: url('./images/bg.webp');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
`;
