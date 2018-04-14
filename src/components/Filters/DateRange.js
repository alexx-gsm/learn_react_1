import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterDateRange } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    render() {
        const { from, to } = this.props.range
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

    handleDayClick = day => {
        const { range, filterDateRange } = this.props
        filterDateRange(DateUtils.addDayToRange(day, range))
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), { filterDateRange }
)(DateRange)