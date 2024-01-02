import './index.css'

const TagsLabel = props => {
  const {eachTagDetails, toggleActiveTagList, isActive} = props
  const {displayText, optionId} = eachTagDetails

  const bgColor = isActive ? 'button-tag styled' : 'button-tag'
  console.log(bgColor)
  console.log(isActive)
  const onChangeActiveTag = () => {
    toggleActiveTagList(optionId)
  }
  return (
    <li className="tag-list">
      <button className={bgColor} type="button" onClick={onChangeActiveTag}>
        {displayText}
      </button>
    </li>
  )
}

export default TagsLabel
