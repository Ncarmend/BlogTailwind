import React,{ useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {  TERipple } from "tw-elements-react";
//import { useForm } from "react-hook-form";

const Inscription = () => {
  const url = "";
  const[ formData, setFormData] = useState(
    {
      name : '',
      email: '',
      password: '',
    }
  ) ;
  function handle(e){
    const newData= {...formData}
    //newData=[e.target.id.value]
    setFormData(newData)
    console.log(newData)
  }

  const [register, setRegister] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData, [name]: value,
    });

  };
  const submit =(e) =>{
    e.preventDefault();
    const response = axios.post('https://reqres.in/api/users', formData);
    axios.post(url, 
      { name: setFormData.username,
        email: setFormData.email,
        password : setFormData.password
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log(response)

  }
 
  useEffect(()=> {
    //axios.delete('https://reqres.in/api/users'
    axios.post('https://reqres.in/api/users', {
     

    })
    //.then(res => setFormData(res.data.data))
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, [])
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setRegister(true);
    }, 1500);
    
    try {
      const response = await axios.post('https://reqres.in/api/users', formData);

      if (response.status === 200) {
        // Request was successful
        // You can handle the response here
        (response(response.setFormData));
        console.log(response.setFormData);

        console.log('Form data posted successfully');
      } else {
        // Handle error response
        console.error('Form data post failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  }

  return (
    <>
    <section className="h-screen">
      <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample"
                />
                <h2 className="text-sky-500 dark:text-sky-700 ">Sign Up</h2>
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                  <h2>Sign Up</h2>
                  {register ? (


<div className="text-center lg:text-left  mt-9">
              <TERipple rippleColor="light">
              <p>{formData.username} </p>
                <p>Thank you for registering!</p>
                  <p>Vous pouvez vous connecter avec votre Email et mot de passe</p>
                  <button { ...handleInputChange}
                    type="button"
                    className="inline-block rounded bg-lime-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  > 
                  <Link to="/Compte">
                    Connexion
                    </Link>
                  </button>
                  </TERipple>
                 
              </div>
                    

                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label></label>
                        <input
                        onChange={handleInputChange}
                          id="name"
                          value={formData.username}
                          type="text"
                          name="username"
                          //name= "first_name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-green dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="name " required 
                          //value={formData.username}
                          //onChange={submit}
                        />
                      </div>
                      <div className="">
                        <label>Email:</label>
                        <input
                          type="email"
                          name="email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-green dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email " required 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                            <label>Password:</label>
                            <input
                              type="password"
                              name="password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-green dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password " required 
                              value={formData.password}
                              onChange={handleInputChange}
                            />
                          </div>
                          <button type="submit" className=" mt-3    inline-block rounded bg-lime-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"  >Register</button>
                        </form>
                
                )}
                </div>
              </div>
      </div>
      <div>
        <h2>données API</h2>
        {/*
          setFormData.map((d, i) =>{
          return <p key={i}>{d.email}</p>
        })
      */}
      </div>
    </section>
    </>
  );
}
 export default Inscription;