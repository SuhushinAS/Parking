import FormBooking from '../modules/containers/FormBooking';
import FormNoBooking from '../modules/containers/FormNoBooking';
import FormStart from '../modules/containers/FormStart';
import Header from '../modules/containers/Header';
import MainSection from '../modules/containers/MainSection';



const Main = () => {
  return(
    <div>
      <Header/>
      <MainSection />
      <FormBooking/> 
      <FormNoBooking/>

    </div>
  )
}

export default Main;