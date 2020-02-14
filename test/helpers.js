const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Mark Hovsepyan',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Mark Hovsepyan',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Mark Hovsepyan',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Mark Hovsepyan',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Mark Hovsepyan',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
