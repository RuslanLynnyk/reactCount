/* eslint-disable react/prop-types */
import './Button.scss'

export const Button = (props) => {
   const {handleClick} = props

   return (<button onClick={handleClick} className={props.myClassName}>
       {props.children}
       </button>);
}
