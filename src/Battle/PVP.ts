import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _playerTwo: Fighter,
  ) {
    super(_playerOne);
  }

  fight(): number {
    let win = 0;
    for (let i = 0; i < 500; i += 1) {
      if (this._playerOne.lifePoints <= 0) {
        win = -1;
      }
      if (this._playerTwo.lifePoints <= 0) {
        win = 1;
      }
      this._playerTwo.attack(this._playerOne);
      this._playerOne.attack(this._playerTwo);
    }
    return win;
  }
}