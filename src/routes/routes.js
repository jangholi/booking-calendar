import LeaderBoard from '../pages/home'

export const Routes = [
    // TODO: we should create home page and then change the component of "/" to home
    {key: 1, path: '/', component: LeaderBoard, exact: true},
    {key: 2, path: '/leader-board', component: LeaderBoard}
];