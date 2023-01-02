import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Box } from './AppBarStyled';


export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return(
        <Box>
            <Navigation/>
            {isLoggedIn ?  <UserMenu/> :  <AuthNav/>}
        </Box>
    )
}