export class MonthLocalizationApiMock implements IMonthLocalization
{
    getMonthNames() {
        return [
            {monthIndex: 0, monthName: 'January'},
            {monthIndex: 1, monthName: 'February'},
            {monthIndex: 2, monthName: 'March'},
            {monthIndex: 3, monthName: 'April'},
            {monthIndex: 4, monthName: 'May'},
            {monthIndex: 5, monthName: 'Jun'},
            {monthIndex: 6, monthName: 'July'},
            {monthIndex: 7, monthName: 'August'},
            {monthIndex: 8, monthName: 'September'},
            {monthIndex: 9, monthName: 'October'},
            {monthIndex: 10, monthName: 'November'},
            {monthIndex: 11, monthName: 'December'},
        ]
    }
}
