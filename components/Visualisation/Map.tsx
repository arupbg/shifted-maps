import { Component } from 'react';
import { Map as ReactLeafletMap, TileLayer, MapProps } from 'react-leaflet';
import { observer } from 'mobx-react';
import { LatLngBounds } from 'leaflet';

import styled from '../styled';
import config from '../../config';

type Props = {
  className?: string;
  children?: any;
  bounds: LatLngBounds;
  showTiles: boolean;
};

@observer
class Map extends Component<Props & MapProps> {
  render() {
    const { className, children, showTiles, ...props } = this.props;

    return (
      <ReactLeafletMap {...props} className={className} zoomControl={false}>
        <TileLayer
          opacity={showTiles ? 0.25 : 0}
          url="https://api.tiles.mapbox.com/v4/{styleId}/{z}/{x}/{y}{r}.png?access_token={accessToken}"
          attribution={
            '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap</a>'
          }
          styleId={config.mapboxStyleId}
          accessToken={config.mapboxAccessToken}
        />
        {children}
      </ReactLeafletMap>
    );
  }
}

export default styled(Map)`
  font: inherit;
  color: ${props => props.theme.foregroundColor};
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translate(0px);

  &.leaflet-container {
    background-color: ${props => props.theme.backgroundColor};
  }

  .leaflet-left .leaflet-control {
    margin-left: ${props => props.theme.spacingUnit}px;
  }

  .leaflet-top .leaflet-control {
    margin-top: ${props => props.theme.spacingUnit}px;
  }

  .leaflet-layer {
    transition: opacity ${props => props.theme.shortTransitionDuration};
  }
`;