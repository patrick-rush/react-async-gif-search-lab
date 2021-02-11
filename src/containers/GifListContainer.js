import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
        this.fetchGifs = this.fetchGifs.bind(this);
    }
    
    
    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }

    fetchGifs(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=VUTpRuro8hQsZfttzNI5lxl291xxBqub&rating=g`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                let firstThree = data.data.slice(0, 3);
                console.log(this)
                this.setState({gifs: firstThree});
            })
    }

    componentDidMount() {
        this.fetchGifs("welcome")
    }

}