const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

const MilitaryType = require('./models/MilitaryType');

class Airport {

  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getSpecificPlanes(PlaneClassType) {
    let specificPlanes = [];
    for (let plane of this.planes) {
      if (plane instanceof PlaneClassType) {
        specificPlanes.push(plane);
      }
    }
    return specificPlanes;
  }

  getMilitaryPlanes() {
    return this.getSpecificPlanes(MilitaryPlane);
  }

  getPassengerPlanes() {
    return this.getSpecificPlanes(PassengerPlane);
  }

  getExperimentalPlanes() {
    return this.getSpecificPlanes(ExperimentalPlane);
  }

  getPassengerPlaneWithMaxCapacity() {
    let passengerPlanes = this.getPassengerPlanes();
    let planeWithMaxCapacity = passengerPlanes[0];
    for (let i = 0; i < passengerPlanes.length; i++) {
      if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
        planeWithMaxCapacity = passengerPlanes[i];
      }
    }
    return planeWithMaxCapacity;
  }

  getMilitaryPlanesByType(planeType) {
    let militaryPlanes = this.getMilitaryPlanes();
    let selectedMilitaryPlanes = [];
    for (let i = 0; i < militaryPlanes.length; i++) {
      if (militaryPlanes[i].getMilitaryType() === planeType) {
        selectedMilitaryPlanes.push(militaryPlanes[i]);
      }
    }
    return selectedMilitaryPlanes;
  }

  getTransportMilitaryPlanes() {
    let planeType = MilitaryType.TYPE_TRANSPORT;
    return this.getMilitaryPlanesByType(planeType);
  }

  getBomberMilitaryPlanes() {
    let planeType = MilitaryType.TYPE_BOMBER;
    return this.getMilitaryPlanesByType(planeType);
  }

  sortByMaxPlaneProperty(getPlanePropertyMethod) {
    this.planes.sort((planeA, planeB) => (planeA[getPlanePropertyMethod]() - planeB[getPlanePropertyMethod]()));
  }

  sortByMaxDistance() {
    this.sortByMaxPlaneProperty("getMaxFlightDistance");
    return this;
  }

  sortByMaxSpeed() {
    this.sortByMaxPlaneProperty("getMaxSpees");
    return this;
  }

  sortByMaxLoadCapacity() {
    this.sortByMaxPlaneProperty("getMaxLoadCapacity");
    return this;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
