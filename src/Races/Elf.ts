import Race from './Race';

class Elf extends Race {
  private static _createdRacesInstances = 0;
  
  constructor(
    _name: string, 
    _dexterity: number, 
    private _maxLifePoints: number = 99,
  ) {
    super(_name, _dexterity);
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

export default Elf;