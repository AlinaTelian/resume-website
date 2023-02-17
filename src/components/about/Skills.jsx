

import React from 'react';
import './skills.css';

const frontendSkills = [
    {
        title: 'HTML',
        width: '60%',
        percentage: '60%',
    },

    {
        title: 'CSS',
        width: '70%',
        percentage: '70%',
    },

    {
        title: 'Javascript',
        width: '45%',
        percentage: '45%',
    },

    {
        title: 'React.js',
        width: '30%',
        percentage: '30%',
    },

]

const Skills = () => {
    return (
    <div className="skills_wrapper d-flex gap-5">
        <div className="frontend_skill w-50">
            {frontendSkills.map((item, index) => (
                    <SkillItem 
                    key={index} 
                    title={item.title} 
                    percentage={item.percentage}
                    />

                ))}
        </div>
    </div> 
    ); 
};

const SkillItem = ({ title, percentage })=> {
   return (
   <div className="skill_data mb-4">
        <div className="skill_title d-flex align-items-center justify-content-between">
          <h6>{title}</h6>
            <span>{percentage}</span>
        </div>

        <div className="skill_bar">
            <span 
            className="skill_bar-percentage" 
                style={{ width: `${percentage}` }}></span>
                </div>
                </div>
   );
};

export default Skills;