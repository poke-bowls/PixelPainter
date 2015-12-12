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
      document.getElementById('row' + j).appendChild(block);

      var mouseEnter = document.getElementById((j + 'block' + i));
      mouseEnter.addEventListener("mouseenter", function(){
        if (checker === true) {

            this.style.background=color;   //need to change to equal to  var color = _______

        } //if
      }); //addEventListener
      // var clear = document.getElementsByClass((j + 'block' + i));
      // clear.addEventListener("mouseenter", function(){
      //   if (checker === true) {
      //     var test = document.getElementById((j + 'block' + i));
      //     test.addEventListener("mouseover", function(){
      //       this.style.background=color;   //need to change to equal to  var color = _______
      //     });
        //} //if
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

      // var test = document.getElementById(('blockC' + j + i));
      // test.addEventListener("click", function(){
      //     this.style.background=color;   //need to change to equal to  var color = _______
      // });
    }
  }
  return '';
};


//----------------------------------------


var colorSwatch = document.createElement('div');
colorSwatch.id = 'colorSwatch';
document.body.appendChild(colorSwatch);

var colorSwatchGrid = document.createElement('div');
colorSwatchGrid.innerHTML = makingColorSwatch(2);
document.getElementById('colorSwatch').appendChild(colorSwatchGrid);

var buttons = document.createElement('div');
buttons.id = 'buttons';
document.body.appendChild(buttons);

var eraseButton = document.createElement('button');
eraseButton.id = 'erase';
eraseButton.innerHTML = "Erase";
document.getElementById('buttons').appendChild(eraseButton);

var clearButton = document.createElement('button');
clearButton.id = 'clear';
clearButton.innerHTML = "Clear";
document.getElementById('buttons').appendChild(clearButton);

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

document.getElementById('blockC10').addEventListener("click", function(){
  color= "blue";
    });

document.getElementById('blockC11').addEventListener("click", function(){
  color= "yellow";
    });

document.getElementById('erase').addEventListener("click", function(){
  color = "white";
});
document.getElementById('clear').addEventListener("click", function(){
  var allBlocks = document.getElementsByClass('block');
  allBlocks.color = 'white';

});

document.body.addEventListener("mousedown", function(){
  checker = true;
});

document.body.addEventListener("mouseup", function(){
  checker = false;
});















};

