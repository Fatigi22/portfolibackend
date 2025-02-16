import {  useState } from "react";
import axios from "axios"
import SectionTitle from "./SectionTitle";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    message:''
  });
  function Datachange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const Data =async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(' http://localhost:300/fatihi ', formData);

          if (response.status === 201) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.log("data is insertion ")
    }
 
  };

  
  

  return (
    <div className='contact container mx-auto mt-40' id='contact'>
      <SectionTitle title={"Let's Talk"} />

      <form
        onSubmit={Data}
        className='mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20' 
      >
        <div className='form-control overflow-hidden'>
    <input
            type='text'
            name='name'
            placeholder='Write your name'
            value={formData.name}
            onChange={Datachange}
            className='fullname bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden'>
          <input
            type='email'
            name='email'
            placeholder='Write your email'
            required
            value={formData.email}
            onChange={Datachange}
            className='email bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div>
        <input
            type='Number'
            name='phone'
            placeholder='donner phone'
            required
            value={formData.phone}
            onChange={Datachange}
            className='email bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden'>
          <textarea
            name='message'
            placeholder='Write your message'
            required
            rows='1'
            cols='30'
            value={formData.message}
            onChange={Datachange}
            className='massage bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full resize-none focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden'>
          <input
            type='submit'
            value='Send message'
            className='submit uppercase bg-transparent border border-white/20 py-16 px-28 rounded-full outline-none tracking-widest w-full hover:bg-cyan-400/20 hover:border-cyan-400/20  duration-500'
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
