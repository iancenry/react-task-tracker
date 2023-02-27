import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';
import Buttons from './Buttons';


const Header = ({title, onshowAddTask, showAdd}) => {
    const location = useLocation()

    return (
    <header className='header'>
        <h1>{title}</h1>
        {/* If path is '/' show the button */}
        {location.pathname==='/' && <Buttons showAddButton={showAdd} onshowAddTask={onshowAddTask}/>}
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"

};


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

