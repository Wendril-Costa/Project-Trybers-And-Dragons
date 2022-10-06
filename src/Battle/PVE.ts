import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _monsters: (Fighter | SimpleFighter)[],
  ) {
    super(_playerOne);
  }

  fight(): number {
    for (let i = 0; i < 500; i += 1) {
      if (this._playerOne.lifePoints <= 0) return -1;
      if (this._monsters.every((monster) => monster.lifePoints <= -1)) return 1;
      this._monsters.forEach((monster) => {
        monster.attack(this._playerOne);
        this._playerOne.attack(monster);
      });
    }
    return 1;
  }
}
