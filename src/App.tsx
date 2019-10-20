// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, {Component} from 'react';
import '@gooddata/react-components/styles/css/main.css';
import {GrossProfitChart} from "./components/GrossProfitChart";
import {FilterableGrossProfitChart} from "./components/FilterableGrossProfitChart";

// todo read from config
const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';
const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';

export default class App extends Component
{
    render()
    {
        return (
            <div className="App">
                <FilterableGrossProfitChart
                    projectId={projectId}
                    dateAttributeUrl={dateAttribute}
                    grossProfitMeasureUrl={grossProfitMeasure}
                />

                <GrossProfitChart
                    projectId={projectId}
                    dateAttributeInMonthsUrl={dateAttributeInMonths}
                    grossProfitMeasureUrl={grossProfitMeasure}
                />
            </div>
        );
    }
}
