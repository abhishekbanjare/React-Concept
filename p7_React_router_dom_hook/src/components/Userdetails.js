import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Userdetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

useEffect(() => {
  async function getData(){
    const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
    const respons = await get.json();
    setData(respons[0]);
    console.log(respons);
  }
  getData();

},[])
  return (
    <>
    
      {/* <div>Userdetails</div> */}
      <h4>{data.id}</h4>
      <img src={data.imageUrl} />
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <h4>{data.address}</h4>

    </>
  )
}

export default Userdetails