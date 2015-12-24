window.onload = function() {
  var color = 'white',
      checker = false,
      oldList = [],
      newList = [];

  //create a table and append it to div
  var table = document.createElement( 'table' );
  table.id = 'myTable';
  document.getElementById( 'pixelPainter' ).appendChild( table );

  //create our color swatch and append it to body
  var swatch = document.createElement( 'table' );
  swatch.id = 'colorTable';
  document.body.appendChild( swatch );

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

  //append an undo button
  var undoButton = document.createElement('button');
  undoButton.id = 'undo';
  undoButton.innerHTML = "Undo";
  document.getElementById('buttons').appendChild(undoButton);

  //append a copy button
  var copyButton = document.createElement('button');
  copyButton.id = 'copy';
  copyButton.innerHTML = "Copy";
  document.getElementById('buttons').appendChild(copyButton);

  //Class to make our grids
  function MakingGrid ( width, height, tr, td ){
    this.width = width;
    this.height = height;
    this.tr = tr;
    this.td = td;

    this.makeRows = function( tableId ) {
      //make table rows
      for( var j = 0; j < this.height; j++ ){
      var row = document.createElement( 'tr' );
      row.id = tr + j;
      row.className = tr;
      row.innerHTML = '';
      document.getElementById( tableId ).appendChild(row);
        //make table columns
        for(var i = 0; i < this.width; i ++) {
          var column = document.createElement('td');
          column.id = 'g' +j + td + i ;
          column.className = td;
          column.innerHTML = '';
          column.style.background = 'white';
          document.getElementById( tr + j ).appendChild( column );

        }//inner for
      }//outer for
      return '';
    };

  }

  //makingGrid with class method
  var grid = new MakingGrid( 40, 40, 'rows', 'column' );
  grid.makeRows( 'myTable' );

  //make color switch with class method
  var colorSwatch = new MakingGrid( 4, 4, 'canoe', 'ukulele' );
  colorSwatch.makeRows( 'colorTable' );

  //change background of color swatch
  function changeColorSwatchColor(){

    document.getElementById('g0ukulele0').style.background = 'red';
    document.getElementById('g0ukulele1').style.background = 'green';
    document.getElementById('g0ukulele2').style.background = 'yellow';
    document.getElementById('g0ukulele3').style.background = 'blue';
    document.getElementById('g1ukulele0').style.background = 'black';
    document.getElementById('g1ukulele1').style.background = 'white';
    document.getElementById('g1ukulele2').style.background = 'brown';
    document.getElementById('g1ukulele3').style.background = 'gray';
    document.getElementById('g2ukulele0').style.background = 'pink';
    document.getElementById('g2ukulele1').style.background = 'orange';
    document.getElementById('g2ukulele2').style.background = 'blanchedalmond';
    document.getElementById('g2ukulele3').style.background = 'fuchsia';
    document.getElementById('g3ukulele0').style.background = 'Chartreuse';
    document.getElementById('g3ukulele1').style.background = 'cyan';
    document.getElementById('g3ukulele2').style.background = 'darkmagenta';
    document.getElementById('g3ukulele3').style.background = 'firebrick';
  }
  changeColorSwatchColor();

  document.getElementById('g0ukulele0').addEventListener("click", function(){
    color= "red";
    newList = [];
  });

  document.getElementById('g0ukulele1').addEventListener("click", function(){
    color= "green";
    newList = [];
  });

  document.getElementById('g0ukulele2').addEventListener("click", function(){
    color= "yellow";
    newList = [];
  });

  document.getElementById('g0ukulele3').addEventListener("click", function(){
    color= "blue";
    newList = [];
  });

  document.getElementById('g1ukulele0').addEventListener("click", function(){
    color= "black";
    newList = [];
  });

  document.getElementById('g1ukulele1').addEventListener("click", function(){
    color= "white";
    newList = [];
  });

  document.getElementById('g1ukulele2').addEventListener("click", function(){
    color= "brown";
    newList = [];
  });

  document.getElementById('g1ukulele3').addEventListener("click", function(){
    color= "gray";
    newList = [];
  });

  document.getElementById('g2ukulele0').addEventListener("click", function(){
    color= "pink";
    newList = [];
  });

  document.getElementById('g2ukulele1').addEventListener("click", function(){
    color= "orange";
    newList = [];
  });

  document.getElementById('g2ukulele2').addEventListener("click", function(){
    color= "blanchedalmond";
    newList = [];
  });

  document.getElementById('g2ukulele3').addEventListener("click", function(){
    color= "fuchsia";
    newList = [];
  });

  document.getElementById('g3ukulele0').addEventListener("click", function(){
    color= "Chartreuse";
    newList = [];
  });

  document.getElementById('g3ukulele1').addEventListener("click", function(){
    color= "cyan";
    newList = [];
  });

  document.getElementById('g3ukulele2').addEventListener("click", function(){
    color= "darkmagenta";
    newList = [];
  });

  document.getElementById('g3ukulele3').addEventListener("click", function(){
    color= "firebrick";
    newList = [];
  });

  // document.getElementById('erase').addEventListener("click", function(){
  //   color = "white";
  //   newList = [];
  // });






};//window.onload