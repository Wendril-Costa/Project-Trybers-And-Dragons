import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  
  constructor(
    name: string, 
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;