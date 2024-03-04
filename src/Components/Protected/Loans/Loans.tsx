import {  FormEvent, useEffect, useState } from 'react'
import auth from '../../../services/authService';
import { Navigate } from 'react-router';

import { ScreenLoader } from '../../../utils/screenloader';
import { Pagination } from '../../../utils/Pagination';
import LoanItems from '../../../Pages/Loans/LoanItems';
import { toast } from 'react-toastify';
import http from '../../../services/httpServices';
import axios from 'axios';

export const LoanRecords = () => {
    
    const defaultLimit = 10
    const [limit, setLimit] = useState<number>(defaultLimit);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<any>([]);

     const [formData, setFormData] = useState<any>({
        status: '',
        to_amount: 0,
        from_amount: 0,
        limit:limit
    });
 
    const handleSearch = (e:FormEvent) => {
        e.preventDefault()
        getDta({limit:limit})
    }

     const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement|HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setLimit(formData.limit)
    };



    const tableColumns = data?.length > 0 ? Object.keys(data[0]) : [];
    const items = data?.items//the items lists
    const meta = data?.meta//the meta data about the request
   
    const getDta = async ({ page = 1 }: any) => {
            let url = `${http.setURL}loan-data/user/loans`;
        try {       

            setIsLoading(true)
            const responses = await axios.get(url, {
                ...http.setJwtHeaders(),
                params:{
                    page:page,
                    per_page:formData.limit,
                    status:formData.status,
                    from_amount:formData.from_amount,
                    to_amount:formData.to_amount,
                }
            });
            const responseData = responses.data
            setData(responseData.data)
            setIsLoading(false)
            setError('')
        } catch (ex: any) {
            if (ex.response !== undefined || (ex?.response?.status < 500 && ex.response.status > 399)) {
                let errorMsg = ex?.response?.data?.message
                if (Array.isArray(errorMsg)) { errorMsg = errorMsg[0] }
                setError(errorMsg)
            }
            else {
                setError('There was an unexpected error. Please try again')
            }
            toast.error(error, { autoClose: 3000 })
            setIsLoading(false)
        }
    }

    const handleClick = (page: number) => {
        getDta({ page, limit })
    }

    
    useEffect(() => {
        getDta({ limit })
    }, []);

   const user = auth.getCurrentUser()
    if (!user) { return <Navigate to='/' /> }
    return (
        <>

            <ScreenLoader status={isLoading} />
            <LoanItems
                columns={tableColumns}
                loans={items}
                handleInputChange={handleInputChange}
                handleSubmit={handleSearch}
                user={user}
            />

            {/* Pagination */}
            {data?.items?.length > 0 &&
                <Pagination
                    pageSize={meta.itemsPerPage}
                    currentPage={meta.currentPage}
                    totalCount={meta.totalItems}
                    onPageChange={handleClick}
                    totalItems={meta.itemCount}
                />
            }
        </>
       
    )
}

export default LoanRecords;
