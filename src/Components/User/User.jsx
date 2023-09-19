// import 

const User = ({user}) => {

    const {id , name, username, email}=user; 

    const userStyle ={
        border: '2px solid black',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'

    }

   
    return (
        <div style={userStyle}>
            <h2 className="text-2xl ">id: {id}, <span className="text-4xl">name: {name}</span></h2>
            
            <h2 className="font-bold">username: {username},email: {email}</h2>
          
            
            
        </div>
    );
};

// User.proptype ={
//     user.Proptype.object
// }

export default User;