import React, { Component } from "react";

import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

import { Credentials } from "../../../../../constants";
import { Wrapper } from "./NeighborsMap.styles";

import userImageClyde from "../../../../../assets/img/users/clyde.png";
import userImageMinh from "../../../../../assets/img/users/minh.png";
import userImageShela from "../../../../../assets/img/users/shela.png";

const Map = ReactMapboxGl({
  accessToken: Credentials.MapboxAPIKey
});

const MapStyle = "mapbox://styles/dtopo/cj5qa62s51nmm2rmogutp5rrq";
/* const initialView = {
  width: 1000,
  height: 600,
  latitude: -121.96094512939452,
  longitude: 37.32812664308382,
  zoom: 15
};
 */
const MapPoints = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.96111679077147, 37.34232140492521]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.98102951049805, 37.355421881014486]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.9563102722168, 37.31993613728424]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.94017410278322, 37.34532379926191]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.98583602905273, 37.327580637137665]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.93605422973631, 37.339591851359174]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.95390701293944, 37.35787796578827]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.94807052612306, 37.33522435930639]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.97484970092772, 37.31147167681037]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.97244644165039, 37.36661006073335]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-121.9563102722168, 37.332221561204875]
      }
    }
  ]
};

class NeighborsMap extends Component {
  constructor(props) {
    super(props);

    //this.handleViewportChange = this.handleViewportChange.bind(this);
  }

  componentWillMount() {
    //this.setState(initialView);
  }

  handleViewportChange(viewport) {
    //const { width, height, latitude, longitude, zoom } = viewport;
    // this.setState(viewport);
  }

  render() {
    return (
      <Wrapper>
        <Map
          //onClick={(polygon, evt) => console.log(evt)}
          style={MapStyle}
          center={[-121.96094512939452, 37.32812664308382]}
          containerStyle={{
            height: "1000px",
            width: "100vw"
          }}
          dragPan={false}
          minZoom={11}
          maxZoom={11}
          maxBounds={[
            [-122.2510528564453, 37.199159258361455],
            [-122.2510528564453, 37.486300862269296]
          ]}
        >
          <Popup
            //onClick={this.props.onBioClick("Shela")}
            style={{ backgroundImage: `url(${userImageShela})` }}
            coordinates={[-121.96918487548828, 37.30519097732609]}
            offset={[0, -10]}
          />

          <Popup
            //onClick={this.props.onBioClick("Minh")}
            style={{ backgroundImage: `url(${userImageMinh})` }}
            coordinates={[-122.05467224121094, 37.35760507144896]}
            offset={[0, -10]}
          />

          <Popup
            //onClick={this.props.onBioClick("Clyde")}
            style={{ backgroundImage: `url(${userImageClyde})` }}
            coordinates={[-121.84867858886717, 37.3586966428528]}
            offset={[0, -10]}
          />

          {/*          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer> */}
        </Map>
      </Wrapper>
    );
  }
}

export default NeighborsMap;
