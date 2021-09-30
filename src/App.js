import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
//import {Greet} from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsComp from './components/RefsComp';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';


class App extends Component{
//function App() {
  render(){
  return (
    
    <div className="App">
      <ErrorBoundary>
      <Hero heroName="batman" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="superman" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="joker" />
      </ErrorBoundary>
      
     {/*   <PortalDemo /> */}
      {/* <FRParentInput /> */}
     {/*  <FocusInput /> */}
     {/*  <RefsComp /> */}
    {/*  <ParentComp /> */}
      
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
     {/*  <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/*<Stylesheets primary={true} />
      <Inline /> */}
      {/* <NameList />
      <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      {/* <Counter /> */}
     {/* <Message />*/}
   { /* <Greet />*/ }
   { /*  <Welcome />*/ }
    {/* <Greet name="pawan" heroName="spiderman" >
    <Welcome name="pawan" heroName="spiderman" />
     </Greet> */}
   {/* <Greet name="kajal" heroName="superman" >
     <button>Action</button>
     </Greet>
   <Greet name="suraj" heroName="batman" />
   <Welcome name="pawan" heroName="spiderman" />
   <Welcome name="kajal" heroName="superman" />
   <Welcome name="suraj" heroName="batman" />  */}
    
    </div>
   
  )//;
}
}

export default App;
