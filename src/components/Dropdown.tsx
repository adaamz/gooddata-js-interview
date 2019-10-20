import React, {Component} from "react";

export type DropdownItemValue = string;

export type DropdownItem = {
    text: string;
    value: DropdownItemValue;
};

export type DropdownChangedEventHandler = (value: DropdownItemValue) => void;

type Props = {
    defaultValue?: DropdownItemValue;
    items: DropdownItem[];
    onChange: DropdownChangedEventHandler;
    children?: never;
};

export class Dropdown extends Component<Props>
{
    render()
    {
        return (
            <select onChange={(event) => this.props.onChange(event.target.value)} defaultValue={this.props.defaultValue}>
                {this.props.items.map((item, index) => {
                    return <option key={index} value={item.value}>{item.text}</option>
                })}
            </select>
        );
    }
}
