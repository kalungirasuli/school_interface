
import Heading from './from/Heading.jsx'
import InputText from './from/InputText.jsx'
import Radio from './from/Radio.jsx'
import Date from './from/DateInput.jsx'
import Actions from './from/Actions.jsx'


export default function AddCoures() {
  const heading = "Fill to add new course"
  
  const onclick=(e)=>{
    alert("hello Ediwn")
    e.preventDefault()
  }
  return (
    <>
      <form action="">
            <Heading heading={heading}/>
            <InputText   placeholder={'Enter first name'}/>
            <InputText  placeholder={'Enter second name'}  />
            <InputText   placeholder={'Enter email address'}  />
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