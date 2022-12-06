import React, {useEffect} from 'react'
import {useState} from "react";
import axios from "axios";

const Contact = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
      async function fetchData() {
        await axios.get('http://localhost:8080/contacts.php')
            .then(function (response) {
              setContacts(response.data);
            });
      }
      fetchData().then();
  }, []);

  const handleChange=(e)=>{
    setData({...data,[e.target.name]: e.target.value})
    // console.log(data)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const sendData = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }
    axios.post('http://localhost:8080/contact.php', sendData)
          .then(function (response) {
            alert(response.data);
          });
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(contacts)], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "contacts.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
      <section className="mb-3">
        <h2 className="h1-responsive font-weight-bold text-center my-4" style={{color:"white"}}>Contact us</h2>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form"  onSubmit={handleSubmit}>
              <div className=" contactus ">

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" onChange={handleChange} required />
                    <label for="name" className="">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="email" id="email" name="email" className="form-control" onChange={handleChange} required/>
                    <label for="email" className="">Your email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" onChange={handleChange} required/>
                    <label for="subject" className="">Subject</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="message" name="message" className="form-control" onChange={handleChange} required/>
                    <label for="subject" className="">Your Message</label>
                  </div>
                </div>
              </div>


              <div className="text-center text-md-left pl-4">
                <button type={'submit'} className='btn btn-success'> SEND </button>
              </div>

            </form>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Youth Avenue, 5th Lane,</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 995 555 555</p>
              </li>
            </ul>
          </div>

        </div>
        <button onClick={downloadTxtFile} style={{color: "white"}}>Download Contacts</button>
      </section>
  )
}

export default Contact