export const DAILY='daily'
export const WEEKLY='weekly'
export const MONTHLY = 'montly'
export const YEARLY = 'yearly'

export const  isNumeric=(inputString?:string)=> {
    var numericRegex = /^[0-9]+$/;
    return numericRegex.test(inputString??"");
}
  
export const isAlphanumeric=function(inputString:string) {
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(inputString);
  }

  export function calculatDailyOverdue(repaymentStartData:Date,dailyRepaymentAmount:number,totalPaid:number)
  {
      const elapseWeekdays = totalWeekDays(repaymentStartData)
      
      const expectedRepayment: number = dailyRepaymentAmount * elapseWeekdays
      const overDue =  expectedRepayment > totalPaid ?  expectedRepayment - totalPaid : 0
      
      return overDue
  }

  export function calculatWeeklyDue(repaymentStartData:Date,WeeklyRepaymentAmount:number,totalPaid:number)
  {
      const elapseWeeks = weeksPast(repaymentStartData)
      const expectedRepayment: number = WeeklyRepaymentAmount * elapseWeeks
      const overDue =  expectedRepayment > totalPaid ?  expectedRepayment - totalPaid : 0
      return overDue
  }

  export function calculatMonthlyDue(repaymentStartData:Date,monthlyRepaymentAmount:number,totalPaid:number)
  {
      const elapseMonths = monthsPast(repaymentStartData)
      const expectedRepayment: number = monthlyRepaymentAmount * elapseMonths
      const overDue =  expectedRepayment > totalPaid ?  expectedRepayment - totalPaid : 0
      return overDue
  }
  

  function timeDiff(pastDate:Date)
  {
    // Define the current date and the past date
        const currentDate:Date = new Date();
        const date :Date = new Date(pastDate)
        
        const differenceInMilliseconds:any = Math.abs(currentDate.getTime() - date.getTime());

        // Convert milliseconds to days
        const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        return differenceInDays

  }

  function totalWeekDays(pastDate:Date)
  {
    const differenceInDays = timeDiff(pastDate)
    const date: Date = new Date(pastDate)
    let weekdays = 0;
    for (let i = 0; i <= differenceInDays; i++) {
        const tempDate = new Date(pastDate);
        
        tempDate.setDate(date.getDate() + i);
        if (tempDate.getDay() !== 0 && tempDate.getDay() !== 6) {
            weekdays++;
        }
    }
    return weekdays
  }

  function weeksPast(pastDate:Date)
  {
    return Math.floor(timeDiff(pastDate) / 7)
  }

  /**
   * 
   * @param pastDate 
   * @returns number
   */
  function monthsPast(pastDate:Date):number
  {
    const currentDate : Date = new Date()
    const diffYears = currentDate.getFullYear() - pastDate.getFullYear()
    const diffMonths = Math.floor( diffYears * 12 + currentDate.getMonth() - pastDate.getMonth())
    return diffMonths
  }

/**
 * 
 * @param loanType 
 * @param repaymentStartData 
 * @param repaymentRate 
 * @param totalPaid 
 * @returns number
 */
  export function calculatOverdue(
    {
        loanType,
        repaymentStartData,
        repaymentRate,
        totalPaid
        }:OverdueType
    )
  {
    let overDue:any=0
    if(new Date(repaymentStartData).getTime() < new Date().getTime()){

        if(loanType == DAILY){
            overDue =calculatDailyOverdue(repaymentStartData,repaymentRate,totalPaid)
        }else if(loanType == WEEKLY){
            overDue = calculatWeeklyDue(repaymentStartData,repaymentRate,totalPaid)
        }else if(loanType == MONTHLY){
            overDue = calculatMonthlyDue(repaymentStartData,repaymentRate,totalPaid)
        }
        overDue = Number(overDue).toFixed(2)
    }
    
    return overDue
  }

/**
 * Generate years from the current year downwards to a specified year
 * @returns array
 */
  export function generateYears()
  {
    const currentYear = new Date().getFullYear()
    let baseYear = 2023
    let years:number[] =[]

    for(baseYear; baseYear <= currentYear; baseYear++){
      years.push(baseYear)
    }

    return years.reverse()
  }

  export function generateYearsReversed() {
    const currentYear = new Date().getFullYear();
    let baseYear = 2023;
    let years: number[] = [];

    for (baseYear; baseYear <= currentYear; baseYear++) {
      years.push(baseYear);
    }

    let left = 0;
    let right = years.length - 1;

    while (left < right) {
    // Swap elements at left and right indices
    const temp = years[left];
    years[left] = years[right];
    years[right] = temp;
    // Move the indices inward
    left++;
    right--;
  }

  return years;
  }

/**
 * return the sum of the elements of an array
 * @param array 
 */
  export function sumAnArray(array:number[]){
    return array. reduce((acc: number, val: number) => acc + val, 0)
  }


  interface OverdueType{
    loanType?:string
    repaymentStartData:Date
    repaymentRate:number
    totalPaid:number
  }

