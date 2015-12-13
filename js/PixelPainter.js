window.onload =function(){
var color = 'white';
var checker = false;



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
var makingSquare = function(number){

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
      //1. Uncomment this.
      //2. Comment out "mousedown" and "mouseup" event listeners
      //
      //   mouseEnter.addEventListener("click", function(){
      //   this.style.background = color;
      //   checker = !checker;
      // });

      mouseEnter.addEventListener("mousedown", function(){
        checker = true;
        this.style.background = color;
      });

      mouseEnter.addEventListener("mouseenter", function(){
        if (checker === true) {
            this.style.background=color;

        }

      //clear button here
      //getElementsByClassName returns a HTML Collection (like array)
      var clearAll = document.getElementById('clear');
      clearAll.addEventListener("click", function(){
         var allBlocks = document.getElementsByClassName('block');
         for (i = 0; i < allBlocks.length; i++) {
          allBlocks[i].style.background = 'white';
         }
      });

      });
    }//inside For
  }//outside For


  return '';
};

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

//make a div for colorSwatch
var colorSwatch = document.createElement('div');
colorSwatch.id = 'colorSwatch';
document.body.appendChild(colorSwatch);
//append a div(our color swatch) to colorSwatch
var colorSwatchGrid = document.createElement('div');
colorSwatchGrid.innerHTML = makingColorSwatch(4);
document.getElementById('colorSwatch').appendChild(colorSwatchGrid);

//create a div for buttons
var buttons = document.createElement('div');
buttons.id = 'buttons';

document.body.appendChild(buttons);
//append an erase button
var eraseButton = document.createElement('button');
eraseButton.id = 'erase';
eraseButton.innerHTML = "Erase";
document.getElementById('buttons').appendChild(eraseButton);
//append a clear button
var clearButton = document.createElement('button');
clearButton.id = 'clear';
clearButton.innerHTML = "Clear";
document.getElementById('buttons').appendChild(clearButton);
//append divs(our ) to our
var grid = document.createElement('div');
grid.innerHTML =makingSquare(20);
document.getElementById('pixelPainter').appendChild(grid);

//---------------------------------------------
document.getElementById('blockC00').addEventListener("click", function(){
  color= "red";
    });

document.getElementById('blockC01').addEventListener("click", function(){
  color= "green";
    });

document.getElementById('blockC02').addEventListener("click", function(){
  color= "yellow";
    });

document.getElementById('blockC03').addEventListener("click", function(){
  color= "blue";
    });

document.getElementById('blockC10').addEventListener("click", function(){
  color= "black";
    });

document.getElementById('blockC11').addEventListener("click", function(){
  color= "white";
    });

document.getElementById('blockC12').addEventListener("click", function(){
  color= "brown";
    });

document.getElementById('blockC13').addEventListener("click", function(){
  color= "gray";
    });

document.getElementById('blockC20').addEventListener("click", function(){
  color= "pink";
    });

document.getElementById('blockC21').addEventListener("click", function(){
  color= "orange";
    });

document.getElementById('blockC22').addEventListener("click", function(){
  color= "blanchedalmond";
    });

document.getElementById('blockC23').addEventListener("click", function(){
  color= "fuchsia";
    });

document.getElementById('blockC30').addEventListener("click", function(){
  color= "Chartreuse";
    });

document.getElementById('blockC31').addEventListener("click", function(){
  color= "cyan";
    });

document.getElementById('blockC32').addEventListener("click", function(){
  color= "darkmagenta";
    });

document.getElementById('blockC33').addEventListener("click", function(){
  color= "firebrick";
    });

document.getElementById('erase').addEventListener("click", function(){
  color = "white";
});


document.body.addEventListener("mouseup", function(){
  checker = false;
});











};

