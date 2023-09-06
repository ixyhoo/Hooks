import React, { Component } from 'react';

class OldReactComponent extends Component {
    constructor(props) {
    super(props);
this.state = {
counter:0,
age: 23,
name: "denis"
}
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
}

componentDidMount() {
}
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default OldReactComponent;