export type SystemCodes = {
  navigation: string;
  communications: string;
  life_support: string;
  engines: string;
  deflector_shield: string;
};

export class Spaceship {
  private systemCodes: SystemCodes;
  private systemNames: (keyof SystemCodes)[];

  constructor() {
    this.systemCodes = {
      navigation: 'NAV-01',
      communications: 'COM-02',
      life_support: 'LIFE-03',
      engines: 'ENG-04',
      deflector_shield: 'SHLD-05',
    };

    this.systemNames = [
      'navigation',
      'communications',
      'life_support',
      'engines',
      'deflector_shield',
    ];
  }

  static create(): Spaceship {
    return new Spaceship();
  }

  validateSystem(system: keyof SystemCodes) {
    const existSystem = Object.keys(this.systemCodes).includes(system);

    if (!existSystem) {
      throw new Error(`This system ${system} not exist in this starship`);
    }
  }

  getDamagedSystemName() {
    const randomIndex = Math.floor(Math.random() * this.systemNames.length);
    return this.systemNames[randomIndex];
  }

  getSystemCode(system: keyof SystemCodes): string {
    return this.systemCodes[system];
  }
}
