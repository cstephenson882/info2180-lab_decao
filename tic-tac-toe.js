// document.addEventListener('DOMContentLoaded', function () {
//    const boardParent = document.querySelector('#board');
//    //var children_of_board = boardParent.children;
//    for (let i = 0; i < boardParent.children.length;i++) {
//     const childElement = boardParent.children[i];
//     childElement.setAttribute('class', 'square');

//    }
// }); 


// on load this event run to load the sqaures

function checkWin() {
    //alert(9999);

}
document.addEventListener('DOMContentLoaded', function () {
    

    var switch_ = 0;
    var state_ = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    console.log(Array.from(state_));

  
   
    // Select the "board" element using querySelector
    var boardElement = document.querySelector('#board');
    // Get the children of the "board" element
    var boardChildren = boardElement.children;

    // Iterate over each child and add the "square" class
    Array.from(boardChildren).forEach(function(child) {
        child.classList.add('square');
        

        child.addEventListener('click', function() {
          var index = Array.from(boardChildren).indexOf(child);
          console.log(`Square ${index} clicked!`);
            // Your code to handle the click event goes here

            // Add the "O" class only to the clicked square
            if (switch_ == 0) {
                child.classList.add('O');
                let myText = document.createTextNode("O");
                child.append(myText);
                switch_= 1;
                state_[index] = 0;
                //child.style.backgroundColor = 'yellow';
            } else{
                child.classList.add('X');
                let myText = document.createTextNode("X");
                child.append(myText);
                switch_ = 0;
                state_[index] = 1;
            }
            console.log(Array.from(state_));
          
            checkWin();
            
        });

        child.addEventListener('mouseover',function(){
            child.classList.add('hover');
            
        });

        child.addEventListener('mouseout',function(){
            child.classList.remove('hover');
            
        });

        
    });
});


 

 