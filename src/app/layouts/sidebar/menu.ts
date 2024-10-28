import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Dashboard',
        isTitle: true
    },
    {
        id: 1,
        label: 'Activités Agricoles',
        link: '/activites-agricoles/liste',
        icon: 'bx-home-circle',
    },
    {
        id: 2,
        label: 'Formateurs',
        link: '/formateurs/liste',
        icon: 'bx-user',
    },
    {
        id: 8,
        label: 'Lieux Cultes',
        link: '/lieux-cultes/liste',
        icon: 'bx-home-circle',
    },
    {
        id: 9,
        label: 'Lieux Touristiques',
        link: '/lieux-touristiques/liste',
        icon: 'bx-home-circle',
    },
    {
        id: 10,
        label: 'Souvenirs',
        link: '/souvenirs/liste',
        icon: 'bx-calendar',
    },
    {
        id: 11,
        label: '******',
        link: '/tutorials/',
        icon: 'bx-chat',
    },
    {
        id: 12,
        label: 'Experts',
        link: '/experts/',
        icon: 'bx-file',

    },
    {
        id: 13,
        label: 'Resources',
        link: '/resources/',
        icon: 'bx-file',

    },
    {
        id: 14,
        label: 'Reservations',
        link: '/reservations/',
        icon: 'bx-file',

    },
    {
        id: 15,
        label: 'Blog',
        link: '/blog/',
        icon: 'bx-file',

    },
    {
        id: 16,
        label: 'Comments',
        link: '/comments/',
        icon: 'bx-file',

    },

//     {
//         id: 14,
//         label: 'Reservations',
//         icon: 'bx-file',
//         link: '/filemanager',
//     },
];
