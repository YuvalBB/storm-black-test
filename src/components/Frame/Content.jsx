// Source: https://github.com/ryanseddon/react-frame-component/
// Didn't use it as a package because I modified a few stuff


import React, { Component, Children } from 'react'; // eslint-disable-line no-unused-vars
import * as PropTypes from 'prop-types';

export default class Content extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        contentDidMount: PropTypes.func.isRequired,
        contentDidUpdate: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.contentDidMount();
    }

    componentDidUpdate() {
        this.props.contentDidUpdate();
    }

    render() {
        return Children.only(this.props.children);
    }
}
