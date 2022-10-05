import Energy from '../Energy';

interface MetodFighter {
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

interface Fighter extends MetodFighter{
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default Fighter;