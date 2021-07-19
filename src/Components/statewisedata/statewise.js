import React,{useEffect,useState} from 'react'

const Statewise = () => {
  const [Data,setData]=useState([]);
  const getCovidData=async()=>{
    const res=await fetch("https://api.covid19india.org/data.json");
    const actualData=await res.json();
    setData(actualData.statewise);

  }
    useEffect(() => {
        getCovidData();
    }, []);
   
    return (
        <>
          <div className="container">
              <div className="main-heading mt-5">

            <h2 className="my-3 text-center font-weight-bold">
            <span className="text-danger">India</span> Covid-19 Dashboard</h2>  

              </div>
              <table className="table  ">
  <thead className="thead-dark bg-dark text-light">
    <tr>

      <th>state</th>
      <td>Active</td>
      <td>confirmed</td>
      <td>recovered</td>
      <td>deaths</td>
    </tr>
  </thead>
  <tbody>
    

    {
Data.map((onestate)=>{
return(
    <tr>
  
      <th>{onestate.state}</th>
      <th>{onestate.active}</th>
      <th>{onestate.confirmed}</th>
      <th>{onestate.recovered}</th>
      <th>{onestate.deaths}</th>
    </tr>
)}
)}  
  
  </tbody>
</table> 
          </div>
        </>
    )
}

export default Statewise

