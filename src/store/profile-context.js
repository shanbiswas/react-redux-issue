import { createContext, useState } from "react"

const ProfileContext = createContext({
    user: {},
    login: () => {},
    updateProfile: () => {},
    logout: () => {}
})

export const ProfileContextProvider = (props) => {
    const [userData, setUserData] = useState({})

    const loginHandler = (userInfo) => {
        setUserData(userInfo)
    }

    const updateProfileHandler = (obj) => {
        setUserData((prevUserState) => {
            return {...prevUserState, obj}
        })
    }

    const logoutHandler = () => {
        setUserData({})
    }

    const contextValue = {
        user: userData,
        login: loginHandler,
        updateProfile: updateProfileHandler,
        logout: logoutHandler
    }

    return <ProfileContext.Provider value={contextValue}>
        {props.children}
    </ProfileContext.Provider>
}

export default ProfileContext