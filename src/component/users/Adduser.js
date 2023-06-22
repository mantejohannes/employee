import {React,useState} from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import PictureInput from "../pages/PictureInput";



const Adduser = () =>{
    


    const navigate = useNavigate();


    
    const [user,setUser] = useState({
        
        name:"",
        surname:"",
        email:"",
        phone:"",
        position:"",
        image:""
        
       
    });





    

    const {name, surname,email,phone,position,image} = user;
    const onInputChange = e =>{
     setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        navigate('/');


    }

    return(
        <div className="container">

          
           <div className='w-75 mx-auto shadow p-5'>
            <h2 className='text-center mb-4'>Add A User</h2>
            <form onSubmit={e => onSubmit(e)}>

           

               <div className='form-group'>
                <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Name'
                name='name' 
                value={name}
                onChange={e => onInputChange(e)}
               />
            </div>
        <br></br>
        <div className='form-group'>

         <input
           type='text' 
           className='form-control form-control-lg'
           placeholder='Enter Your Surname'
           name='surname'
           value={surname}
           onChange={e => onInputChange(e)}
         />

        </div>

        <br></br>
        <div className='form-group'>
          <input
           type='email'
           className='form-control form-control-lg'
           placeholder='Enter Your E-mail address'
           name='email'
           value={email}
           onChange={e => onInputChange(e)}
          />

        </div>

        <br></br>

       <div className='form-group'>
          <input
           type='text'
           className='form-control form-control-lg'
           placeholder='Enter Your Phone Number'
           name='phone'
           value={phone}
           onChange={e => onInputChange(e)}

         />

        </div>

        <br></br>

        <div className='form-group'>
          <input
           type='text'
           className='form-control form-control-lg'
           placeholder='Enter Your Employee Position'
           name='position'
           value={position}
           onChange={e => onInputChange(e)}

         />

        </div>
        
        <br></br>

<div className='form-group'>
  

 

</div>


        
        <br></br>

       
        


        

            <button className="btn btn-primary btn-black m-4 p-2" align="center">Add User</button>

      </form>




      </div>


      </div>

   );


 }
 export default Adduser;