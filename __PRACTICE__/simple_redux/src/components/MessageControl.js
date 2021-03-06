import React from 'react'

class MessageControl extends React.Component {
  static Input = ({ id, type, ...props }) => {
    return (
      <div>
        <label htmlFor={id}>이메일 변경</label>
        <input id={id} type={type} {...props} />
      </div>
    )
  }

  static Button = (props) => {
    return (
      <button type="button" {...props}>
        변경
      </button>
    )
  }

  render() {
    return this.props.children
  }
}

export default MessageControl
