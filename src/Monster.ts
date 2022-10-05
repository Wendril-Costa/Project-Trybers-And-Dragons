import SimpleFighter from './Fighter/SimpleFighter';

class Monster implements SimpleFighter {
  constructor(
    protected _lifePoints: number = 85, 
    private _strength: number = 63,
  ) { }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;
