import React from 'react'
import Navbar from './components/parts/Navbar/Navbar'
import './App.css'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/parts/Header/Header'
import NoPage from './components/parts/NoPage/NoPage'
import AboutUs from './components/parts/aboutus/AboutUs';
import Faq from './components/parts/FAQ/Faq';
import Team from './components/parts/Team/Team'
import Contact from './components/parts/Contact/Contact';
import Service from './components/parts/Header/Service';
import Categories from './components/parts/Header/Categories';
import Works from './components/parts/aboutus/Works';
import Services from './components/parts/aboutus/Services';
import Login from './components/parts/Registration/Login';
import Register from './components/parts/Registration/Register';
import Footer from './components/parts/Footer/Footer';
import Members from './components/parts/Team/Members';
import Person from './components/parts/Team/Person'
const App = () => {

  return (
    <BrowserRouter >
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Header  />} />
      <Route path='/aboutus' element={<AboutUs  />}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      {Categories.map((value)=> {
        return <Route key={value.id} path={`/services${value.id}`} element= {<Service value={value}/>}/>
      })}
      {Works.map((value)=> {
        return <Route key={value.id} path={`/aboutus/services${value.id}`} element= {<Services value={value}/>}/>
      })}
       {Members.map((value)=> {
        return <Route key={value.id} path={`/team/members${value.id}`} element= {<Person value={value}/>}/>
      })}
      <Route path= "*" element={<NoPage/>}/>
      
     
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App