import Home from '../pages/home'
import BookCalendar from '../pages/book-calendar'

export const Routes = [
    {key: 1, path: '/', component: Home, exact: true},
    {key: 2, path: '/book-calendar', component: BookCalendar}
];