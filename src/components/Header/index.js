import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {MdOutlineMenuOpen, MdClose} from 'react-icons/md'
import './index.css'

class Header extends Component {
  state = {showMenu: false}

  toggleMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  closeMenu = () => {
    this.setState({showMenu: false})
  }

  render() {
    const {showMenu} = this.state
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name-highlight' : 'link-name'
    const aboutClassName =
      path === '/about' ? 'link-name-highlight' : 'link-name'
    const vaccinationClassName =
      path === '/vaccination' ? 'link-name-highlight' : 'link-name'

    return (
      <>
        <nav className="header-list">
          <Link to="/" className="link-logo">
            <span className="app-name">COVID19</span>
            <span className="app-name blue-text">INDIA</span>
          </Link>
          <ul className="nav-list">
            <Link to="/" className="link-logo">
              <li key="1">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="link-logo">
              <li key="2">
                <button type="button" className={vaccinationClassName}>
                  Vaccination
                </button>
              </li>
            </Link>
            <Link to="/about" className="link-logo">
              <li key="3">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="menu-button"
            onClick={this.toggleMenu}
          >
            <MdOutlineMenuOpen className="menu-image" />
          </button>
        </nav>
        {showMenu ? (
          <ul className="menu-list">
            <Link to="/" className="link-logo">
              <li key="1">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="link-logo">
              <li key="2">
                <button type="button" className={vaccinationClassName}>
                  Vaccination
                </button>
              </li>
            </Link>
            <Link to="/about" className="link-logo">
              <li key="3">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </li>
            </Link>

            <li key="4" className="close-item">
              <button
                type="button"
                className="close-button"
                onClick={this.closeMenu}
              >
                <MdClose className="close-icon" />
              </button>
            </li>
          </ul>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
