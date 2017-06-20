const categories = [
  {id: 7, title: 'Home', path: '/', featured: true, img: ''},
  {id: 1, title: 'Videos', path: '/main/videos', featured: true, img: ''},
  {id: 2, title: 'Assessments', path: '/main/assessments', featured: false, img: ''},
  {id: 3, title: 'Library', path: '/main/library', featured: false, img: ''},
  {id: 4, title: 'Resources', path: '/main/resources', featured: false, img: ''},
  {id: 5, title: 'App Hub',  path: 'https://apphub.tee2.org', featured: false, img: ''}
];
const categoriesMap = categories.reduce((acc,cat) => {
  acc[cat.id] = cat
  return acc;
}, {});

export const mainMenu = [
    {id: 1, type: 'divider' , item: {}},
    {id: 2, type: 'link' , item: categoriesMap[7]},
    {id: 3, type: 'divider' , item: {}},
    {id: 4, type: 'link' , item: categoriesMap[1]},
    {id: 5, type: 'link' , item: categoriesMap[2]},
    {id: 6, type: 'link' , item: categoriesMap[3]},
    {id: 7, type: 'link' , item: categoriesMap[4]},
    {id: 8, type: 'divider' , item: {}},
    {id: 9, type: 'link_absolute' , item: categoriesMap[5]},
    {id: 10, type: 'divider' , item: {}}
];

export default categories;