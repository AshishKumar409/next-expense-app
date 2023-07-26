

export interface Data{
    report:[
        {
            id:string,
            source:string,
            amount:number,
            createdAt:Date,
            updatedAt:Date,
            type:"income" | "expense"
        }
    ]
}

enum ReportType{
    INCOME="income",
    EXPENSE="expense"
}

export let data: Data = {
    report:[{
        id:"uuid1",
        source:"Salary",
        amount:7200,
        createdAt:new Date(),
        updatedAt:new Date(),
        type:ReportType.EXPENSE 
    }]
}

data.report.push({
    id:"uuid2",
    source:"Salary",
    amount:7500,
    createdAt:new Date(),
    updatedAt:new Date(),
    type:ReportType.EXPENSE
})

