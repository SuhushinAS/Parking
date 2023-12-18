import Map from '../containers/Map';
import mapFloor1 from '../images/map1.svg'
import mapFloor2 from '../images/map2.svg'
import CreaterList from "./CreaterList";

const MainSection = () => { // нужны размеры
    return(
      <main>
        <Map floor={mapFloor1}/>
        <Map floor={mapFloor2}/>
        <CreaterList />
      </main>
    )
}

export default MainSection;