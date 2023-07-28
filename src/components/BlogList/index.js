// Write your JS code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import BlogItem from '../BlogItem/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const update = data.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      topic: each.topic,
      title: each.title,
    }))
    this.setState({blogData: update, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogData.map(item => <BlogItem key={item.id} details={item} />)
        )}
      </div>
    )
  }
}

export default BlogList
