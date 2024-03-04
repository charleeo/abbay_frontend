import React from 'react'
import http from '../services/httpServices'
import useGetData from '../hooks/useGetData'
import { LoanApprovalData } from './LoanApprovalStatus'

export const LoanFiltersField: React.FC<any> = ({handleSearch,selectedValue}) => {
  
   const url = http.setURL + 'config/set/loan/approval/types'
     const { data } = useGetData({
        url,
        method: 'get',
        headers: {}
    })
    return (
      <>
       <LoanApprovalData
         data ={data}
         onChange ={handleSearch}
         value={selectedValue}
       />
      
      </>
    )
}