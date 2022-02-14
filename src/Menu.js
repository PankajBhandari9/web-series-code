import {NavLink} from 'react-router-dom'
import Fab from '@material-ui/core/Fab'

const Menu=()=>{
    return(
        <ul>
        <li><NavLink to='/'><Fab color="secondary" variant='extended'><b>Netflix</b></Fab></NavLink></li>
        <li><NavLink to='/amazon'><Fab color="primary" variant='extended'><b>Amazon</b></Fab></NavLink></li>
        <li><NavLink to='/hotstar'><Fab variant='extended'><b>Hotstar</b></Fab></NavLink></li>
        </ul>
    )
}
export default Menu;