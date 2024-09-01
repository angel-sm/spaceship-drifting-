import { Controller, Get, Query } from '@nestjs/common';

@Controller('/phase-change-diagram')
export class PhaseChangeDiagram {
  constructor() {}

  @Get()
  async run(@Query() query: any) {
    console.log('🚀 ~ PhaseChangeDiagram ~ run ~ params:', query);
    return query;
  }
}
