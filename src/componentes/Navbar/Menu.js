import Game from './MiniMenus/Game'
import Media from './MiniMenus/Media'
import News from './MiniMenus/News'
import Community from './MiniMenus/Community'
import Store from './MiniMenus/Store'

const Menu = [
  {
    title: 'GAME',
    url: '#',
    cName: 'nav-links',
    menu: Game,
    key: '1',
  },
  {
    title: 'MEDIA',
    url: '#',
    cName: 'nav-links',
    menu: Media,
    key: '2',
  },
  {
    title: 'NEWS',
    url: '#',
    cName: 'nav-links',
    menu: News,
    key: '3',
  },
  {
    title: 'COMMUNITY',
    url: '#',
    cName: 'nav-links',
    menu: Community,
    key: '4',
  },
  {
    title: 'STORE',
    url: '#',
    cName: 'nav-links',
    menu: Store,
    key: '5',
  },
  {
    title: 'TENNOCON',
    url: '#',
    cName: 'tennocon',
    menu: null,
    key: '6',
  },
]

export default Menu
