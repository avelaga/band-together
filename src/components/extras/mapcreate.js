import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export class MapContainer extends Component {
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
          </Map>
      );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBw35MG3PMljHLvlinxbh6BecHmHquBNFo'
})(MapContainer);