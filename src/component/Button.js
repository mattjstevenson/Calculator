import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../style/Button.css";

class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const className = [
            "button",
            this.props.colour ? "colour" : "",
            this.props.wide ? "wide" : "",
            this.props.shade ? "shade" : "",
        ];
        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}
Button.propTypes = {
    name: PropTypes.string,
    colour: PropTypes.bool,
    wide: PropTypes.bool,
    shade: PropTypes.bool,
    clickHandler: PropTypes.func,
};

export default Button;