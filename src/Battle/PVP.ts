import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _playerTwo: Fighter,
  ) {
    super(_playerOne);
  }

  fight(): number {
    while (this._playerOne.lifePoints > -1 && this._playerTwo.lifePoints > -1) {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    }
    return super.fight();
  }
}

export default PVP;