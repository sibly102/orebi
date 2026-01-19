import { useParams } from "react-router-dom"
import Container from "../components/Container"
import Title from "../components/Title"
import { useEffect, useState } from "react";
import { serverUrl } from "../../confiq";
import axios from "axios";

const SingleProduct = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(()=>{
      try {
        setLoading(true)
        const fetchData = async() =>{
            const response = await axios.get( serverUrl + "/api/product/single")
            const data = response?.data;
            if(data?.success){
              console.log('data', data)
            }else{
                console.log('error', error)
            }
        };
        fetchData();
      } catch (error) {
        console.log('Product fetching error', error)
      } finally{
        setLoading(false)
      }
    }, []);
  console.log(id)
  return <Container>
    <Title>Single Product Page</Title>
  </Container>
}

export default SingleProduct