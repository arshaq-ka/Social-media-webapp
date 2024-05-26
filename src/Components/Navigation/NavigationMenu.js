import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';


export const navigationMenu=[
  {
    title:"Home",
    icon: <HomeIcon/>,
    path: "/home"
  },
  {
    title:"Explore",
    icon: <ExploreIcon/>,
    path:"/explore"
  },
  {
    title:"Notification",
    icon: <NotificationsIcon/>,
    path: "/notification"
  },
  {
    title:"Message",
    icon: <MessageIcon/>,
    path: "/message"
  },
  {
    title:"List",
    icon: <ListAltIcon/>,
    path: "/list"
  },
  {
    title:"Group",
    icon: <GroupIcon/>,
    path:"/group"
  },
  {
    title:"Verification",
    icon: <VerifiedIcon/>,
    path:"/verify"
  },
  {
    title:"Account",
    icon: <AccountCircleIcon/>,
    path:"/account"
  },
  {
    title:"More",
    icon: <PendingIcon/>,
    path:"/more"
  }
]