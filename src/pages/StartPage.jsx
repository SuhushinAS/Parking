import logo from '../modules/images/logo2.svg';
import FormStart from '../modules/containers/FormStart';


const Start = () => {
  return(
    <div>
      <img src={logo} alt=""></img>
      <h1>Добро пожаловать</h1>
      <FormStart/>
    </div>
  )
}

export default Start;