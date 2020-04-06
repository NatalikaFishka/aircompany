const Plane = require('./Plane');

class ExperimentalPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, planeType, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.planeType = planeType;
        this.classificationLevel = classificationLevel;
    }

    getModel() {
        return this.model;
    }

    setModel(model) {
        this.model = model;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    setMaxSpeed(maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    setMaxFlightDistance(maxFlightDistance) {
        this.maxFlightDistance = maxFlightDistance;
    }

    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }

    setMaxLoadCapacity(maxLoadCapacity) {
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getPlaneType() {
        return this.planeType;
    }

    setPlaneType(planeType) {
        this.planeType = planeType;
    }

    getClassificationLevel() {
        return this.classificationLevel;
    }

    setClassificationLevel(classificationLevel) {
        this.classificationLevel = classificationLevel;
    }
}

module.exports = ExperimentalPlane