import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import {v4 as uuid} from 'uuid'

interface ReportedData{amount:number,source:string}

@Injectable()
export class AppService {

  getAllIncomeReports(type:ReportType){
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    
    return data.report.filter((data)=>data.type===reportType)
  }

  getIncomeReportById(type:ReportType,id:string){
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    let response = data.report.filter((data)=>data.type===reportType).find((data)=>data.id===id)
    console.log({response})
    return response?response:{}
  }

  createReport(body:ReportedData,type:ReportType){
    let {source,amount} = body
    let newReport = {
      id:uuid(),
      source:source,
      amount:amount,
      createdAt:new Date(),
      updatedAt:new Date(),
      type:type==="income"?ReportType.INCOME:ReportType.EXPENSE
    }

    data.report.push(newReport)


    return newReport
  }

  updateReport(body:ReportedData,type:ReportType,id:string){
    let {source,amount} = body
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    let response = data.report.filter((data)=>data.type===reportType).find((data)=>data.id===id)
    


    if(response){

      data.report = data.report.map((data)=>{
        if(data.id===id){
          if(amount){
            data.amount=amount
          }
          if(source){
            data.source=source
          }
          data.updatedAt = new Date()
          return data
        }else{
          return data
        }
      })

      console.log({data})

      return data.report.find((data)=>data.id===id)

      
    }else{

      return {}
    }
  }


  deleteReport(type:ReportType,id:string){
    let reportType = type==="income"?ReportType.INCOME:ReportType.EXPENSE
    let responseIndex = data.report.findIndex((data)=>data.id===id)
    console.log({responseIndex})

    if(responseIndex!=-1){
      data.report.splice(responseIndex,1)
      return  `Deleted Id: ${id}`
    }

    return `${id} does not exist`
  }
}
