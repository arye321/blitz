import { useParam } from "blitz"

const Post = () => {
  const pid = useParam("id")

  return <p>Post: {pid} 😀😁😂</p>
}

export default Post