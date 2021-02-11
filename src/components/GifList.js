import React, { Component } from 'react';

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => (<li><img src={gif.images.original.url} alt={gif.type}></img></li>))}
            </ul>
        )
    }
}