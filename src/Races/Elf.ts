import Race from './Race';

class Elf extends Race {
  private static _createdRacesInstances = 0;
  
  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
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