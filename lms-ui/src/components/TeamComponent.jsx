import React from "react";
import "./TeamComponent.css";

const TeamComponent = ({team}) => {
    return <div>
        {/* <div>
            {team.id}
        </div> */}
        <div>
            {team.name}
        </div>
        <div>
            {team.abv}
        </div>
    </div>
}

export default TeamComponent;