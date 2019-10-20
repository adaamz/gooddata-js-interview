import React, {Component} from "react";
import {MonthsDropdown} from "./MonthsDropdown";
import {MonthLocalizationApiMock} from "../api/mock/MonthLocalizationApi";
import {ColumnChart} from "@gooddata/react-components";
import {IColumnChartBucketProps} from "@gooddata/react-components/dist/components/ColumnChart";

type Props = {
    projectId: string;
    grossProfitMeasureUrl: string;
    dateAttributeUrl: string;
    children?: never;
};
type State = {
    filters: IColumnChartBucketProps["filters"];
};
const defaultMonth = 5;

// todo generalize component to use maximum logic from GrossProfitChart
export class FilterableGrossProfitChart extends Component<Props, State>
{
    private year: number = 2016;
    private readonly monthLocalizationApi: IMonthLocalization = new MonthLocalizationApiMock();
    public readonly state: State = this.calculateNewState(defaultMonth.toString());

    // todo move to separate file
    getMonthFilter(dateFrom: Date, dateTo: Date)
    {
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: this.props.dateAttributeUrl
                },
                from: dateFrom.toISOString().substring(0, 10),
                to: dateTo.toISOString().substring(0, 10),
            }
        };
    }

    // todo move to separate file
    getMeasures()
    {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: this.props.grossProfitMeasureUrl
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ];
    }

    calculateNewState(newMonth: string) {
        // todo this should be rewritten and covered by tests
        const firstDay = new Date(this.year, Number(newMonth) - 1, 2);
        const lastDay = new Date(this.year, Number(newMonth), 1);

        return {
            filters: [
                this.getMonthFilter(firstDay, lastDay),
            ]
        };
    }

    renderDropdown()
    {
        return (
            <MonthsDropdown
                defaultValue={defaultMonth.toString()}
                localization={this.monthLocalizationApi.getMonthNames}
                onChange={newMonth => {
                    this.setState(() => {
                        return this.calculateNewState(newMonth);
                    })
                }}
            />
        );
    }

    render()
    {
        const projectId = this.props.projectId;
        const filters = this.state.filters;
        const measures = this.getMeasures();

        return (
            <div>
                <h1>$ Gross Profit in month {this.renderDropdown()} {this.year}</h1>
                <div className="chart-container">
                    <ColumnChart
                        measures={measures}
                        filters={filters}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}
