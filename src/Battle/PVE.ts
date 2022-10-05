import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(private _player: Fighter, private _monsters: SimpleFighter[]) {
    super(_player);
  }
  
  fight(): number {
    this._monsters.map((monster: SimpleFighter) => {
      while (this._player.lifePoints > -1 && monster.lifePoints > -1) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
      return 1;
    });
    return super.fight();
  }
}

export default PVE;