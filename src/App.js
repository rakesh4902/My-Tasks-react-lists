import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'
import TasksLabel from './components/TasksLabel'
import TagsLabel from './components/TagsLabel'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    task: '',
    activeTag: tagsList[0].optionId,
    activeTasks: [],
    activeId: 'INITIAL',
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTags = event => {
    this.setState({activeTag: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {task, activeTag} = this.state
    const newTask = {
      id: v4(),
      task,
      activeTag,
    }
    if (task.length > 0) {
      this.setState(prevState => ({
        activeTasks: [...prevState.activeTasks, newTask],
        task: '',
        activeTag: tagsList[0].optionId,
      }))
    }
  }

  toggleActiveTagList = id => {
    this.setState(prev => ({
      activeId: prev.activeId === id ? 'INITIAL' : id,
    }))
  }

  render() {
    const {task, activeTag, activeTasks, activeId} = this.state
    const filterActiveTagList =
      activeId === 'INITIAL'
        ? activeTasks
        : activeTasks.filter(eachTask => eachTask.activeTag === activeId)
    // console.log(filterActiveTagList)
    return (
      <div className="app-container">
        <div className="create-task-container">
          <h1 className="task-heading">Create a Task!</h1>
          <form className="form-container" onSubmit={this.onSubmitTask}>
            <label htmlFor="text" className="label">
              Task
            </label>
            <input
              className="input"
              id="text"
              type="text"
              value={task}
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
            />
            <label htmlFor="tag" className="label">
              Tags
            </label>
            <select
              className="input"
              name="select"
              id="tag"
              value={activeTag}
              onChange={this.onChangeTags}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tag-name">Tags</h1>
          <ul className="tags-list-container">
            {tagsList.map(eachTag => (
              <TagsLabel
                key={eachTag.optionId}
                eachTagDetails={eachTag}
                toggleActiveTagList={this.toggleActiveTagList}
                isActive={eachTag.optionId === activeId}
              />
            ))}
          </ul>
          <h1 className="task-header">Tasks</h1>
          {filterActiveTagList.length > 0 ? (
            <ul className="tasks-todo">
              {filterActiveTagList.map(eachTask => (
                <TasksLabel key={eachTask.optionId} taskDetails={eachTask} />
              ))}
            </ul>
          ) : (
            <p className="no-tasks-added">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
