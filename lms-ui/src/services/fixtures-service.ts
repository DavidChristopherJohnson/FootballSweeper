import axios from "axios"
import { textChangeRangeIsUnchanged } from "typescript"

export const getTeams = () => {
	return axios.get(`https://app.sportdataapi.com/api/v1/soccer/teams?apikey=d297c2f0-8845-11ed-838c-0b307b57f3c7&country_id=42`)
    .then((res) => {
       // console.log(res);
        if(!res?.data?.data) return [];

        let teams = res.data.data.map((item: { id: string, name: string, short_code: string  }) => ({
            id: item.id,
            name: item.name, 
            abv: item.short_code}))
            
        return teams
    })
};
