import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterDateRange } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    render() {
        const { filters, filterDateRange } = this.props

        console.log(filters);
        
        const range = {
            from: filters.dateRange.from,
            to: filters.dateRange.to
        }
        const selectedRange = range.from && range.to && `${range.from.toDateString()} - ${range.to.toDateString()}`
        
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, range) }
                    onDayClick={ this.handleDayClick(range) }
                />
                {selectedRange}
            </div>
        )
    }

    handleDayClick = range => day => {
        this.props.filterDateRange({dateRange: DateUtils.addDayToRange(day, range)})
    }
}

export default connect(
    ({filters}) => ({filters}),
    { filterDateRange }
)(DateRange)