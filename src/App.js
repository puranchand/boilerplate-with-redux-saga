import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import DataTable from './components/DataTable'
import MarketData from './components/MarketData';
import { Row, Col } from 'react-bootstrap';
import ChartComponent from './components/ChartComponent';
import { shareMarketData } from './common/constant';
import { getShareData } from './redux/actions/share';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShareData(shareMarketData))
  }, [dispatch])
  
  return (
    <div className="App">
      <Row className="onMargin onPadding" >
        <Col xs={12} md={6} lg={9} className="onMargin onPadding">
          <MarketData />
        </Col>
        <Col xs={12} md={6} lg={3} className="onMargin onPadding">
          <ChartComponent />
        </Col>
      </Row>
      <DataTable />
    </div>
  );
}

export default App;