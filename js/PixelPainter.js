window.onload = function() {
  var table = document.createElement( 'table' );
  table.id = 'myTable';
  document.getElementById( 'pixelPainter' ).appendChild( table );

  var swatch = document.createElement( 'table' );
  swatch.id = 'colorTable';
  document.body.appendChild( swatch );


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

  }//makingGrid
  var grid = new MakingGrid( 20, 20, 'rows', 'column' );
  grid.makeRows( 'myTable' );

  var colorSwatch = new MakingGrid( 4, 4, 'canoe', 'ukulele' );
  colorSwatch.makeRows( 'colorTable' );
  // var colorSwatch = new MakingGrid( 4, 4 );

  function changeColorSwatchColor(){
document.getElementById('g0ukulele0').style.background = 'red';
document.getElementById('g0ukulele1').style.background = 'green';
document.getElementById('g0ukulele2').style.background = 'yellow';
document.getElementById('g0ukulele3').style.background = 'black';
document.getElementById('g1ukulele0').style.background = 'brown';
document.getElementById('g1ukulele1').style.background = 'pink';
document.getElementById('g1ukulele2').style.background = 'orange';
document.getElementById('g1ukulele3').style.background = 'blue';
document.getElementById('g2ukulele0').style.background = 'gray';
document.getElementById('g2ukulele1').style.background = 'fuchsia';
document.getElementById('g2ukulele2').style.background = 'white';
document.getElementById('g2ukulele3').style.background = 'cyan';
document.getElementById('g3ukulele0').style.background = 'firebrick';
document.getElementById('g3ukulele1').style.background = 'violet';
document.getElementById('g3ukulele2').style.background = 'chartreuse';
document.getElementById('g3ukulele3').style.background = 'darkmagenta';


  }

changeColorSwatchColor();

  // document.getElementById('g0ukulele0').addEventListener("click", function(){
  // // color= "red";
  // // newList = [];
  // this.style.background = 'red';
  //   });

// document.getElementById('blockC01').addEventListener("click", function(){
//   color= "green";
//   newList = [];
//     });

// document.getElementById('blockC02').addEventListener("click", function(){
//   color= "yellow";
//   newList = [];
//     });

// document.getElementById('blockC03').addEventListener("click", function(){
//   color= "blue";
//   newList = [];
//     });

// document.getElementById('blockC10').addEventListener("click", function(){
//   color= "black";
//   newList = [];
//     });

// document.getElementById('blockC11').addEventListener("click", function(){
//   color= "white";
//   newList = [];
//     });

// document.getElementById('blockC12').addEventListener("click", function(){
//   color= "brown";
//   newList = [];
//     });

// document.getElementById('blockC13').addEventListener("click", function(){
//   color= "gray";
//   newList = [];
//     });

// document.getElementById('blockC20').addEventListener("click", function(){
//   color= "pink";
//   newList = [];
//     });

// document.getElementById('blockC21').addEventListener("click", function(){
//   color= "orange";
//   newList = [];
//     });

// document.getElementById('blockC22').addEventListener("click", function(){
//   color= "blanchedalmond";
//   newList = [];
//     });

// document.getElementById('blockC23').addEventListener("click", function(){
//   color= "fuchsia";
//   newList = [];
//     });

// document.getElementById('blockC30').addEventListener("click", function(){
//   color= "Chartreuse";
//   newList = [];
//     });

// document.getElementById('blockC31').addEventListener("click", function(){
//   color= "cyan";
//   newList = [];
//     });

// document.getElementById('blockC32').addEventListener("click", function(){
//   color= "darkmagenta";
//   newList = [];
//     });

// document.getElementById('blockC33').addEventListener("click", function(){
//   color= "firebrick";
//   newList = [];
//     });

// document.getElementById('erase').addEventListener("click", function(){
//   color = "white";
//   newList = [];
// });




};//window.onload
