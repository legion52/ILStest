import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "../../redux/action/taskAC";
import RoutineMachine from "./Routing";


const points1 = [
  [55.81416425979,37.79628603302656],
  [55.75282428680799,37.62317449396274]
];

const Map = ({data}) => {
  const rMachine = useRef();
  // const data = useSelector(state => state.currentAddress)
  const pointsToUse = data.length?[[data[1], data[0]], [data[3], data[2]]].map(el => el.map(item => Number(item))):[]
  // console.log(points1);
  // console.log(pointsToUse);
  const dispatch = useDispatch()


  useEffect(() => {
    // dispatch(getAllAddress())
}, [data])


  return (
    <MapContainer
      doubleClickZoom={true}
      zoom={9}
      center={[55.75399399999374,37.61385325390624]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      {pointsToUse.length && <RoutineMachine key={data[0]} ref={rMachine} waypoints={pointsToUse} />}
      
  
    </MapContainer>
  );
};

export default Map;
