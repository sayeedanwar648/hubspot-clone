



function PrivateRoute({children}) {
  const {authState} = useContext(AuthContext)
  if(!authState.isAuth) {
    return <Navigate to="/login"></Navigate>
  }
  return children
}

export default PrivateRoute;