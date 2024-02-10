import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameState=[2,2,2,2,2,2,2,2,2]
  public winStates=[[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]]
  public gameOver=false;
  public chance=0;
  public draw=false;
  public winner=-1;
  public moves=0;                  
  constructor() { }
  checkWinner(){
    for(let i=0;i<this.winStates.length;i++){
      let tempWinner=true;
      for(let j=0;j<this.winStates[0].length;j++){
        if(this.gameState[this.winStates[i][j]]!=this.chance){
          tempWinner=false;
          break;
        }
      }
      if(tempWinner==true){
        this.winner=this.chance;
        this.gameOver=true;
        return;
      }
    }
  }
  changeGameState(pos:number){
    if(this.gameOver){
        alert("Game is already Over");
        return;
    }
    if(this.gameState[pos]==0 || this.gameState[pos]==1){
        alert("This position is already Occupied");
        return;
    }
    this.gameState[pos]=this.chance;
    this.moves++;
    this.checkWinner();
    if(this.winner!=-1) {
      alert("winner is "+this.winner);
      return;
    }
    if(this.moves==9) {
      this.gameOver=true;
      this.draw=true;
      alert("The game is draw")
      return;
    }
    if(this.chance==0) this.chance=1;
    else this.chance=0;
  }
  restartGame(){
    this.gameState=[2,2,2,2,2,2,2,2,2];
    this.gameOver=false;
    this.chance=0;
    this.draw=false;
    this.winner=-1;
    this.moves=0;
  }
}
