import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon, LatLngTuple, DivIcon, point, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "./Maps.css";
import pin from "../Assets/pin-blk.png";
import harborSF from "../Assets/harborSF.jpg";
import BasaSF from "../Assets/Basa.jpg";
import reload from "../Assets/refresh-square.png";
import MarkerClusterGroup from "react-leaflet-cluster";
import Urbana from "../Assets/Urbana.png";
import Blum from "../Assets/blumSL.jpg";

interface MarkerData {
    geocode: LatLngTuple;
    popupText: string;
    address: string;
    imageUrl: string;
    website: string;
    phone: string;
}

const markersData: MarkerData[] = [
    {
        geocode: [37.7762, -122.4385],
        popupText: "BASA SF",
        address: "1326 Grove St, San Francisco, CA 94117",
        imageUrl: BasaSF,
        website: "www.basasf.com",
        phone: "(415) 409-1002"
    },
    {
        geocode: [37.7680, -122.4530],
        popupText: "Harborside Dispensary",
        address: "768 Stanyan St, San Francisco, CA 94117",
        imageUrl: harborSF,
        website: "www.shopharborside.com",
        phone: "(628) 466-3157"
    },
    {
        geocode: [37.7806, -122.471],
        popupText: "Urbana",
        address: "4811 Geary Blvd, San Francisco, CA 94118",
        imageUrl: Urbana,
        website: "www.urbananow.com",
        phone: "(415) 702-6767"
    },
    {
        geocode: [37.7823, -122.4077],
        popupText: "Barbary Coast",
        address: "952 Mission St, San Francisco, CA 94103",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMk5CE11LXIB19Uw9asQ3hQKyoMfFeYpfLst9Ea=w408-h306-k-no",
        website: "www.barbarycoastsf.com",
        phone: "(415) 243-4400"
    },
    {
        geocode: [37.9655, -122.3141], //Urban Soyal, El Sobrante 
        popupText: "Urban Soyal Cannabis Club",
        address: "3823 San Pablo Dam Rd, El Sobrante, CA 94803",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMflkxmSq1m5AEJHEtfgLIZUFR8TdhudWw6jFrr=w408-h544-k-no",
        website: "www.urbansoyal.com",
        phone: "(510) 275-9571"
    },
    {
        geocode: [37.8998, -122.3094], //7Stars Holistic Health center, Richmond
        popupText: "7 Stars Holistic Healing Center",
        address: "3219 Pierce St, Richmond, CA 94804",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOSsryUGjzUz8E92fIWGhvrxMz9i9GBz0UBLDq6=w408-h269-k-no",
        website: "www.7starshhc.com",
        phone: "(510) 527-7827"
    },
    {
        geocode: [37.8659, -122.2584], //Hi-Fidelity Berkeley
        popupText: "Hi-Fidelity Cannabis Dispensary",
        address: "2465 Telegraph Ave, Berkeley, CA 94704",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipO5fWwauKNkzJTO4p5QJdx-sfF59mlYtQ3OKEq4=w408-h242-k-no",
        website: "www.hifigreen.com",
        phone: "(510) 838-2400"
    },
    {
        geocode: [37.8014, -122.2183], //KANA OAK
        popupText: "KANNA Weed Dispensary Oakland",
        address: "2019 MacArthur Blvd. Oakland, CA 94602",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipPh3bOgynCKhyQpO0TvCnjEWcROXl5WtNsUG7uQ=w456-h240-k-no",
        website: "www.kannaoak.com",
        phone: "(510) 447-1706"
    },
    {
        geocode: [37.7841, -122.2424], //Harborside OAK
        popupText: "Harborside Oakland Dispensary",
        address: "1840 Embarcadero, Oakland, CA 94606",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOKXCAihEb7tlfbsco2u0Oim3t3ucAdPMN-VvYY=w425-h240-k-no",
        website: "www.shopharborside.com",
        phone: "(888) 994-2726"
    },
    {
        geocode: [37.7037, -122.1688], //Blum San Leandro 
        popupText: "Blüm San Leandro Cannabis Dispensary",
        address: "1915 Fairway Dr, San Leandro, CA 94577",
        imageUrl: Blum,
        website: "www.letsblum.com",
        phone: "(510) 903-3443"
    },
    {
        geocode: [37.6732, -122.0826], //Cookies Hayward
        popupText: "Cookies Hayward Dispensary",
        address: "1004 B St, Hayward, CA 94541",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipNOizOmE0PdGtAPVyXHwydwLtJNQgk4n42t4WFv=w408-h894-k-no",
        website: "www.cookieshayward.com",
        phone: "(510) 362-7040"
    },
];

const customIcon = new Icon({
    iconUrl: pin,
    iconSize: [30, 38] as [number, number]
});

const createCustomClusterIcon = (cluster: any) => {
    return new DivIcon({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true)
    });
};

const MarkerWithRef: React.FC<{
    marker: MarkerData;
    index: number;
    markerRefs: React.MutableRefObject<(LeafletMarker | null)[]>;
    clusterGroupRef: React.MutableRefObject<any>;
}> = ({ marker, index, markerRefs, clusterGroupRef }) => {
    const markerRef = useRef<LeafletMarker>(null);

    useEffect(() => {
        if (markerRef.current) {
            markerRefs.current[index] = markerRef.current;
        }
    }, [index, markerRefs]);

    const handleClick = () => {
        if (markerRef.current) {
            const markerInstance = markerRefs.current[index];
            if (markerInstance && clusterGroupRef.current) {
                const markerLatLng = markerInstance.getLatLng();
                clusterGroupRef.current.zoomToShowLayer(markerInstance, () => {
                    markerInstance.openPopup();
                });
            }
        }
    };

    return (
        <Marker
            position={marker.geocode}
            icon={customIcon}
            ref={markerRef}
            eventHandlers={{
                click: handleClick,
            }}
        >
            <Popup>
                <div className="popup-container">
                    <img src={marker.imageUrl} alt={marker.popupText} className="popup-image" />
                    <h2>{marker.popupText}</h2>
                    <p>{marker.address}</p>
                    <a href={`https://${marker.website}`} target="_blank" rel="noopener noreferrer">{marker.website}</a> |
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(marker.address)}`} target="_blank" rel="noopener noreferrer"> Get Directions</a>
                    <p>{marker.phone}</p>
                </div>
            </Popup>
        </Marker>
    );
};

const ResetViewButton: React.FC = () => {
    const map = useMap();
    const initialCenter: LatLngTuple = [37.8, -122.25];
    const initialZoom = 10;

    const handleClick = () => {
        map.setView(initialCenter, initialZoom);
    };

    return (
        <button className="reset-view-button" onClick={handleClick}>
            <img src={reload} alt="Reload" />
        </button>
    );
};

const Maps: React.FC = () => {
    const markerRefs = useRef<(LeafletMarker | null)[]>([]);
    const clusterGroupRef = useRef<any>(null);

    const handleSidebarClick = (index: number) => {
        const markerInstance = markerRefs.current[index];
        if (markerInstance && clusterGroupRef.current) {
            const markerLatLng = markerInstance.getLatLng();
            clusterGroupRef.current.zoomToShowLayer(markerInstance, () => {
                markerInstance.openPopup();
            });
        }
    };

    return (
        <div className="map-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    Before heading out check to see if Gemmy's is in stock.
                </div>
                {markersData.map((marker, index) => (
                    <div
                        key={index}
                        className="sidebar-item"
                        onClick={() => handleSidebarClick(index)}
                    >
                        <h2>{marker.popupText}</h2>
                        <p>{marker.address}</p>
                        <a href={`https://${marker.website}`} target="_blank" rel="noopener noreferrer">{marker.website}</a>
                        <p>{marker.phone}</p>
                    </div>
                ))}
            </div>
            <MapContainer center={{ lat: 37.8, lng: -122.25 }} zoom={10} style={{ height: "100vh", width: "80%" }}>
                <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png' />
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                    ref={clusterGroupRef}
                >
                    {markersData.map((marker, index) => (
                        <MarkerWithRef
                            key={index}
                            marker={marker}
                            index={index}
                            markerRefs={markerRefs}
                            clusterGroupRef={clusterGroupRef}
                        />
                    ))}
                </MarkerClusterGroup>
                <ResetViewButton />
            </MapContainer>
        </div>
    );
};

export default Maps;
