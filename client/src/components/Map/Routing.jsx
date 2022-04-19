import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useEffect } from "react";

const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "blue",
      opacity: "0.7",
      weight: 6 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });
  
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
