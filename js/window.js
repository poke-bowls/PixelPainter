var mobile = window.innerWidth;

window.onload = function project( pixelPainter ){
  makingSquare( 35 );

};

window.onresize = function( event ) {
  mobile = window.innerWidth;
  gridSize = resize( mobile );
  var grid = document.createElement('div');
  grid.innerHTML = makingSquareGlobal( gridSize );
  document.getElementById('pixelPainter').appendChild(grid);
};