import React from 'react';
import TimeLine from './src/time-line/TimeLine';
import TimeLineItem from './src/time-line/TimeLineItem';
import './App.css';

function App() {
  const data = [{year:2001, activity:"Test Engineer"},{year:2002, activity:"Test Engineer jest"}];
  const hStyles = {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    marginTop: 30
  }
  return (
    <>
      <TimeLine>
        <TimeLineItem year={2014} activity={"Exchange semester at Technische Universität Ilmenau"}></TimeLineItem>
        <TimeLineItem year={2015} activity={"Internship at Bosch Engineering GmbH - SW/HW development with ANSI C"}></TimeLineItem>
        <TimeLineItem year={2016} activity={"Software developer at Software Colombia SAS"}></TimeLineItem>
        <TimeLineItem year={2014} activity={"Exchange semester at Technische Universität Ilmenau"}></TimeLineItem>
        <TimeLineItem year={2017} activity={"Graduated from National University of Colombia"}></TimeLineItem>
        <TimeLineItem year={2017} activity={"Enrollment at TU Ilmenau - Master in media technology"}></TimeLineItem>
        <TimeLineItem year={2018} activity={"Research assistan at TU Ilmenau department of Usability Engineering"}></TimeLineItem>
        <TimeLineItem year={2019} current={true} activity={"Masterand at Magna Telemotive GmbH - Design, Usability and development of a resource tracking app"}></TimeLineItem>
        <TimeLineItem year={2020} current={true} activity={"Graduation at Technische Universität Ilmenau - M.Sc in Media technology"}></TimeLineItem>
        <TimeLineItem year={2020} current={true} activity={"Software Developer - Reactjs"}></TimeLineItem>
      </TimeLine>
      <h1 style={hStyles} >Timeline with data</h1>
      <TimeLine data={data}></TimeLine>
    </>
  );
}

export default App;
