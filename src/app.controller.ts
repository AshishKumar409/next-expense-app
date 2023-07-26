import { Controller, Delete, Get, Post, Put,Param,Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { Data, ReportType, data } from './data';


@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllIncomeReports(@Param('type') type:ReportType) {

    // let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    
    return this.appService.getAllIncomeReports(type)
  }

  @Get('hello')
  getAllIncomeReports2():{} {
    return {};
  }
  @Get(':id')
  getIncomeReportById(@Param('type' )type:ReportType, @Param('id') id:string):{} {
    // let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // let response = data.report.filter((data)=>data.type===reportType).find((data)=>data.id===id)
    // console.log({response})
    return this.appService.getIncomeReportById(type,id)
  }

  @Post()
  createReport( @Body() body:{amount:number,source:string}, @Param('type') type:ReportType){
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
    return this.appService.createReport(body,type)
  }

  @Put(':id')
  updateReport(@Body() body:{amount:number,source:string},@Param('type') type:ReportType, @Param('id') id:string){
    // let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
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
    return this.appService.updateReport(body,type,id)
    
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('type') type:ReportType , @Param('id') id:string){
    // let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    // let responseIndex = data.report.findIndex((data)=>data.id===id)
    // console.log({responseIndex})

    // if(responseIndex!=-1){
    //   data.report.splice(responseIndex,1)
    //   return  `Deleted Id: ${id}`
    // }

    return this.appService.deleteReport(type,id)
    
  }
}
