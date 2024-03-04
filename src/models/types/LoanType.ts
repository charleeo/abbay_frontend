export interface Loan {
    id?: number;
    [key: string]: string | number|any;
  }


export interface LoanTableProps {
  loans: Loan[];
  openModal?: (loan: Loan) => void;
  columns?: string[];
  itemsPerPage?: number;
  handleInputChange?: any
  handleSubmit?: any
  selectedItem?: string
  amount?:number,
  page?:number
  user?:any
}
