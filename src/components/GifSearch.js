import React, { Component } from 'react';

export default class GifSearch extends Component {
    state = {
        searchQuery: ""
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.fetchGifs(this.state.searchQuery)
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}>

                </input>
            </form>
        )
    }
}