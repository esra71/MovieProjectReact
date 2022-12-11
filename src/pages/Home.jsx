import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Yeni Çıkanlar' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popüler' fetchURL={requests.requestPopular} />
        <Row rowID='3'title='Trend Olanlar' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='En Çok Oy Alanlar' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Korku' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home