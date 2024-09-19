import axios from 'axios'
    const BASE_URL = 'https://api.github.com/search/users?q'

    export const fetchUserData = async(username,location='', minRepos = '') => {
        let query = `=${username}`;

        if (location) {
            query += `+location:${location}`;
        }

        if (minRepos) {
            query += `+repos:>=${minRepos}`;
        }

        try{
            const response = await axios.get(`${BASE_URL}${query}`);
            if(response.data.items.length > 0) {
                console.log(response.data.items);
                return response.data.items;
            } else {
                throw new Error("No users found");
            }
             

        } catch(err) {
        console.log("Error Msg:", err)
        throw err;
    }
    };
  
