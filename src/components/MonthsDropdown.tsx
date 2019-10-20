import React, {Component} from "react";
import {Dropdown, DropdownChangedEventHandler, DropdownItemValue} from "./Dropdown";

type Props = {
    defaultValue?: DropdownItemValue;
    localization: () => AllMonthsLocalization;
    onChange: DropdownChangedEventHandler;
    children?: never;
};

export class MonthsDropdown extends Component<Props>
{
    render() {
        const localization = this.props.localization();

        return (
            <Dropdown
                onChange={this.props.onChange}
                defaultValue={this.props.defaultValue}
                items={localization.map((monthEntry) => {
                return {
                    text: monthEntry.monthName,
                    value: (monthEntry.monthIndex + 1).toString(),
                }
            })}/>
        )
    }
}
