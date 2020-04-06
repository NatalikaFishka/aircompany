const assert = require('chai').assert;

const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');
const MilitaryType = require('../models/MilitaryType');
const ClassificationLevel = require('../models/ClassificationLevel');
const aircraftFleet = require('../aircraftFleet');

describe('Airport Planes', () => {

    let planes = aircraftFleet;
    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('should have military Planes with transport type', () => {
        let airport = new Airport(planes);
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        assert.isTrue(transportMilitaryPlanes.every(militaryPlane => militaryPlane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT));
    });

    it('should have Boeing-747 as passenger plane with max capacity', () => {
        let airport = new Airport(planes);
        assert.isTrue(JSON.stringify(airport.getPassengerPlaneWithMaxCapacity()) === JSON.stringify(planeWithMaxPassengerCapacity));
    });

    it('should sort planes by maxLoadCapacity in increasing order', () => {
        let airport = new Airport(planes);
        airport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        assert.isTrue(planesSortedByMaxLoadCapacity.every((currentPlane, index) => {
            if (index > 0) {
                return currentPlane.getMaxLoadCapacity() >= planesSortedByMaxLoadCapacity[index - 1].getMaxLoadCapacity();
            } else {
                return true;
            }
        }));
    });

    it('at least one Bomber Military Plane exists in the Airport', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes = airport.getBomberMilitaryPlanes();
        assert.isTrue(bomberMilitaryPlanes.some((plane) => plane.getMilitaryType() === MilitaryType.TYPE_BOMBER));
    });

    it('should check that experimental planes has classification level higher than unclassified', () => {
        let airport = new Airport(planes);
        let experimentalMilitaryPlanes = airport.getExperimentalPlanes();
        assert.isTrue(experimentalMilitaryPlanes.some((plane) => plane.getClassificationLevel() !== ClassificationLevel.UNCLASSIFIED));
    });
})
