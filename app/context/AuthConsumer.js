import React from "react"

const AuthConsumer = React.createContext()

const AuthConsumerProvider = ({ children, value }) => {
  return <AuthConsumer.Provider value={value}>{children}</AuthConsumer.Provider>
}

export default AuthConsumerProvider
