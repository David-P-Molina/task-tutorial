const Button = ({btnName}) => {
  return (
    <div><button className="btn">{btnName}</button></div>
  )
}
Button.defaultProps = {
    btnName: "Push Me"
}
export default Button