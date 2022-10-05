import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _createdArchetypeInstances = 0;
  
  constructor(
    name: string, 
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;