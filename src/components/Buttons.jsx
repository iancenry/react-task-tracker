import {func} from 'prop-types'
const Buttons = ({showAddButton, onshowAddTask}) => {

  let buttonStyle={
    backgroundColor : showAddButton? 'red': 'black'
  }
    
  return (
    <button onClick={onshowAddTask} className='btn' style={buttonStyle}>{showAddButton? 'Close' : 'Add'}</button>
  )
};

Buttons.defaultProps = {
  onshowAddTask: false
};

Buttons.propTypes ={
  onshowAddTask:func.isRequired
}



export default Buttons