import React from 'react';
import {Expand} from '../Expand';

export class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpened: true
        };

        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        const {isOpened} = this.state;
        const {children} = this.props;

        return (
            <div>
                <button onClick={this._onClick}>{isOpened ? 'Close' : 'Open'}</button>
                <Expand  isOpened={isOpened}>
                    {children}
                </Expand>
            </div>
        );
    }
}