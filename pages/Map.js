import { useMemo, React } from 'react';
import styles from '/styles/Map.module.css'
import { GoogleMap, MarkerF, LoadScript, useJsApiLoader } from "@react-google-maps/api";

function Map(props) {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['geometry', 'drawing'],
      });

    // var center = useMemo({lat: 43.643030, lng: -79.383120});

    const containerStyle = {
        position: 'relative',
        width: 'inherit',
        height: 'inherit'
      };

    return (
        <div styles={styles.map}>
            <div styles={styles.mapwrapper}>
                <div className={styles.mapcontainer}>

                {isLoaded && <GoogleMap zoom={13} center={{lat: 43.643030, lng: -79.383120}} mapContainerStyle={containerStyle}>

                </GoogleMap>}
                </div>
            </div>
        </div>
    );
}

export default Map;