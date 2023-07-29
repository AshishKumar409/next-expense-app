

export interface Data {
    report: {
            id: string,
            source: string,
            amount: number,
            createdAt: Date,
            updatedAt: Date,
            type: ReportType
        }[]
    
}

export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export let data: Data = {
    report: [{
        id: "uuid1",
        source: "Salary",
        amount: 7200,
        createdAt: new Date(),
        updatedAt: new Date(),
        type: ReportType.EXPENSE
    },{
        id: "uuid2",
        source: "Salary",
        amount: 9500,
        createdAt: new Date(),
        updatedAt: new Date(),
        type: ReportType.INCOME
    },
    {
        id: "uuid3",
        source: "Salary",
        amount: 7000,
        createdAt: new Date(),
        updatedAt: new Date(),
        type: ReportType.EXPENSE
    }]
}



