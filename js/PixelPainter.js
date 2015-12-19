window.onload = function() {
  var table = document.createElement( 'table' );
  table.id = 'myTable';
  document.getElementById( 'pixelPainter' ).appendChild( table );


  function MakingGrid ( width, height ){
    this.width = width;
    this.height = height;

    this.makeRows = function() {
      //make table rows
      for( var j = 0; j < this.height; j++ ){
      var row = document.createElement( 'tr' );
      row.id = 'row' + j;
      row.className = 'row';
      row.innerHTML = '';
      document.getElementById('myTable').appendChild(row);
        //make table columns
        for(var i = 0; i < this.width; i ++) {
          var column = document.createElement('td');
          column.id = j + 'column'+ i ;
          column.className = 'column';
          column.innerHTML = '';
          column.style.background = 'white';
          document.getElementById( 'row' + j ).appendChild( column );

        }//inner for
      }//outer for
      return '';
    };

  }//makingGrid
  var grid = new MakingGrid( 20, 20 );
  grid.makeRows();

  var colorSwatch = new MakingGrid( 4, 4 );
  colorSwatch.makeRows();
  // var colorSwatch = new MakingGrid( 4, 4 );




};//window.onload
