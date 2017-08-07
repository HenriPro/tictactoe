

class tictactoe = () => {
  constructor() {
  const game = [
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
                [undefined, undefined, undefined]
              ];
  }
  
  drawRow(rowNum,input){
    let row = rowNum + " ";
    input.forEach(square => {
      square === undefined ? row += " " : row += square;
    })
    console.log(row);
  }

  drawBoard(game)  {
    game.forEach((row, i) => drawBoard(i,row));
  }



}

const drawBoard = () => {
  console.log(' | | ');
  console.log('_____');
  console.log(' | | ');
  console.log('_____');
  console.log(' | | ');

}

drawRow(1,['x', undefined, 'o']);
