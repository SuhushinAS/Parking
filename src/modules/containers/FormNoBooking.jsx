import Input from "./Input";
import Button from "./Button";

const FormNoBooking = () => { // placeholder type
    return(
      <div className='no_booking' style={{display:'none'}}>
        <h2>Освободить место</h2>
        <form action="">
          <Button text='Да'/>
          <Button text='Нет'/>
        </form>
      </div>
    )
}

export default FormNoBooking;