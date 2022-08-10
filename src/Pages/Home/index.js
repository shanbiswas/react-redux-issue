import { useCallback, useContext, useEffect } from "react"
import { useSelector } from "react-redux/es/exports"

import ProfileContext from "../../store/profile-context"

const Home = () => {
    const isAuthenticated = useSelector(state => state.auth)
    const profileContext = useContext(ProfileContext)

    return (
        <>
            <h3>Welcome to the the store</h3>
            {/* <h4>Is logged in: {isLoggedIn}</h4> */}
            <p>User profile</p>
            <p>{profileContext.email}</p>
        </>
    )
}

export default Home