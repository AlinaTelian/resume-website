

import React from 'react'

import './work.css'

const Work = () => {
    return (
    <div className="work_container d-flex align-items-center flex-wrap
    justify-content-between">
    
    <div className="work_item   ">
        <WorkItem 
        year='2020' 
        title='Contabil' 
        text='  Lorem ipsum dolor, sit ame
         consectetur adipisicing elit. Voluptate, consequatur. '
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2020' 
        title='Contabil' 
        text='  Lorem ipsum dolor, sit ame
         consectetur adipisicing elit. Voluptate, consequatur. '
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2020' 
        title='Contabil' 
        text='  Lorem ipsum dolor, sit ame
         consectetur adipisicing elit. Voluptate, consequatur. '
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2020' 
        title='Contabil' 
        text='  Lorem ipsum dolor, sit ame
         consectetur adipisicing elit. Voluptate, consequatur. '
        />
     </div>
 </div>
    );
};

const WorkItem = ({year, title, text}) =>{

   return <div className="single_work">
    <div className="work_year">{year}</div>
    <h6 className="work_title">
        {title} -{" "}
        <span> {text}
        </span>
         </h6>
        </div>

}

    export default Work;
