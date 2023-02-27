import PropTypes from 'prop-types'
const Buttons = ({color, text, onClick}) => {
    
  return (
    <button onClick={onClick} className='btn' style={{backgroundColor:color}}>{text}</button>
  )
};

Buttons.defaultProps = {
    color: 'green'
};

Buttons.propTypes ={
    text: PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired
}



export default Buttons