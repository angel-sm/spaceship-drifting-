import { Injectable } from '@nestjs/common';
import { SpaceshipRepository } from '../../domain/spaceship.repository';
import { Spaceship } from '../../domain/spaceship.entity';

@Injectable()
export class PhaseChangeDiagramUseCase {
  constructor(private readonly spaceshipRepository: SpaceshipRepository) {}

  async run(): Promise<{ [key: string]: string }> {
    const spaceship = Spaceship.create();
    const systemStatus = spaceship.getDamagedSystemName();

    await this.spaceshipRepository.storeStatus(systemStatus);

    return {
      damaged_system: systemStatus,
    };
  }
}
