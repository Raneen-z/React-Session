import React, { Component } from 'react';
import Img from './Img'
class Item extends Component {
    render() {
        return (
            <div>
                <Img imgSrc={this.props.imgSrc}/>
                <h4>{this.props.title}</h4>
                <h4>الكاتب:</h4>
                <h5> {this.props.writer}</h5>

                <hr />
            </div>
        );
    }
}

export default Item;