import * as L from "leaflet";

import userIconPng from "../../../assets/icon/venue_location_icon.svg";
import futuroIconPng from "../../../assets/icon/futuro.png";
import inmediatasIconPng from "../../../assets/icon/inmediatas.png";
import acontecimientosIconPng from "../../../assets/icon/acontecimientos.png";
import cronologicasIconPng from "../../../assets/icon/cronologicas.png";
import situacionIconPng from "../../../assets/icon/situacion.png";
import interesIconPng from '../../../assets/icon/interes.png'

export const futuroIcon = L.icon({
  iconUrl: futuroIconPng,
  iconSize: [40, 40],
  className:"leaflet-pane leaflet-marker-pane"
});
export const inmediatasIcon = L.icon({
  iconUrl: inmediatasIconPng,
  iconSize: [40, 40],
  className:"leaflet-pane leaflet-marker-pane"
});
export const acontecimientosIcon = L.icon({
  iconUrl: acontecimientosIconPng,
  iconSize: [40, 40],
  className:"leaflet-pane leaflet-marker-pane"
});

export const cronologicasIcon = L.icon({
  iconUrl: cronologicasIconPng,
  iconSize: [40, 40],
  className:"leaflet-pane leaflet-marker-pane"
});

export const interesIcon =L.icon({
  iconUrl:interesIconPng,
  iconSize:[40,40],
  className:"leaflet-pane leaflet-marker-pane"
})
export const situacionIcon = L.icon({
  iconUrl: situacionIconPng,
  iconSize: [40, 40],
  className:"leaflet-pane leaflet-marker-pane"
});


export const userIcon = L.icon({
  iconUrl: userIconPng,
  iconSize: [40, 40],
  className:"leaflet-pane leaflet-marker-pane"
});
