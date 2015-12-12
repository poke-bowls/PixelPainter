window.onload =function(){
var color = 'blue';



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
      block.id = 'block'+ j+ i ;
      block.className = 'block';
      block.innerHTML = "";
      document.getElementById('row' + j).appendChild(block);

      var test = document.getElementById(('block' + j + i));
      test.addEventListener("click", function(){
          this.style.background=color;   //need to change to equal to  var color = _______
      });
    }
  }


  return '';
};

var makingColorSwatch = function(number){

  for(var j = 0;j<number; j++){
  var rowC = document.createElement('div');
  rowC.id = "rowC" +j;
  rowC.className = "rowC";
  rowC.innerHTML = '';
  document.getElementById('colorSwatch').appendChild(rowC);

    for(var i = 0; i < number; i ++){
      var blockC = document.createElement('div');
      blockC.id = 'blockC'+ j+ i ;
      blockC.className = 'blockC';
      blockC.innerHTML = "";
      document.getElementById('rowC' + j).appendChild(block);

      var test = document.getElementById(('blockC' + j + i));
      test.addEventListener("click", function(){
          this.style.background=color;   //need to change to equal to  var color = _______
      });
    }
  }


  return '';
};


//----------------------------------------


var colorSwatch = document.createElement('div');
colorSwatch.id = 'colorSwatch';
colorSwatch.innerHTML = "hi";
document.body.appendChild(colorSwatch);

var buttons = document.createElement('div');
buttons.id = 'buttons';
buttons.innerHTML = 'buttons';
document.body.appendChild(buttons);

var grid = document.createElement('div');
grid.innerHTML =makingSquare(10);
document.getElementById('pixelPainter').appendChild(grid);







};


//---------------------------------------------

