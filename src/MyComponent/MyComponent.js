import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
            </div>
        );
    }
}
export default MyComponent;
