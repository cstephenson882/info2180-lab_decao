// document.addEventListener('DOMContentLoaded', function () {
//    const boardParent = document.querySelector('#board');
//    //var children_of_board = boardParent.children;
//    for (let i = 0; i < boardParent.children.length;i++) {
//     const childElement = boardParent.children[i];
//     childElement.setAttribute('class', 'square');

//    }
// }); 


// on load this event run to load the sqaures

document.addEventListener('DOMContentLoaded', function () {
    const boardParent = document.querySelector('#board');
    var boardElement = document.getElementById('board');
    var boardChildren = boardElement.children;
    Array.from(boardChildren).forEach(function(child) {
        // Your code to process each child goes here
        child.classList.add('square');
    });

 }); 

 