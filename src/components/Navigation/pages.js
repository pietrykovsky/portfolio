import { LuHouse, LuLaptop, LuUser, LuFileText, LuMail } from 'react-icons/lu';

// Single source of truth for the page order, shared by the navbar and the bottom navigation.
// `key` points to messages/*/navigation.json.
export const pages = [
  { path: '/', key: 'home', icon: LuHouse },
  { path: '/about', key: 'about', icon: LuUser },
  { path: '/projects', key: 'projects', icon: LuLaptop },
  { path: '/resume', key: 'resume', icon: LuFileText },
  { path: '/contact', key: 'contact', icon: LuMail },
];
