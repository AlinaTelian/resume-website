

import React from 'react';
import './education.css';


const Education = () => {
    return <table className="table">
        <thead>
            <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Master`s Degree</td>
                <td>Banking Financial Management</td>
                <td>Transilvania Univerity of Brasov</td>
                <td>2009 - 2011</td>
            </tr>

            <tr>
                <td>Bachelor`s Degree</td>
                <td>Finance and Banks</td>
                <td>Transilvania Univerity of Brasov</td>
                <td>2006 - 2009</td>
            </tr>

            <tr>
                <td>High School Diploma</td>
                <td>Mathematics and Computer Science</td>
                <td>Doamna Stanca National College of Fagaras</td>
                <td>2002 - 2006</td>
            </tr>
        </tbody>
    </table>
       
    
}

    export default Education