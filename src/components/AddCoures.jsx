
import Heading from './from/Heading.jsx'
import InputText from './from/InputText.jsx'
import Radio from './from/Radio.jsx'
import Date from './from/DateInput.jsx'
import Actions from './from/Actions.jsx'
import Add from './from/Add.jsx'

export default function AddCoures() {
  const heading = "Fill to add new course"
  const firstName='firstName'
  const secondName="secondName"
  const email="email"
  const onclick=(e)=>{
    alert("hello Ediwn")
    e.preventDefault()
  }
  return (
    <>
      <form action="">
            <Heading heading={heading}/>
            <InputText  name={firstName}  placeholder={'Enter first name'}/>
            <InputText  name={secondName}  placeholder={'Enter second name'}  />
            <InputText  name={email}  placeholder={'Enter email address'}  />
            <div className="radios">
            <span><Radio lable={'Male'} value={'male'}/></span>
            <span> <Radio lable={'Female'} value={'female'}/></span>
           
            </div>
            <Date/>
            <Actions Green={"Register"} Red={"Cancel"} onclick={onclick} />
      </form>
    </>
  )
}