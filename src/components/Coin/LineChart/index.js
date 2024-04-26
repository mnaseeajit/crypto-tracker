import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import { ConvetNumber } from "../../../Functions/ConvertNumber";

const LineChart = ({chartData, priceType , multiAxis}) => {

    const options = {
        plugins : {
            legend : {
                display : multiAxis ? true : false,
            },
        },
        responsive : true ,
        interaction : {
            node : "index",
            intersect : false,
        },
        scales : {
            crypto1 : {
                type : "linear",
                display : true,
                position : "left",
                ticks : {
                    callback : function(value , index , ticks){
                       if(priceType == "prices") return "$" + value.toLocaleString();
                       else {
                              return "$" + ConvetNumber(value);
                       }
                    },
                },
            },
            crypto2 : {
                type : "linear",
                display : true,
                position : "right",
                ticks : {
                    callback : function(value , index , ticks){
                       if(priceType == "prices") return "$" + value.toLocaleString();
                       else {
                              return "$" + ConvetNumber(value);
                       }
                    },
                },
            },
        },
    };

    return (
        <Line data={chartData} options={options}/>
    )
}

export default LineChart;