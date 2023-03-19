import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class About extends Component {
  state = {faqs: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const {faq} = data
      this.setState({apiStatus: apiStatusConstants.success, faqs: faq})
    }
  }

  successView = () => {
    const {faqs} = this.state

    return (
      <div className="about-middle-container">
        <h1 className="about-heading">About</h1>
        <p className="last-updated">Last update on March 14th 2023.</p>
        <p className="vaccine-distribution">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul className="ques-list" data-testid="faqsUnorderedList">
          {faqs.map(eachItem => (
            <li className="ques-list-item" key={eachItem.qno}>
              <p className="question">{eachItem.question}</p>
              <p className="answer">{eachItem.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  loaderView = () => (
    <div data-testid="aboutRouteLoader" className="loader-container">
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  renderingView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()

      default:
        return this.loaderView()
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderingView()}
        <Footer />
      </>
    )
  }
}

export default About
