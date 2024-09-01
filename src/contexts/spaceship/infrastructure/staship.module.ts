import { Module } from '@nestjs/common';
import { GetSystemStatusController } from './http-api/v1/get-system-status/get-system-status.controller';
import { GetSystemStatusUseCase } from '../application/get-system-status-use-case/get-system-status-use-case';
import { PrismaRepository } from './repositories/prisma.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';
import { SpaceshipRepository } from '../domain/spaceship.repository';
import { RepairBayController } from './http-api/v1/repair-bay/repair-bay.controller';
import { RepairBayUseCase } from '../application/repair-bay-use-case/repair-bay-use-case';
import { TeapotController } from './http-api/v1/teapot/teapot.controller';
import { PhaseChangeDiagram } from './http-api/v1/phase-change-diagram/phase-change-diagram';

@Module({
  controllers: [
    GetSystemStatusController,
    RepairBayController,
    TeapotController,
    PhaseChangeDiagram,
  ],
  providers: [
    GetSystemStatusUseCase,
    RepairBayUseCase,
    PrismaRepository,
    PrismaService,
    {
      provide: SpaceshipRepository,
      useExisting: PrismaRepository,
    },
  ],
  exports: [GetSystemStatusUseCase, RepairBayUseCase],
})
export class StarshipModule {}
