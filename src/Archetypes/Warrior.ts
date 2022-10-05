import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  
  constructor(
    name: string, 
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;