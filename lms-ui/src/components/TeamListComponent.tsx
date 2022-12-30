import React from "react";
import TeamComponent from "./TeamComponent";
import './TeamListComponent.css'

const TeamListComponent = (props: any) => {
    const {teamList} = props;
    console.log(teamList);
    return <ul>
        {teamList.map((item: any) => <li key={item.id}><TeamComponent key={item.id} team={item} /></li> )}
    </ul>
}

export default TeamListComponent