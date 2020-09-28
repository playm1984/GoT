import React, { Component } from 'react';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock'
import ItemDetails, { Field } from '../itemDetails'




export default class BookPage extends Component {
    gotService = new GotService();
    state = {
        selectedBook: null
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({ name }) => name}
            />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedBook}
                getData={this.gotService.getBook} >
                <Field field='name' label='Name' />
                <Field field='publisher' label='Publicer' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}