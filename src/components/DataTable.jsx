import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const DataTable = () => {
    const shareData = useSelector(state => state.shares.shareData);
    return (
        <Table striped bordered hover style={{marginTop: 20}}>
            <thead>
                <tr>
                    <th>Scrip</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Avg. Cost</th>
                    <th>Invested Amount</th>
                    <th>% of Portfolio Value</th>
                    <th>Unrealized P&L</th>
                    <th>% Return</th>
                </tr>
            </thead>
            <tbody>
                {shareData.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.scrip}</td>
                        <td>{item.quantity}</td>
                        <td>{item.currencyType}{item.price}</td>
                        <td>{item.currencyType}{item.avgCost}</td>
                        <td>{item.currencyType}{item.investAmount}</td>
                        <td>{item.portfolioValue}</td>
                        <td>{item.currencyType}{item.profitLoose}</td>
                        <td>{item.currencyType}{item.return}</td>
                    </tr>
                    )
                })}
            </tbody>
        </Table >
    );
}

export default DataTable;