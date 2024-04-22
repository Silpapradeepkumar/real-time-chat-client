import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

///////////////////////////////////////////////////////////////////////////////

const RegForm = ()=> {
    const navigate = useNavigate();
    const [name,setname] = useState('');
    const [phone_number,setphonenumber] = useState('');
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [gender,setgender] = useState('');
    const [DOB,setdob] = useState('');
    const [image,setImages] = useState(null);


    const [errors, setErrors] = useState({
        name: '',
        phone_number: '',
        username: '',
        password: '',
        gender: '',
        DOB: '',
        image,
    });

    
//////////////////////////////////////////////////////////////////////////////////////////////////

    const onSubmitAll = async(e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!phone_number.trim()) {
            validationErrors.phone_number = 'Phone Number is required';
        }
        else if(phone_number<10){
            validationErrors.phone_number = 'Phone number should be 10 digits';
        }

        if (!username.trim()) {
            validationErrors.username = 'Username is required';
        }
        else if(username.length<5){
            validationErrors.username = 'Username should contain atleast 5 characters';
        }

        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        }
        else if(password.length<5){
            validationErrors.password = 'Password should contain atleast 5 characters';
        }

        if (!gender) {
            validationErrors.gender = 'Gender is required';
        }

        if (!DOB.trim()) {
            validationErrors.DOB = 'DOB is required';
        }
        if (!image || image.length === 0) {
    validationErrors.images = "Photo required";
}

        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone_number', phone_number);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('gender', gender);
            formData.append('DOB', DOB);
            formData.append('image', image, image.name);
            console.log(formData);
            const response = await axios.post("http://localhost:8000/rtc/register/post", formData);
            console.log(response.data);
            alert('data submitted successfully')
            navigate("/LoginForm");

        } catch (error) {
            console.log(error.message);
        }

    }


    /////////////////////////////////////////////////////////////////////////////////////

    const namefunction = (e)=> {
        setname(e.target.value);
        console.log(e.target.value);
    };
    const phonenumberfunction = (e)=> {
        setphonenumber(e.target.value);
        console.log(e.target.value);
    };
    const usernamefunction = (e)=> {
        setusername(e.target.value);
        console.log(e.target.value);
    };
    const passwordfunction = (e)=> {
        setpassword(e.target.value);
        console.log(e.target.value);
    };
    const genderfunction = (e) => {
        setgender(e.target.id);
        console.log(e.target.id);
    };
    const dobfunction = (e)=> {
        setdob(e.target.value);
        console.log(e.target.value);
    };
    const imageFunction = (e) =>{
        setImages(e.target.files[0]);
        console.log(e.target.files[0]);
    }

///////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <div>
      <main>
        <section class="relative h-screen flex items-center ">
            <div class="absolute inset-0 bg-gradient-to-br from-transparent bg-slate-300">

            </div>
            <div class="container mx-auto px-4 relative ">
            <div class="max-w-[400px] m-auto p-6 max-h-[400px] overflow-y-auto bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <h5 class="my-6 text-xl font-semibold text-black dark:text-white">sign up</h5>

            <form action='' id = 'myform' onSubmit={onSubmitAll}>
                <div class="mb-2">
                    <label for="Register Name"  class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">Name</label>
                    <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='text' name="RegisterName" id="name" onChange={namefunction}></input>
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                 <div class="mb-2">
                    <label for="Phone Number" class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">Phone Number</label>
                    <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='number' name="PhoneNumber" id="phone_number" onChange={phonenumberfunction}></input>
                    {errors.phone_number && <p className="text-red-500">{errors.phone_number}</p>}
                </div> 
                <div class="mb-2">
                    <label for="User Name" class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">Username</label>
                    <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='text' name="UserName" id="username" onChange={usernamefunction}></input></div>
                    {errors.username && <p className="text-red-500">{errors.username}</p>}
                <div class="mb-2">
                    <label for="Password " class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">Password</label>
                    <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='password' name="Password" id="password" onChange={passwordfunction}></input>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div class="mb-2">
                    <label for="image" class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">Photo</label>
                    <input class="w-full mt-2 p-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='file' multiple accept="image/*" name='image' id="image"  onChange={imageFunction} ></input>
                    {errors.images && <p className="text-red-500">{errors.images}</p>}
                </div>
                <div class="mb-2 flex">
                    <label for="Gender " class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">Gender</label>
                    <input class="w-auto mt-2 ml-2 mr-2 py-2 px-3 h-3 ..." type='radio' name="Gender" id="Male" value="Male"
    onChange={genderfunction}></input>
                    <label for="Male">Male</label>
                    
                    <input class="w-auto mt-2 mr-2 ml-6 py-2 px-3 h-3 ..." type='radio' name="Gender" id="Female" value="Female"
    onChange={genderfunction}></input>
                    <label for="Female">Female</label>
                </div>
                {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                <div class="mb-2">
                    <label for="DOB" class="text-sm font-semibold text-black dark:text-white dark:bg-slate-900">DOB</label>
                    <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='date' name="DOB" id="DOB" onChange={dobfunction}></input>
                    {errors.DOB && <p className="text-red-500">{errors.DOB}</p>}                
                </div>
                <div class="flex items-center w-full mb-2">
                    <input type='checkbox' name='' id='' class=" rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"></input>
                    <label for="AcceptT&C" class="text-slate-400">I Accept
                    <a href='' class="text-indigo-600"> Terms And Conditions</a></label>
                </div>
                <div class="mb-2">
                    <input type='submit' 
                    class='py-2 px-5 inline-block border align-middle duration-500 text-sm text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full'></input>
                </div>
                <div  class="text-center">
                    <span class="text-slate-400 me-2">Already have an account?</span>
                    <a href='' class="text-black dark:text-white font-bold inline-block"><Link to="/LoginForm">Sign in</Link></a>
                </div>
            </form>
            </div>
            </div>

        </section>
      </main>
    </div>
  )
}

export default RegForm



 
  