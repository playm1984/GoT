import React, { Component } from 'react';
import './itemList.css';
import Spinner from '../spinner';
// import GotService from '../../services/gotService';

export default class ItemList extends Component {

    // gotService = new GotService()
    state = {
        itemList: null
    }

    componentDidMount() {

        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(i)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(itemList)}
            </ul>
        );
    }
}