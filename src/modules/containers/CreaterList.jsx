import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const CreaterList = (props) => {

  const [places, setPlace] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responceUsers = await fetch('/api/users')
      const responceSpaces = await fetch('/api/spaces')

      const dataUsers = await responceUsers.json()
      const dataSpaces = await responceSpaces.json()

      // console.log(dataUsers.users, dataSpaces.data)
      const placesList = createDataList(dataUsers.users, dataSpaces.data)
      setPlace(placesList)
    }
    fetchData()
  }, [places])

  const createDataList = (listUsers, listSpaces) => {
    const array = []
    const listUsersReversed = listUsers.reverse()
    for (let item of listSpaces) {
      if (item.status === 1) {
        array.push(statusOne(item.id, listUsersReversed))
      }
      else if (item.status === 0) {
        array.push(statusZero(item.id))
      }
      else { console.log("Ошибка") }
    }

    return array
  }

  const statusOne = (id, users) => {
    for (let user of users) {
      if (id === Number(user.parkingLot)) {
        return {
          'id': id,
          'title': `${id} - ${user.secondName} ${user.firstName} - ${user.carNumber}`,
          'color': 'red'
        }
      }
    }
  }

  const statusZero = (id) => {
    return {
      'id': id,
      'title': `${id} - Свободно`,
      'color': 'green'
    }
  }


  return (
    <div>
      {places.map(place => (
        <a key={place.id} style={{color:`${place.color}`, display:'block', cursor:'pointer'}}>{place.title}</a>
      ))}
      {/* <ListUsers key={} /> */}
    </div>
  )

}

export default CreaterList;