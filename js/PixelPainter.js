 //Every color selector will clear oldList????
var mobile = window.innerWidth;
var gridSize = resize( mobile );
var makingSquareGlobal;

function resize( mobile ) {
  if ( mobile < 910 ) {

    return 25;
  }
  return 35;
}

window.onload = function(){
var color = 'white',
    checker = false,
    oldList = [],
    newList = [];

function PixelPainter(width,height){
  this.width = width;
  this.height =height;
}

function Cell(width,height){
  PixelPainter.call(this,width,height);
}

Cell.prototype = Object.create(PixelPainter.prototype,{
  constructor: {
    value: PixelPainter
  }
});

function ColorSwatch(width,height){
  PixelPainter.call(this,width,height);
}

ColorSwatch.prototype = Object.create(PixelPainter.prototype,{
  constructor: {
    value: PixelPainter
  }
});

//----------------------------------------

//squares in the grid
var makingSquare = function makingSquare(number){

  for(var j = 0;j<number; j++){
  var row = document.createElement('div');
  row.id = "row" +j;
  row.className = "row";
  row.innerHTML = '';
  document.getElementById('pixelPainter').appendChild(row);

    for(var i = 0; i < number; i ++){
      var block = document.createElement('div');
      block.id = j + 'block'+ i ;
      block.className = 'block';
      block.innerHTML = "";
      block.style.background = 'white';
      document.getElementById('row' + j).appendChild(block);

      var mouseEnter = document.getElementById((j + 'block' + i));

      // For start/stop functionality instead of click/drag
      // 1. Uncomment this.
      // 2. Comment out "mousedown" and "mouseup" event listeners

      mouseEnter.addEventListener("click", function(){
        this.style.background = color;
        checker = !checker;
        oldList.push(this);
        newList.push(this);
        console.log(oldList);
      });

      // mouseEnter.addEventListener("mousedown", function(){
      //   checker = true;
      //   this.style.background = color;
      // });

      mouseEnter.addEventListener("mouseenter", function(){
        if (checker === true) {
            this.style.background=color;
            oldList.push(this);
            newList.push(this);
            console.log(oldList);
        }

      // mouseEnter.addEventListener("mouseup", function(){
      //   oldList.push(this);
      //   checker = false;
      //   }

      //clear button here
      //getElementsByClassName returns a HTML Collection (like array)
      var clearAll = document.getElementById('clear');
      clearAll.addEventListener("click", function(){
         var allBlocks = document.getElementsByClassName('block');
         for (i = 0; i < allBlocks.length; i++) {
          allBlocks[i].style.background = 'white';
         }
      });

      //undo button here
      //iterate through list of objects saved and change color to white
      var undoLast = document.getElementById('undo');
      undoLast.addEventListener("click", function(){
        for (i = 0; i < oldList.length; i++) {
          newList[i].style.background = 'white';
        }
          newList = [];
      });

      });
    }//inside For
  }//outside For

  return '';
};
makingSquareGlobal = makingSquare;

var makingColorSwatch = function(number){

  for(var j = 0;j<number; j++){
  var rowC = document.createElement('div');
  rowC.id = "rowC" + j;
  rowC.className = "rowC";
  // rowC.innerHTML = '';
  document.getElementById('colorSwatch').appendChild(rowC);

    for(var i = 0; i < number; i ++){
      var blockC = document.createElement('div');
      blockC.id = 'blockC'+ j + i ;
      blockC.className = 'blockC';
      blockC.innerHTML = "";
      document.getElementById('rowC' + j).appendChild(blockC);
    }
  }
  return '';
};

//----------------------------------------

// create a div for buttons
var buttons = document.createElement('div');
buttons.id = 'buttons';
document.body.appendChild(buttons);
$ ( document.getElementById( 'pixelPainter' )).insertAfter( document.getElementById( 'buttons' ) );

//make a div for colorSwatch
var colorSwatch = document.createElement('div');
colorSwatch.id = 'colorSwatch';
document.body.appendChild(colorSwatch);

//append a div ( our color swatch ) to colorSwatch
var colorSwatchGrid = document.createElement('div');
colorSwatchGrid.innerHTML = makingColorSwatch(4);
document.getElementById('colorSwatch').appendChild(colorSwatchGrid);

//append an erase button
var eraseButton = document.createElement('button');
eraseButton.id = 'erase';
eraseButton.className = 'btns';
eraseButton.innerHTML = "Erase";
document.getElementById('buttons').appendChild(eraseButton);

//append a clear button
var clearButton = document.createElement('button');
clearButton.id = 'clear';
clearButton.className = 'btns';
clearButton.innerHTML = "Clear";
document.getElementById('buttons').appendChild(clearButton);

//append an undo button
var undoButton = document.createElement('button');
undoButton.id = 'undo';
undoButton.className = 'btns';
undoButton.innerHTML = "Undo";
document.getElementById('buttons').appendChild(undoButton);

//append a copy button
var copyButton = document.createElement('button');
copyButton.id = 'copy';
copyButton.className = 'btns';
copyButton.innerHTML = "Copy";
document.getElementById('buttons').appendChild(copyButton);

//append divs ( our ) to our
var grid = document.createElement('div');
grid.innerHTML = makingSquare( gridSize );
document.getElementById('pixelPainter').appendChild(grid);

//---------------------------------------------

document.getElementById('blockC00').addEventListener("click", function(){
  color= "red";
  newList = [];
    });

document.getElementById('blockC01').addEventListener("click", function(){
  color= "green";
  newList = [];
    });

document.getElementById('blockC02').addEventListener("click", function(){
  color= "yellow";
  newList = [];
    });

document.getElementById('blockC03').addEventListener("click", function(){
  color= "blue";
  newList = [];
    });

document.getElementById('blockC10').addEventListener("click", function(){
  color= "black";
  newList = [];
    });

document.getElementById('blockC11').addEventListener("click", function(){
  color= "white";
  newList = [];
    });

document.getElementById('blockC12').addEventListener("click", function(){
  color= "brown";
  newList = [];
    });

document.getElementById('blockC13').addEventListener("click", function(){
  color= "gray";
  newList = [];
    });

document.getElementById('blockC20').addEventListener("click", function(){
  color= "pink";
  newList = [];
    });

document.getElementById('blockC21').addEventListener("click", function(){
  color= "orange";
  newList = [];
    });

document.getElementById('blockC22').addEventListener("click", function(){
  color= "blanchedalmond";
  newList = [];
    });

document.getElementById('blockC23').addEventListener("click", function(){
  color= "fuchsia";
  newList = [];
    });

document.getElementById('blockC30').addEventListener("click", function(){
  color= "Chartreuse";
  newList = [];
    });

document.getElementById('blockC31').addEventListener("click", function(){
  color= "cyan";
  newList = [];
    });

document.getElementById('blockC32').addEventListener("click", function(){
  color= "darkmagenta";
  newList = [];
    });

document.getElementById('blockC33').addEventListener("click", function(){
  color= "firebrick";
  newList = [];
    });

document.getElementById('erase').addEventListener("click", function(){
  color = "white";
  newList = [];
});

};

window.onresize = function( event ) {
  mobile = window.innerWidth;
  gridSize = resize( mobile );
  var grid = document.createElement('div');
  grid.innerHTML = makingSquareGlobal( gridSize );
  document.getElementById('pixelPainter').appendChild(grid);
  console.log(gridSize);
};