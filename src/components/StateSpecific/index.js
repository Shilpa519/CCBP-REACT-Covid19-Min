import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {XAxis, YAxis, BarChart, Bar, LineChart, Line, Tooltip} from 'recharts'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794651/States/Group_7362_nmcgpe.png',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877291/Group_7354andhra_dhfqkx.svg',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799500/States/Group_7340_vsdlqz.png',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799316/States/Group_7341_ykmxix.png',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794428/States/Group_7335_b0pl9u.png',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794896/States/Group_7364_pl1zhk.png',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794727/States/Group_7353_cneqgp.png',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802297/States/Group_7357_pyvoak.png',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802160/States/Group_7358_bhlnul.png',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802108/States/Group_7349_vsjuxi.png',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678793870/States/Group_7337_ojdqcl.png',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799354/States/Group_7332_obop6o.png',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794896/States/Group_7364_pl1zhk.png',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799023/States/Group_7328_rlotdc.png',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678798921/States/Group_7342_knibus.png',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802201/States/Group_7339_whajsd.png',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794245/States/Group_7355_v6gkyz.png',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799156/States/Group_7363_rde5lq.png',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799412/States/Group_7359_dby8hu.png',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799459/States/Group_7350_wb3y7e.png',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794180/States/Group_7336_sgosgp.png',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794013/States/Group_7346_jlnzim.png',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794517/States/Group_7344_wekjqc.png',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678792622/States/Group_7347_y0y5so.png',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794323/States/Group_7345_qtmsau.png',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802348/States/Group_7348_pkpezq.png',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799215/States/Group_7360_gk67pd.png',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802438/States/Group_7330_o7wn7a.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802201/States/Group_7339_whajsd.png',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678802398/States/Group_7338_lhlgpb.png',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678793958/States/Group_7356_jjrdbr.png',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799215/States/Group_7360_gk67pd.png',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678798878/States/Group_7352_oscpag.png',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794611/States/Group_7334_yjxnfs.png',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678799554/States/Group_7331_mhgb95.png',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    image_url:
      'https://res.cloudinary.com/dxcolvmcz/image/upload/v1678794827/States/Group_7343_aeshpb.png',
  },
]

const appStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const cardConstants = {
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
}

const trendConstants = {
  cumulative: 'CUMULATIVE',
  daily: 'DAILY',
}

let districtValue = {}

let lineChartValue = {}

class StateSpecific extends Component {
  state = {
    stateDetails: [],
    timeLineDetails: [],
    appStatus1: appStatusConstants.initial,
    appStatus2: appStatusConstants.initial,
    selectValue: 'Select District',
    cardType: cardConstants.confirmed,
    trendType: trendConstants.daily,
  }

  componentDidMount() {
    this.getStateDetails()
    this.getTimelineDetails()
  }

  updateDateFormate = date => {
    const lastDateIndex = date.slice(date.length - 1)
    switch (lastDateIndex) {
      case '1':
        return lastDateIndex.concat('st')
      case '2':
        return lastDateIndex.concat('nd')
      case '3':
        return lastDateIndex.concat('rd')
      default:
        return lastDateIndex.concat('th')
    }
  }

  getStateDetails = async () => {
    this.setState({appStatus1: appStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const stateCodeList = statesList.map(item => item.state_code)
    if (!stateCodeList.includes(stateCode)) {
      const {history} = this.props
      history.replace('/')
    }

    const date = new Date(data[stateCode].meta.last_updated).toLocaleString(
      'en-us',
      {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      },
    )
    const listedDate = []

    const dateList = date.split(' ')
    const dateValue = dateList[2].replace(',', '')
    const newDateValue = this.updateDateFormate(dateValue)

    dateList[2] = newDateValue
    listedDate.push(dateList[0])
    listedDate.push(dateList[1])
    listedDate.push(dateList[2])
    listedDate.push(dateList[3])

    const resultDate = listedDate.join(' ')
    console.log(data)

    if (response.ok) {
      const formattedData = {
        confirmed: data[stateCode].total.confirmed,
        recovered: data[stateCode].total.recovered,
        deceased: data[stateCode].total.deceased,
        population: data[stateCode].meta.population,
        lastUpdated: resultDate,
        tested: data[stateCode].total.tested,
        active:
          data[stateCode].total.confirmed -
          (data[stateCode].total.recovered + data[stateCode].total.deceased),
        id: stateCode,
        name: statesList.find(item => item.state_code === stateCode).state_name,
        imageUrl: statesList.find(item => item.state_code === stateCode)
          .image_url,
        districts: data[stateCode].districts,
      }
      this.setState({
        stateDetails: formattedData,
        appStatus1: appStatusConstants.success,
      })
    }
  }

  descendingList = newDistricts => {
    const newDistrictsList = newDistricts.sort((a, b) => {
      const fa = a.value
      const fb = b.value
      if (fa < fb) {
        return 1
      }
      if (fa > fb) {
        return -1
      }
      return 0
    })
    return newDistrictsList
  }

  getDistrictDetails = () => {
    const {stateDetails, cardType} = this.state
    const {districts} = stateDetails
    const newDistricts = []
    switch (cardType) {
      case cardConstants.confirmed:
        Object.keys(districts).forEach(item =>
          newDistricts.push({
            name: item,
            value:
              districts[item].total.confirmed === undefined
                ? 0
                : districts[item].total.confirmed,
          }),
        )
        return this.descendingList(newDistricts)
      case cardConstants.deceased:
        Object.keys(districts).forEach(item =>
          newDistricts.push({
            name: item,
            value:
              districts[item].total.deceased === undefined
                ? 0
                : districts[item].total.deceased,
          }),
        )
        return this.descendingList(newDistricts)
      case cardConstants.recovered:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.recovered === undefined
                ? 0
                : districts[key].total.recovered,
          }),
        )
        return this.descendingList(newDistricts)
      default:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              (districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed) -
              ((districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased) +
                (districts[key].total.recovered === undefined
                  ? 0
                  : districts[key].total.recovered)),
          }),
        )
        return this.descendingList(newDistricts)
    }
  }

  onCardClick = value => {
    this.setState({cardType: value})
  }

  stateSuccessView = () => {
    const {stateDetails, cardType} = this.state

    let districtDetails = []
    if (stateDetails.length !== 0) {
      districtDetails = this.getDistrictDetails()
    }

    const confirmedCardClassName =
      cardType === cardConstants.confirmed
        ? 'cards-container-list-item card-red'
        : 'cards-container-list-item'

    const activeCardClassName =
      cardType === cardConstants.active
        ? 'cards-container-list-item card-blue'
        : 'cards-container-list-item'

    const recoveredCardClassName =
      cardType === cardConstants.recovered
        ? 'cards-container-list-item card-green'
        : 'cards-container-list-item'
    const deceasedCardClassName =
      cardType === cardConstants.active
        ? 'cards-container-list-item card-gray'
        : 'cards-container-list-item'

    return (
      <div className="state-main-container">
        <div className="name-tested-container">
          <div className="name-updated-container">
            <h1 className="state-name-heading">{stateDetails.name}</h1>
            <p className="updated-details">
              Last update on {stateDetails.lastUpdated}.
            </p>
          </div>
          <div className="name-update-container">
            <p className="tested">Tested</p>
            <p className="tested-container-number">{stateDetails.tested}</p>
          </div>
        </div>
        <ul className="cards-container">
          <li className={confirmedCardClassName}>
            <button
              type="button"
              className="card-button"
              data-testid="stateSpecificConfirmedCasesContainer"
              onClick={() => this.onCardClick(cardConstants.confirmed)}
            >
              <p className="card-para color-red">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dxcolvmcz/image/upload/v1678786954/covid19%20mini%20project/check-mark_1_wynxh1.png"
                className="confirmed-image"
                alt="state specific confirmed cases pic"
              />
              <p className="card-para color-red">{stateDetails.confirmed}</p>
            </button>
          </li>
          <li className={activeCardClassName}>
            <button
              type="button"
              className="card-button"
              data-testid="stateSpecificActiveCasesContainer"
              onClick={() => this.onCardClick(cardConstants.active)}
            >
              <p className="card-para color-blue">Active</p>
              <img
                src="https://res.cloudinary.com/dxcolvmcz/image/upload/v1678792520/covid19%20mini%20project/protection_1_gyjmbc.png"
                className="active-image"
                alt="state specific active cases pic"
              />
              <p className="card-para color-blue">{stateDetails.active}</p>
            </button>
          </li>
          <li className={recoveredCardClassName}>
            <button
              type="button"
              className="card-button"
              data-testid="stateSpecificRecoveredCasesContainer"
              onClick={() => this.onCardClick(cardConstants.recovered)}
            >
              <p className="card-para color-green">Recovered</p>
              <img
                src="https://res.cloudinary.com/dxcolvmcz/image/upload/v1678786927/covid19%20mini%20project/recovered_1_eelwt0.png"
                className="recovered-image"
                alt="state specific recovered cases pic"
              />
              <p className="card-para color-green">{stateDetails.recovered}</p>
            </button>
          </li>
          <li className={deceasedCardClassName}>
            <button
              type="button"
              className="card-button"
              data-testid="stateSpecificDeceasedCasesContainer"
              onClick={() => this.onCardClick(cardConstants.deceased)}
            >
              <p className="card-para color-gray">Deceased</p>
              <img
                src="https://res.cloudinary.com/dxcolvmcz/image/upload/v1678786954/covid19%20mini%20project/breathing_1_dnt1ws.png"
                className="deceased-image"
                alt="state specific deceased cases pic"
              />
              <p className="card-para color-gray">{stateDetails.deceased}</p>
            </button>
          </li>
        </ul>
        <div className="top-districts-container">
          <h1 className="top-districts-heading">Top districts</h1>
          <ul
            className="top-districts-list-container"
            data-testid="topDistrictsUnorderedList"
          >
            {districtDetails.map(item => (
              <li className="top-district-list-item" key={item.name}>
                <p className="top-district-number">{item.value}</p>
                <p className="top-district-name">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getTimelineDetails = async () => {
    this.setState({appStatus2: appStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const requiredData = statesList.map(item => item.state_code)
    if (!requiredData.includes(stateCode)) {
      const {history} = this.props
      history.replace('/')
    }
    const url = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      districtValue = data[`${stateCode}`].districts
      const newData = data[`${stateCode}`].dates
      this.setState({
        appStatus2: appStatusConstants.success,
        timeLineDetails: newData,
      })
    }
  }

  getFormattedDate = key => {
    const date = new Date(key)
    const newDate = date.toLocaleString('en-us', {
      month: 'short',
      year: '2-digit',
    })
    const dateList = newDate.split(' ')
    const dateFormat = []
    dateFormat.push(dateList[1])
    dateFormat.push(dateList[0].toUpperCase())
    const res = dateFormat.join(' ')
    return res
  }

  getBarChartValues = () => {
    const {timeLineDetails, cardType} = this.state
    const newTimelineData = []
    switch (cardType) {
      case cardConstants.confirmed:
        Object.keys(timeLineDetails).forEach(item =>
          newTimelineData.push({
            date: this.getFormattedDate(item),
            number: timeLineDetails[item].total.confirmed,
          }),
        )
        return newTimelineData
      case cardConstants.recovered:
        Object.keys(timeLineDetails).forEach(item =>
          newTimelineData.push({
            date: this.getFormattedDate(item),
            number: timeLineDetails[item].total.recovered,
          }),
        )
        return newTimelineData
      case cardConstants.deceased:
        Object.keys(timeLineDetails).forEach(item =>
          newTimelineData.push({
            date: this.getFormattedDate(item),
            number: timeLineDetails[item].total.deceased,
          }),
        )
        return newTimelineData
      default:
        Object.keys(timeLineDetails).forEach(item =>
          newTimelineData.push({
            date: this.getFormattedDate(item),
            number:
              timeLineDetails[item].total.confirmed -
              (timeLineDetails[item].total.deceased +
                timeLineDetails[item].total.recovered),
          }),
        )
        return newTimelineData
    }
  }

  getLineChartDetails = () => {
    const {timeLineDetails} = this.state

    const confirmedData = []
    const activeData = []
    const recoveredData = []
    const deceasedData = []
    const testedData = []

    Object.keys(timeLineDetails).forEach(item =>
      confirmedData.push({
        date: item,
        number:
          timeLineDetails[item].total.confirmed === undefined
            ? 0
            : timeLineDetails[item].total.confirmed,
      }),
    )

    Object.keys(timeLineDetails).forEach(item =>
      recoveredData.push({
        date: item,
        number:
          timeLineDetails[item].total.recovered === undefined
            ? 0
            : timeLineDetails[item].total.recovered,
      }),
    )

    Object.keys(timeLineDetails).forEach(item =>
      deceasedData.push({
        date: item,
        number:
          timeLineDetails[item].total.deceased === undefined
            ? 0
            : timeLineDetails[item].total.deceased,
      }),
    )

    Object.keys(timeLineDetails).forEach(item =>
      testedData.push({
        date: item,
        number:
          timeLineDetails[item].total.tested === undefined
            ? 0
            : timeLineDetails[item].total.tested,
      }),
    )

    Object.keys(timeLineDetails).forEach(item =>
      confirmedData.push({
        date: item,
        number:
          timeLineDetails[item].total.confirmed === undefined
            ? 0
            : timeLineDetails[item].total.confirmed -
              ((timeLineDetails[item].total.recovered === undefined
                ? 0
                : timeLineDetails[item].total.recovered) +
                (timeLineDetails[item].total.deceased === undefined
                  ? 0
                  : timeLineDetails[item].total.deceased)),
      }),
    )
    lineChartValue = {
      confirmed: confirmedData,
      active: activeData,
      recovered: recoveredData,
      deceased: deceasedData,
      tested: testedData,
    }
  }

  timelineSuccessView = () => {
    const {timeLineDetails, cardType} = this.state

    let newTimeLineDetails = []

    if (timeLineDetails.length !== 0) {
      newTimeLineDetails = this.getBarChartValues()
      newTimeLineDetails = newTimeLineDetails.slice(-10)
    }

    let colorValue = '#9A0E31'
    switch (cardType) {
      case cardConstants.active:
        colorValue = '#0A4FA0'
        break
      case cardConstants.recovered:
        colorValue = '#216837'
        break
      case cardConstants.deceased:
        colorValue = '#474C57'
        break
      default:
        colorValue = '#9A0E31'
        break
    }

    const DataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      if (number > 100000) {
        return `${(number / 100000).toString}.l`
      }
      return number.toString()
    }
    this.getLineChartDetails()

    return (
      <div className="time-line-main-container">
        <div className="graph-charts-large">
          <div className="bar-charts">
            <BarChart
              width={700}
              height={250}
              data={newTimeLineDetails}
              barSize={25}
            >
              <XAxis
                dataKey="date"
                tick={{fill: colorValue, stokeWidth: 1}}
                axisLine={false}
                fontSize={15}
                fontWeight={500}
              />
              <Bar
                dataKey="number"
                fill={colorValue}
                radius={[5, 5, 0, 0]}
                label={{
                  position: 'top',
                  fill: colorValue,
                  fontSize: 10,
                }}
                tickFormatter={DataFormatter}
              />
            </BarChart>
          </div>
          <div className="line-charts">
            <h1 className="daily-spreads">Daily Spread Trends</h1>
            <div className="confirmed-chart">
              <p className="line-chart-confirmed-title">Confirmed</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartValue.confirmed}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={2}
                  dot={{
                    fill: '#FF073A',
                  }}
                />
              </LineChart>
            </div>
            <div className="active-chart">
              <p className="line-chart-active-title">Total Active</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartValue.active}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={2}
                  dot={{
                    fill: '#007BFF',
                  }}
                />
              </LineChart>
            </div>
            <div className="recovered-chart">
              <p className="line-chart-recovered-title">Recovered</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartValue.recovered}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={2}
                  dot={{
                    fill: '#007BFF',
                  }}
                />
              </LineChart>
            </div>
            <div className="deceased-chart">
              <p className="line-chart-deceased-title">Deceased</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartValue.deceased}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={2}
                  dot={{
                    fill: '#007BFF',
                  }}
                />
              </LineChart>
            </div>
            <div className="tested-chart">
              <p className="line-chart-tested-title">Tested</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartValue.tested}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={2}
                  dot={{
                    fill: '#007BFF',
                  }}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    )
  }

  stateLoaderContainer = () => (
    <div data-testid="stateDetailsLoader" className="state-loader-container">
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  timeLineLoaderContainer = () => (
    <div data-testid="timelinesDataLoader" className="state-loader-container">
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  stateContentStatus = () => {
    const {appStatus1} = this.state
    switch (appStatus1) {
      case appStatusConstants.success:
        return this.stateSuccessView()

      default:
        return this.stateLoaderContainer()
    }
  }

  timeLineContentStatus = () => {
    const {appStatus2} = this.state
    switch (appStatus2) {
      case appStatusConstants.success:
        return this.timelineSuccessView()

      default:
        return this.timeLineLoaderContainer()
    }
  }

  render() {
    return (
      <>
        <Header />
        <div
          className="state-specific-main-container"
          data-testid="lineChartsContainer"
        >
          {this.stateContentStatus()}
          {this.timeLineContentStatus()}
        </div>
        <Footer />
      </>
    )
  }
}

export default StateSpecific
