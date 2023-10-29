import React, { useState , useEffect} from "react";
import { apiUrl, filterData } from "./data";
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { toast } from "react-toastify";
import Spinner from './Components/Spinner';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  
async function fetchData(){
  setLoading(true);
  try{
    let response = fetch(apiUrl);
    let output = await response.json();
    setCourses(output.data);
    }
  catch(error){
    toast.error("Network Problem");
  }
  setLoading(false);
}  


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar/>
      </div>

      <div>

        <div className="bg-bgDark2">
            <Filter filterData={filterData}/>
        </div>
    
        <div className="w-11/12 max-w-[1200px]    mx-auto   flex flex-wrap justify-center items-center min-h-  [50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses=  {courses}/>)
          }
        </div>    
      </div>
    </div>
  );
};

export default App;