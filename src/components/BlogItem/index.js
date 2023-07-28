// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = details
  return (
    <Link to={`/blogs/${id}`}>
      <div className="container">
        <div className="img">
          <img className="image" src={imageUrl} alt="react" />
        </div>
        <div className="detailsContainer">
          <h1 className="title">{topic}</h1>
          <h1 className="topic">{title}</h1>
          <div className="avatarContainer">
            <img className="avatarImage" src={avatarUrl} alt="author-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
