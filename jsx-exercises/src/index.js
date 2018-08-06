import React from 'react';
import ReactDOM from 'react-dom';

// EXERCISE 4
function MyThing() {
    // Try all of these variations;
    // var username = "root";
    // var username = undefined;
    // var username = null;
    // var username = false;
    // var username = 12;
    var username = true;
    var x = 5;

    return (
        <div className='greeting'>
            {typeof(username) === 'string' && 'Hello, ' + username}
            {((!username) || (typeof(username) !== 'string')) && 'Not logged in'}
            {/* {alert(x)} */}
            {/* "Hello" */}
        </div>
    )
}

// EXERCISE 3
// function MyThing() {
//     return (
//         React.createElement(
//             'div',
//             {className: 'book'},
//             React.createElement(
//                 'div',
//                 {className: 'title'},
//                 'The Title'
//             ),
//             React.createElement(
//                 'div',
//                 {className: 'author'},
//                 'The Author'
//             ),
//             React.createElement(
//                 'ul',
//                 {className: 'stats'},
//                 React.createElement(
//                     'li',
//                     {className: 'rating'},
//                     '5 stars'
//                 ),
//                 React.createElement(
//                     'li',
//                     {className: 'isbn'},
//                     '12-345678-910'
//                 )
//             )
//         )
//     );
// }

// EXERCISE 1
// function MyThing() {
//     return (
//         <div className='book'>
//             <Title/>
//             <Author/>
//             <Stats/>
//         </div>
//     );
// }

// function Title() {
//     return (
//         <div className='title'>
//             The Title
//         </div>
//     );
// }

// function Author() {
//     return (
//         <div className='author'>
//             The Author
//         </div>
//     );
// }

// function Stats() {
//     return (
//         <ul className='stats'>
//             <Rating/>
//             <Isbn/>
//         </ul>
//     );
// }

// function Rating() {
//     return (
//         <li className='rating'>
//             5 stars
//         </li>
//     );
// }

// function Isbn() {
//     return (
//         <li className='isbn'>
//             12-345678-910
//         </li>
//     );
// }

ReactDOM.render(
    <MyThing/>,
    document.querySelector('#root')
);