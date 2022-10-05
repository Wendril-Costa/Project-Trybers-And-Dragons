import Race from './Race';

class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  
  constructor(
    _name: string, 
    _dexterity: number, 
    private _maxLifePoints: number = 80,
  ) {
    super(_name, _dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;