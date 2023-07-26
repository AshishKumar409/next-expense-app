import { Controller, Delete, Get, Post, Put,Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Data, data } from './data';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllIncomeReports(@Param('type') type:string): Data {
    console.log({type})
    return data;
  }

  @Get('hello')
  getAllIncomeReports2():{} {
    return {};
  }
  @Get(':id')
  getIncomeReportById():{} {
    return {};
  }

  @Post()
  createReport(){
    return "created"
  }

  @Put(':id')
  updateReport(){
    return "updated"
  }

  @Delete(':id')
  deleteReport(){
    return "deleted"
  }
}
