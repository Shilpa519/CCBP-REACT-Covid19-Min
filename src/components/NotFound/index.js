import './index.css'

const NotFound = props => {
  const home = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dxcolvmcz/image/upload/v1678880985/covid19%20mini%20project/Group_7485_rh64yg.png"
        className="not-found-image"
        alt="not-found-pic"
      />
      <h1 className="page-not-found">Page Not Found</h1>
      <p className="not-found-para">
        we are sorry, the page you requested could not be found
      </p>

      <button className="home-button" type="button" onClick={home}>
        Home
      </button>
    </div>
  )
}

export default NotFound
