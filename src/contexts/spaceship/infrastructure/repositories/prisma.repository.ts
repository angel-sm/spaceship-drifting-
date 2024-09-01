import { Injectable } from '@nestjs/common';
import { SpaceshipRepository } from '../../domain/spaceship.repository';
import { PrismaService } from '../../../shared/infrastructure/repositories/prisma.repository';
import { SystemCodes } from '../../domain/spaceship.entity';

@Injectable()
export class PrismaRepository extends SpaceshipRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async storeStatus(status: string): Promise<void> {
    await this.prisma.systemStatus.upsert({
      where: { id: 1 },
      update: { lastStatus: status },
      create: { lastStatus: status },
    });
  }

  async getLastStatus(): Promise<keyof SystemCodes> {
    const status = await this.prisma.systemStatus.findFirst({
      where: { id: 1 },
    });

    return status.lastStatus as keyof SystemCodes;
  }
}
