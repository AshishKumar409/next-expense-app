import { Controller, Delete, Get, Post, Put,Param,Body, HttpCode,ParseIntPipe,ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Data, ReportType, data } from './data';
import { CreateReportDto,ReportResponseDto,UpdateReportDto } from './dtos/report.dto';



@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllIncomeReports(@Param('type',new ParseEnumPipe(ReportType)) type:string):ReportResponseDto[] {

    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    
    return this.appService.getAllIncomeReports(reportType)
  }

  @Get('hello')
  getAllIncomeReports2():{} {
    return {};
  }
  @Get(':id')
  getIncomeReportById(@Param('type', new ParseEnumPipe(ReportType))type:string, @Param('id',ParseUUIDPipe) id:string): ReportResponseDto{

    console.log(id, typeof id)
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // let response = data.report.filter((data)=>data.type===reportType).find((data)=>data.id===id)
    // console.log({response})
    return this.appService.getIncomeReportById(reportType,id)
  }

  @Post()
  createReport( @Body() body: CreateReportDto, @Param('type',new ParseEnumPipe(ReportType)) type:string){

    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // let newReport = {
    //   id:uuid(),
    //   source:source,
    //   amount:amount,
    //   createdAt:new Date(),
    //   updatedAt:new Date(),
    //   type:type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // }

    // data.report.push(newReport)

    // console.log()
    return this.appService.createReport(body,reportType)
  }

  @Put(':id')
  updateReport(@Body() body: UpdateReportDto,@Param('type',new ParseEnumPipe(ReportType)) type:string, @Param('id',ParseUUIDPipe) id:string){
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // let response = data.report.filter((data)=>data.type===reportType).find((data)=>data.id===id)
    


    // if(response){

    //   data.report = data.report.map((data)=>{
    //     if(data.id===id){
    //       if(amount){
    //         data.amount=amount
    //       }
    //       if(source){
    //         data.source=source
    //       }
    //       data.updatedAt = new Date()
    //       return data
    //     }else{
    //       return data
    //     }
    //   })

    //   console.log({data})

    //   return data.report.find((data)=>data.id===id)

      
    // }else{

    //   return {}
    // }
    return this.appService.updateReport(body,reportType,id)
    
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('type',new ParseEnumPipe(ReportType)) type:string , @Param('id',ParseUUIDPipe) id:string){
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // let responseIndex = data.report.findIndex((data)=>data.id===id)
    // console.log({responseIndex})

    // if(responseIndex!=-1){
    //   data.report.splice(responseIndex,1)
    //   return  `Deleted Id: ${id}`
    // }

    return this.appService.deleteReport(reportType,id)
    
  }
}
