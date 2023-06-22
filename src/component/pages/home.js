import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import SearchForm from "../users/SearchForm";


const Home = ( ) =>{

    const [users,setUsers] = useState ([]);

    useEffect(()=>{
        loadUser();
    },[]);


    const loadUser = async () =>{
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    };


    //
    const searchEmployeeId = async (searchId) => {

      const result = await axios.get(`http://localhost:3001/users/${searchId}`);
      setUsers(result.data);


    }

      const deleteUser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUser();

      }








    return(
        <div className="container">
          <br></br>
            <center><h1>Employee Application</h1></center>
            {/*<Link className="btn btn-outline-dark w-25" to="/user/add">Add Users</Link>
            */}
            <br></br>
              <div className="search-id" align="right">   
             <h3>Search Employee</h3>
            <SearchForm onSearch={searchEmployeeId} />
             </div>


            <br></br>
         
         
            <br></br>
            <br></br>

<table class="table">
 
  <thead>
    <tr className="bg-dark text-white">
     
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Emails</th>
      <th scope="col">Phone</th>
      <th scope="col">Position</th>
      <th scope="col">Image</th>
      <th scope="col">Take Action</th>
    </tr>
  </thead>
  <tbody>

  {users.map((user,index)=>(
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.position}</td>
                <td>{user.image}</td>
              
                
               



                <td>
                <Link className='btn btn-primary m-2' to={`/user/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
                <Link className="btn btn-outline-primary m-2" to={`/user/edit/${user.id}`}>Edit</Link>
                <Link className="btn btn-danger m-2" onClick={() => {deleteUser(user.id)}}>Delete</Link>
                </td>
            </tr>
            
        ))}

  </tbody>
</table>

        </div>

    );
}


export default Home;