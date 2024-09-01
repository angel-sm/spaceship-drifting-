import { Controller, Get } from '@nestjs/common';
import { RepairBayUseCase } from '../../../../application/repair-bay-use-case/repair-bay-use-case';

@Controller('/repair-bay')
export class RepairBayController {
  constructor(private readonly repairBayUseCase: RepairBayUseCase) {}

  @Get()
  async run(): Promise<any> {
    const message = await this.repairBayUseCase.run();
    return message;
  }
}
