import React from 'react';
import { ListGroup, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const now = 60;
const MarketData = () => {
    const shareData = useSelector(state => state.shares.shareData);

    return (
        <div className="market-continer">
            {shareData && shareData.map((item, index) => {
                return (
                    <ListGroup horizontal={'lg'} className="my-2 market-data" key={index}>
                        <ListGroup.Item className="first-div">
                            <Row>
                                <Col className="" xs={6} md={4}>
                                    <div>{item.type === "ETF" ? "EFA" : "ITOT"}</div>
                                    <div>
                                        $<span className="share-prive">{item.type === "ETF" ? (68.9) : (283.3)}</span>
                                    </div>
                                </Col>
                                <Col className="">
                                    <div className="i-share">{"iShares"}</div>
                                    <div className="bold-label">{item.type === "ETF" ? "MSCI EAFE Ind.." : "S&P 500 Index"}</div>
                                    <div className="">{item.type === "ETF" ? "Develop Equity" : "US Equity"}</div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="second-div">
                            <Row>
                                <Col>{"Quantity"}</Col>
                                <Col className="bold-txt">{item.quantity}</Col>
                            </Row>
                            <Row>
                                <Col>{"Avg. Const"}</Col>
                                <Col className="bold-txt">{item.currencyType}{item.avgCost}</Col>
                            </Row>
                            <Row>
                                <Col>{"Invested Amt"}</Col>
                                <Col className="bold-txt">{item.currencyType}{item.investAmount}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="third-div">
                            <Row>
                                <Col className="bold-txt">{"Market value"}</Col>
                                <Col className="bold-txt">{item.currencyType}{item.price * item.quantity}</Col>
                            </Row>
                            <Row>
                                <Col>{"% of portfolio value"}</Col>
                                <Col className="bold-txt">{"40%"}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProgressBar variant="success" now={now} />
                                </Col>
                            </Row>

                        </ListGroup.Item>
                        <ListGroup.Item className="forth-div">
                            <Row>
                                <Col className="bold-txt">{"Unrealized P/L"}</Col>
                                <Col className="bold-txt">{"$97979.87"}</Col>
                            </Row>
                            <Row>
                                <Col>{"% Return"}</Col>
                                <Col className="bold-txt">{"40%"}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProgressBar variant="success" now={now} />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="fifth-div">
                            <Row style={{ maxWidth: '100px' }}>
                                <Col xs={6} md={6} lg={12} className="button-div">
                                    <Button className="buy-sell-button" variant="outline-warning">BUY</Button>
                                </Col>
                                <Col xs={6} md={6} lg={12} className="button-div">
                                    <Button className="buy-sell-button" variant="outline-warning">SELL</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })}

        </div>
    );
}

export default MarketData;