import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/teapot')
export class TeapotController {
  constructor() {}

  @Get()
  async run(@Res() res: Response): Promise<any> {
    res.status(418).send("I'm a teapot");
  }
}
