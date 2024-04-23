import "./Media.scss"
import InstagramWidget from "../../components/InstagramWidget/InstagramWidget"
import Videos from "../../components/Videos/Videos"

const Media = () => {
  return (
    <div className="media">
      <h1>Media</h1>
      <InstagramWidget />
      <Videos />
    </div>
  )
}

export default Media