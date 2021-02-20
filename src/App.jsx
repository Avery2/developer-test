import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';
import styled from 'styled-components'

const Container = styled.div`
    background-color: pink;
    display: grid;
    justify-items: center;
    padding: 2em;
    margin: auto;
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius: 0.5em;
    box-shadow: 0 0 2em black;
    //   width: 50%;
    //   height: auto;
    width: 400px;
    height: 540px;
`;

const Wishlist = styled.ul`
    border: 1px solid black;
    min-height: 250px;
    width: 80%;
    background-color: white;
    padding: 1em;
    border-radius: 0.5em;
    padding-bottom: 0.5em;
`;

const List = styled.li`
    list-style-type: none;
    background-color: white;
    // &:hover {
    //     background-color: lightgrey;
    // }
    padding-bottom: .5em;
`;

const Wish = styled.input`
    padding: 1em;
    border-radius: 0.5em;
    border: 1px solid black;
    width: 80%;
`;

const Button = styled.button`
    margin: 5% 0 5% 0;
    padding: 10px;
    background-color: lightgreen;
    font-weight: bold;
    border-radius: 0.5em;
    padding: 1em;
    box-sizing: content-box;
`;

const AddButton = styled(Button)`
    width: 40%;
`;

const SubmitButton = styled(Button)`
    margin: 0;
    width: 80%;
`;

const Title = styled.h1`
    margin: 0;
`;

const App = ({ wishlist, addItem, deleteItem }) => {

    const [text, setText] = useState("");
    
    return (
        <Container id="container">
            <Title>MY WISHLIST</Title>
            <Wishlist>
            {wishlist.map(
                (wish) => (<List onClick={(e) => {
                    e.preventDefault();
                    deleteItem(wish);
                }}>{wish}</List>)
            )}
            </Wishlist>
            <Wish value={text} onChange={(e) => {
                e.preventDefault();
                setText(e.target.value);
            }}/>
            <AddButton onClick={(e) => {
                e.preventDefault();
                addItem(text);
                setText("")
            }}>Add</AddButton>
            <SubmitButton onClick={(e) => {
                if (wishlist.length !== 0) {
                    e.preventDefault();
                    alert("Wish list submitted to Santa!");
                    wishlist.map((wish) => deleteItem(wish))
                }
            }
            }>Submit</SubmitButton>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    wishlist: state.wishList,
});

export default connect(mapStateToProps, {addItem, deleteItem})(App)

