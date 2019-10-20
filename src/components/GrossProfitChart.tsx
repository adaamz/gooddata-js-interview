import React, {Component} from "react";
import {ColumnChart} from "@gooddata/react-components";

type Props = {
    projectId: string;
    grossProfitMeasureUrl: string;
    dateAttributeInMonthsUrl: string;
    children?: never;
};

export class GrossProfitChart extends Component<Props>
{
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

    // todo move to separate file
    getViewBy()
    {
        return {
            visualizationAttribute: {
                displayForm: {
                    uri: this.props.dateAttributeInMonthsUrl
                },
                localIdentifier: 'a1'
            }
        };
    }

    render() {
        const projectId = this.props.projectId;
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();

        return (
            <div>
                <h1>$ Gross Profit - All months</h1>
                <div className="chart-container">
                    <ColumnChart
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}
