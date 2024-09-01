import { Controller, Get } from '@nestjs/common';
import { GetSystemStatusUseCase } from 'src/contexts/spaceship/application/get-system-status-use-case/get-system-status-use-case';

@Controller('/status')
export class GetSystemStatusController {
  constructor(private readonly getSystemStatus: GetSystemStatusUseCase) {}

  @Get()
  async run() {
    const status = await this.getSystemStatus.run();
    return status;
  }
}
