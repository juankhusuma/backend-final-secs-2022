import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard("jwt"))
  @Get()
  get(@Req() req: Request) {
    return this.appService.get(req)
  }

  @UseGuards(AuthGuard("jwt"))
  @Patch("/change-password")
  update(
    @Req() req: Request,
    @Body() body: string
  ) {
    return this.appService.changePassword(req, body)
  }

}
