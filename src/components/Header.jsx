import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';
import Buttons from './Buttons';

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
    <header className='header'>
        <h1>{title}</h1>
        {/* If path is '/' show the button */}
        {/* {location.pathname==='/' && <Buttons color ={showAdd? 'red':'black'} text={showAdd? 'Close':'Add'} onClick = {onAdd}/>} */}
        {location.pathname==='/' && <Buttons showAddButton={showAdd}/>}
    </header>
  )
}

Header.defaultProps = {
    title: "Default title if the title property isn't given"

};

//proptypes(make code more robust to catch errors in data types)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

