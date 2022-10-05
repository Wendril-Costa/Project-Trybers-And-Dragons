import Race from './Race';

class Halfling extends Race {
  private static _createdRacesInstances = 0;
  
  constructor(
    _name: string, 
    _dexterity: number, 
    private _maxLifePoints: number = 60,
  ) {
    super(_name, _dexterity);
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;