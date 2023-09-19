import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            

            

            {
                users.map(user=><User key={user.id} user={user}/> )
            }
        </div>
    );
};

export default Users;