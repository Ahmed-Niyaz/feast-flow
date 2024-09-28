import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {useGlobalContext} from '../../Context'
import axios from 'axios';
import { useEffect } from 'react';
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    
    const navigate = useNavigate();
    
    const {url} = useGlobalContext();
    
    const verifyPayment = async() => {
      let response = await axios.post(url + '/api/order/verify', { success, orderId });
      if (response.data.success) {
        navigate('/myorders');
      } else {
        navigate('/')
      }
    }
    
  useEffect(() => {
    verifyPayment();
  }, []);
    
  return (
    <div className='verify'>
        <div className='spinner'></div>
    </div>
  )
}

export default Verify