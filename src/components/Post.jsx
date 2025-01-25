import { Navigate, useNavigate } from "react-router-dom"

function Post() {
  const status = 200

  // TO USE NAVIGATION WE MUST PASS useNavigation() FIRST TO THE VARIABLE
  const navigate = useNavigate()

const onClick= () =>{
  console.log('hello')
  // TO NAVIGATE/REDIRECT TO ANODER LINK
  navigate('/about')
}
  if(status ===400) {
      return <Navigate to='/notfound'     />
  }
  return (
    <div>
        <h1>Post </h1>
        <button onClick={onClick}>Click</button>

    </div>
  )
}

export default Post
