import React from 'react';
import './style.css';

const ANIMATION_TERM = 200;

export class Expand extends React.Component {
    constructor(props) {
        super();
        this._content = React.createRef();

        this.state = {
            height: props.isOpened ? 'auto' : 0
        }
    }

    _setContentHeight() {
        this.setState({
            height: this._content.current.offsetHeight
        });        
    }

    _setAutoHeight() {
        this.setState({
            height: 'auto'
        });
    }

    _setZeroHeight() {
        this.setState({
            height: 0
        });
    }

    _open() {
        this._setContentHeight();
        setTimeout(() => this._setAutoHeight(), ANIMATION_TERM);
    }

    _close() {
        this._setContentHeight();
        requestAnimationFrame(() => this._setZeroHeight());
    }

    componentDidUpdate(prevProps) {
        const {isOpened} = this.props;

        if (isOpened !== prevProps.isOpened) {
            if (isOpened) {
                this._open();
            } else {
                this._close();
            }
        }
    }

    render () {
        const {
            children
        } = this.props;

        const {
            height
        } = this.state;

        return (
            <div className='expand' style={{height}}>
                <div className='content' ref={this._content}>
                    {children}
                </div>
            </div>
        );
    }
}
