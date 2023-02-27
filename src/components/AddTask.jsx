import {useState} from 'react'

const AddTask = ({addTask}) => {
  const [task, setTask] = useState({
    text: "", 
    day: "", 
    reminder: false
  })

  const handleChange = (e)=>{
    e.persist()
    const {name, value, type, checked} = e.target
    setTask(prevTask => ({...prevTask, [name]: type === 'checkbox'? checked : value}))
  }


  const onSubmit = (e)=>{
    e.preventDefault()
    if(!task.text){
        alert('Please add a task')
        return
    }
    addTask(task)
    // clear the form
    setTask({text: "", day: "", reminder: false})
  }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Task</label>
            <input id='text' type="text" placeholder="Add Task" name='text' value={task.text} onChange={handleChange} />
        </div>
        <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input id='day' type="text" placeholder="Add Day & Time" name='day' value={task.day} onChange={handleChange} />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="reminder">Set Reminder</label>
            <input id='reminder' type="checkbox" name="reminder" checked={task.reminder} onChange={handleChange} />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />

    </form>
  )
}

export default AddTask