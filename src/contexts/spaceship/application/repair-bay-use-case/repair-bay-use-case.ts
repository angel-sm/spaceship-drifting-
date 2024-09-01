import { Injectable } from '@nestjs/common';
import { SpaceshipRepository } from '../../domain/spaceship.repository';
import { Spaceship } from '../../domain/spaceship.entity';

@Injectable()
export class RepairBayUseCase {
  spaceship: Spaceship;

  constructor(private readonly spaceshipRepository: SpaceshipRepository) {
    this.spaceship = Spaceship.create();
  }

  async run(): Promise<string> {
    const status = await this.spaceshipRepository.getLastStatus();
    const systemCode = this.spaceship.getSystemCode(status);

    const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Repair</title>
        </head>
        <body>
            <div class="anchor-point">${systemCode}</div>
        </body>
        </html>
    `;

    return htmlTemplate;
  }
}
