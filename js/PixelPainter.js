window.onload = function() {
  var table = document.createElement( 'table' );
  table.id = 'myTable';
  document.getElementById( 'pixelPainter' ).appendChild( table );


  function makingGrid ( width, height ){

    //make table rows
    for( var j = 0; j < height; j++ ){
    var row = document.createElement( 'tr' );
    row.id = 'row' + j;
    row.className = 'row';
    row.innerHTML = '';
    document.getElementById('myTable').appendChild(row);
      //make table columns
      for(var i = 0; i < width; i ++) {
        var column = document.createElement('td');
        column.id = j + 'column'+ i ;
        column.className = 'column';
        column.innerHTML = '';
        column.style.background = 'white';
        document.getElementById( 'row' + j ).appendChild( column );

      }//inner for
    }//outer for
    return '';
  }//makingGrid

makingGrid(20, 20); 




};//window.onload
