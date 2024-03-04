import { useEffect, useState } from 'react'
import axios from 'axios'
import http from '../services/httpServices'

export default function useFetch( pageNumber:number,endpoint:string) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [kyc, setKyc] = useState([])
    const [hasMore, setHasMore] = useState<any>(false)
    

  useEffect(() => {
    setKyc([])
  }, [endpoint])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel:any
    axios({
      method: 'GET',
      url: `${http.setURL}/${endpoint}`,
      headers: http.setJwtHeaders().headers,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setKyc((prevData):any => {
        return [...new Set([...prevData, ...res.data.data.items.map((data:any) => data)])]
      })
      setHasMore(res.data.docs.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [endpoint, pageNumber])

  return { loading, error, kyc, hasMore }
}