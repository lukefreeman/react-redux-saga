/**
* @author Luke Freeman / https://github.com/lukefreeman
* Geospatial helper functions
*/

const GeoSpatial = {

    /**
    * ----------------------------------------------------------------------
    * calcPosFromLatLonRad
    * Plot position based on latitude / longitude 
    * @param {number} radius
    * @param {number} lat
    * @param {number} lon
    * ----------------------------------------------------------------------
    */
    calcPosFromLatLonRad(radius, lat, lon) {
        const spherical = new THREE.Spherical(
            radius,
            THREE.Math.degToRad(90 - lon),
            THREE.Math.degToRad(lat)
        );
    
        const vector = new THREE.Vector3();
        vector.setFromSpherical(spherical);
    
        return vector;
    },

    /**
    * ----------------------------------------------------------------------
    * calcDistance
    * Calculate the distance between two points (latitude/longitude)
    * @param {number} lat1
    * @param {number} lon1
    * @param {number} lat2
    * @param {number} lon2
    * ----------------------------------------------------------------------
    */
    calcDistance(lat1, lon1, lat2, lon2) {        
        return this.haversine(lat1,lon1,lat2,lon2);
    },

    /**
    * ----------------------------------------------------------------------
    * findNearBy
    * Find locations within a given radius to a dataset
    * @param {number} lat
    * @param {number} lon 
    * @param {number} radius
    * @param {array} dataset
    * 
    * Example dataset --- 
    * [{
    *    "code": "0001",
    *    "lat": "52.6362025",
    *    "lng": "-1.2715291",
    *    "location": "Leicester"
    * },{
    *    "code": "0003",
    *    "lat": "53.395839",
    *    "lng": "-1.6398848",
    *    "location": "Sheffield"
    * }]
    * ----------------------------------------------------------------------
    */
    findNearBy(lat,lon, radius, dataset=[]) {
        const matches = [];

        dataset.forEach((location) => {
            const distance = this.haversine(lat,lon,location.lat,location.lng);
            if (distance <= radius) { matches.push({location, distance: parseFloat(distance.toFixed(1)) }); }
        });
        
        return matches;
    },

    /**
    * ----------------------------------------------------------------------
    * haversine
    * Helper function determines the great-circle distance between two points
    * @param {number} lat1
    * @param {number} lon1
    * @param {number} lat2
    * @param {number} lon2
    * ----------------------------------------------------------------------
    */
    haversine(lat1, lon1, lat2, lon2) {
        const r = 3959.8; // miles
        const dlat = Math.PI * (lat2 - lat1)/180;
        const dlon = Math.PI * (lon2 - lon1)/180;
        lat1 = Math.PI * (lat1)/180;
        lat2 = Math.PI * (lat2)/180;
        const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.sin(dlon / 2) * Math.sin(dlon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.asin(Math.sqrt(a));
        return r * c;
    }
    
}

export default GeoSpatial;