import React from 'react';
import DonutChart from 'react-donut-chart';
import { useSelector } from 'react-redux';


const ChartComponent = () => {
    const shareData = useSelector(state => state.shares.shareData);
    const newShareData = [
        {
            type: "Mutual-Funds",
            data: shareData.filter(elemValue => elemValue.type === "Mutual-Funds")
        },
        {
            type: "ETF",
            data: shareData.filter(elemValue => elemValue.type === "ETF")
        }
    ]
    return (
        <div className="donut-chart">
            <DonutChart
                data={[{
                    label: newShareData[0].type,
                    value: 60,
                },
                {
                    label: newShareData[1].type,
                    value: 40,
                }]}
            />
        </div>
    );
}

export default ChartComponent;