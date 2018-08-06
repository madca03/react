import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return (
        // <div>Hello World!</div>
        <div>
            <div>
                <Hello/> <World/>!
            </div>

            <div>
                <ValidIndicator/>
            </div>
        </div>
);

    // return [<Hello/>, <World/>];
}

function ValidIndicator() {
    var isValid = true;
    // return (
    //     <span>{isValid ? 'valid' : 'not valid'}</span>
    // );
    return (
        <span>
            {/* here is a comment */}
            {isValid && 'valid'}
            {!isValid && 'not valid'}
            {
                // Double-slash comments are
                // OK in multi-line blocks.
            }
        </span>
    );
}

function Hello() {
    return (
        <span>Hello</span>
    );
}

function World() {
    return (
        <span>World</span>
    )
}

// function HelloWorld() {
//     return React.createElement(
//         'div',
//         {},
//         'Hello World! React'
//     );
// }

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);