
import Heading from '../../../components/microComponents/from/Heading'
import InputText from '../../../components/microComponents/from/InputText'
import Radio from '../../../components/microComponents/from/Radio'
import Date from '../../../components/microComponents/from/DateInput'
import Actions from '../../../components/microComponents/from/Actions'


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