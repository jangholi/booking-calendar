import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {getAllocatedSlots} from '../../api/mentors'



function BookCalendar(){
    const [event, setEvent] = React.useState([]);
    const [slots, setSlots] = React.useState(null);
    const [view, setView] = React.useState('month');
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


    let isNotAllowedTime = () => {
        var todayAllocatedDate =  event.filter((val) => {
            return moment(val.start).isSame(slots.start, 'day');
        })

        return todayAllocatedDate.map(function(e){
            if((e.start === slots.start && slots.end === e.end)
                || (slots.start < e.start && slots.end > e.start && slots.end < e.end)
                || (slots.start < e.start && slots.end > e.end)
                || (slots.start > e.start && slots.start < e.end && slots.end > e.end)
            ){
                return true
            }
        }).includes(true)
    }

    let selectOnAvailableTime = (e) => {

        if(view !== 'day') return
        if(isNotAllowedTime()) return

        let reason = window.prompt('What is your reason for the call?')
        if(reason){
            alert(`The event with reason ${reason} on ${e.start} has been booked.`)
            let payload = {
                startDate: e.start,
                reason
            }
            // call API for save in database and send this payload to API
        }
    }

    let selectOnAllocatedTime = () => {
        alert('This is allocated slot. Please select another slot.')
    }

    return(

        <div>
            <Calendar
                localizer={localizer}
                events={event}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable = {true}
                onSelectSlot = {selectOnAvailableTime}
                onSelectEvent = {selectOnAllocatedTime}
                views={['month', 'day', 'agenda']}
                onSelecting = {(e) => setSlots(e)}
                onView = {(e) => setView(e)}
            />
        </div>
    )
}

export default BookCalendar