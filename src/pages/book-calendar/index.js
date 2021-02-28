import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {getAllocatedSlots} from '../../api/mentors'



function BookCalendar(){
    const [event, setEvent] = React.useState([]);
    const localizer = momentLocalizer(moment);

    React.useEffect(() => {

        getAllocatedSlots(1)
            .then((res) => {

                var arr = [];
                res.data.calendar.map((e) => {
                    let date = moment(e.date_time).utc(0);
                    let oneHourLater = moment(e.date_time).utc(0).add(1, 'hours');

                    arr.push({
                        title: 'Alocated Time',
                        start: new Date(date),
                        end: new Date(oneHourLater),
                        allDay: false
                    })
                })

                setEvent(arr);

            })

    }, [])

    return(
        <div>
            <Calendar
                localizer={localizer}
                events={event}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default BookCalendar