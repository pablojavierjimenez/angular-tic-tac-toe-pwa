import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public squares: any[];
  public isNextX: boolean;
  public winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.isNextX = true;
  }

  get player() {
    return this.isNextX ? 'X' : 'O';
  }

  makeMove( idx: number){
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.isNextX = !this.isNextX;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    let lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
