import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "../../redux/action/taskAC";
import RoutineMachine from "./Routing";


const points1 = [
  [55.81416425979,37.79628603302656],
  [55.75282428680799,37.62317449396274]
];

const points2 = [
  [33.53001088075479, 36.26829385757446],
  // [33.50546582848033, 36.29547681726967]
];

const Map = (props) => {
  const rMachine = useRef();
  const [points, setPoints] = useState(true);
  // const pointsToUse = points ? points1 : points2;
  const pointsToUse = useSelector(state => state.currentAddress)

  const allAddress = useSelector(state=> state.address)

  console.log(allAddress);
  const dispatch = useDispatch()

  // const currentTasks

  useEffect(() => {
    dispatch(getAllAddress())
}, [])


  return (
    <MapContainer
      doubleClickZoom={true}
      // id="mapId"
      zoom={9}
      center={[55.75399399999374,37.61385325390624]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      {pointsToUse.length && <RoutineMachine ref={rMachine} waypoints={pointsToUse} />}
      
      <button onClick={() => setPoints(!points)}>
        Toggle Points State and Props
      </button>
    </MapContainer>
  );
};

export default Map;
