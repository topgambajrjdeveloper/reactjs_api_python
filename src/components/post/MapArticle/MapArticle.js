/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DummyNews } from "../../../dummy";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import {
  acontecimientosIcon,
  cronologicasIcon,
  futuroIcon,
  inmediatasIcon,
  interesIcon,
  situacionIcon,
  userIcon,
} from "./iconPop";
import { LAT, LNG } from "../../../utils/constants";
import CarouselXItemsCard from "./CarouselXItemsCard";

export const MapArticle = () => {
  const mapRef = useRef(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [dummyNews, setDummyNews] = useState(DummyNews);
  const [error, setError] = useState(false);  
  const [position, setPosition] = useState({
    currentLocation: {
      lat: 40.4379543,
      lng: -3.6795367,
    },
    zoom: 7,
  });
  const [latlgn, setLatlgn] = useState({
    longitude: 0,
    latitude: 0,
  });
  const location = useLocation();
  // console.log(location);
  // console.log(latlng);
  const handleMarkerHover = (markerId) => {
    console.log(markerId);
    if (markerId) {
      const marker = dummyNews.find((m) => m.id === markerId);
      setActiveMarker(marker);
      console.log(marker);
    } else {
      setActiveMarker(null);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { longitude, latitude } = position.coords;
        setLatlgn([longitude, latitude]);
        localStorage.setItem(LAT, latitude);
        localStorage.setItem(LNG, longitude);
      },
      function (err) {
        setError("Unable to retrieve your location", err);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  const TimeAgo = (time) => {
    return moment(time).fromNow();
  };
  const CategoryColor = ({ category }) => {
    const getColor = () => {
      let color;
      switch (category) {
        case "Futuro":
          color = "#5dc6bc";
          break;
        case "Inmediatas":
          color = "#ff8a22";
          break;
        case "Acontecimientos":
          color = "#e38284";
          break;
        case "Cronólogicas":
          color = "#2563eb";
          break;
        case "Situación":
          color = "#9d7097";
          break;
        case "Interes":
          color = "#a8a8a8";
          break;
        default:
          color = "#5dc6bc";
      }
      return color;
    };
    return (
      <div
        className="tag text-md items-center inline-block  rounded-full px-2 py-1 text-sm font-semibold text-gray-[500] mr-2 mb-2"
        style={{ backgroundColor: getColor() }}
      >
        {category}
      </div>
    );
  };
  return (
    <div className="map container" style={{ height: "50vh" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <MapContainer
            ref={mapRef}
            center={position.currentLocation}
            zoom={position.zoom}
            maxZoom={18}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {dummyNews.map(
              ({ id, category, location, content, title, image, time }) => {
                const iconCategory = () => {
                  switch (category) {
                    case "Futuro":
                      return futuroIcon;
                    case "Inmediatas":
                      return inmediatasIcon;
                    case "Acontecimientos":
                      return acontecimientosIcon;
                    case "Cronólogicas":
                      return cronologicasIcon;
                    case "Situación":
                      return situacionIcon;
                    case "Interes":
                      return interesIcon;
                    default:
                      return userIcon;
                  }
                };

                return (
                  <>
                    <Marker
                      key={id}
                      icon={iconCategory()}
                      position={[
                        location.coordinates[0],
                        location.coordinates[1],
                      ]}
                      draggable
                      onMouseEnter={handleMarkerHover}
                      onMouseLeave={handleMarkerHover}
                    >
                      {activeMarker && activeMarker.id === id && (
                        <Popup key={id}>
                          <div className="max-w-sm rounded overflow-hidden shadow-lg bubble">
                            <img
                              className="w-full"
                              src={image}
                              alt={title}
                              title={title}
                            />
                            <div className="px-6">
                              <div className="font-bold text-xl mb-2 ">
                                {title.toUpperCase()}
                              </div>
                              <p className="text-gray-700 text-base py-4 p-4">
                                {content.substring(0, 50)}[...]
                              </p>
                            </div>
                            <div className="px-6 ">
                              <span className="items-center inline-block  rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <CategoryColor category={category} />
                              </span>
                              <span className="items-center inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <TimeAgo time={time} />
                              </span>
                              <br />
                              <Link
                                to={{
                                  pathname: `/publicacion/`,
                                }}
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                              >
                                Ver mas...
                              </Link>
                            </div>
                          </div>
                        </Popup>
                      )}
                    </Marker>
                  </>
                );
              }
            )}
          </MapContainer>
        </div>
      </div>
      <CarouselXItemsCard
        onMarkerHover={handleMarkerHover}
        dummyNews={dummyNews}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MapArticle);
