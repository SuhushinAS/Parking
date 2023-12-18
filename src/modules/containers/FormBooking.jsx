import Input from "./Input";
import Button from "./Button";

const FormBooking = () => { // placeholder type
    return(
      <div className='booking' style={{display:'none'}}>
        <h2>Занять место</h2>
        <form action="">
          <Input type="text" name="Номер автомобиля"/>
          <Button text='>'/>
        </form>
      </div>
    )
}

export default FormBooking;