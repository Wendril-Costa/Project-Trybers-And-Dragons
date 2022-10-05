import Race from './Race';

class Orc extends Race {
  private static _createdRacesInstances = 0;
  
  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}

export default Orc;