import './index.css'

const TasksLabel = props => {
  const {taskDetails} = props
  const {task, activeTag} = taskDetails

  return (
    <li className="task-list">
      <p className="task">{task}</p>
      <button type="button" className="task-button">
        {activeTag}
      </button>
    </li>
  )
}

export default TasksLabel
