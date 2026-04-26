import React from "react";

//Components work this way

//Props: we are importing the props passed from App Component and using them here

function TeamMemberCard({id,name,role,empId}){
    console.log(id,name,role,empId)
    return(
        <div className="employee-box">
            <h4>Name: {name}</h4>
            <h4>Role: {role}</h4>
        </div>
    );
}

export default TeamMemberCard;