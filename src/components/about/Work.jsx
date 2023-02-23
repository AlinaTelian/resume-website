

import React from 'react'

import './work.css'

const Work = () => {
    return (
    <div className="work_container d-flex align-items-center flex-wrap
    justify-content-between">
    
    <div className="work_item   ">
        <WorkItem 
        year='2019 - present' 
        title='Club Sportiv Municipal Făgăraș - Budget Accountant' 
        text= "Drawing up the trial balance, the balance sheet, the annual balance sheet, the company's inventory,
        Registration of bank account changes in the payroll program and monthly verification of the existence of bank accounts for your employees,
        Ensuring the implementation of internal/managerial control and preventive financial control,
        Organizing, recording and reporting budgetary and legal commitments,
        Preserving the confidentiality of the data and information to which I have access through the exercise of my duties."
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2016 - 2019' 
        title='SC Banca Transilvania SA - Account Administrator' 
        text="Ensuring the interface with customers by taking over and handing over documents entering the banking circuit and providing assistance in the sale of banking products and services,
        I carry out cash collection and payment operations,
        Promoting, selling the bank's products and reaching the target,
        Collaboration with the other departments of the branch for the sale of the most complex product packages."
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2011 - 2016' 
        title='SC Bancpost SA - Sales officer for guaranteed and unguaranteed bank loans' 
        text='Managing the sales activity of guaranteed/unguaranteed credits with retail customers within the unit or through external sales channels,
        Performing direct sales, individually or in mixed teams,
        Fulfillment of mortgage sales indicators at the branch level,
        Verification of documents presented by clients in order to draw up the credit file.'
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2010 - 2011' 
        title='BRD Groupe Société Générale - Universal Counter Operator' 
        text='Assuring, promoting and selling products, simple services to natural person customers,
        Carrying out current operations in lei and foreign currency, according to the requests made by the clients, natural and legal persons,
        Receiving and verifying documents related to operations ordered by customers. '
        />
     </div>

     <div className="work_item   ">
        <WorkItem 
        year='2007 - 2009' 
        title='Vodafone Romania SA - Telebanker -Business Departement' 
        text="Updating the company's customer database by entering information on new customers and expanding the customer portfolio."
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
