import React from 'react'

const UserContext = React.createContext()

export default UserContext;
    // This is a Provider <UserContext><UserContext/> provider means data provide karega
    // <UserContext>   
    //     <Login />
    //     <Card>
    //         <Data />
    //     </Card>
    // </UserContext>
