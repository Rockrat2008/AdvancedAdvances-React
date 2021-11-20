import React from "react";

function Advances() {
  return (
    <div class="container">
      <h2 class="mt-3">Add An Advance</h2>
      <p>Select the tabs to add data to each section for your advance.</p>

      <ul class="nav nav-tabs">
        <li class="nav-item active">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#startDestinationAddresses"
          >
            Starting and Destination Addresses
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#routes">
            Routes
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#routeDetails">
            Route Details
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#safeHavens">
            Safe Havens
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="startDestinationAddresses" class="tab-pane fade show active">
          <form method="post" enctype="multipart/form-data">
            <div class="form-group row">
              <label class="col-md-3" for="startingName">
                Starting Location
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="startingName"
                  name="startingName"
                  placeholder="Starting Location"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="startingStreet">
                Starting Address
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="startingStreet"
                  name="startingStreet"
                  placeholder="Starting Street Address"
                />
              </div>
              <label class="col-md-3" for="startingCity">
                Starting Address
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="startingCity"
                  name="startingCity"
                  placeholder="Starting City/State/Zip"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="advanceLocation">
                Advance Location
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="advanceLocation"
                  name="advanceLocation"
                  placeholder="Advance Location"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="destinationStreet">
                Destination Address
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="destinationStreet"
                  name="destinationStreet"
                  placeholder="Destination Street Address"
                />
              </div>
              <label class="col-md-3" for="destinationCity">
                Destination Address
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="destinationCity"
                  name="destinationCity"
                  placeholder="Destination City/State/Zip"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="distance">
                Distance
              </label>
              <div class="col-md-3">
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  placeholder="Distance in miles"
                />
              </div>
              <label class="col-md-3" for="travelTime">
                Travel Time
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="travelTime"
                  name="travelTime"
                  placeholder="Estimated Travel Time"
                />
              </div>
            </div>
          </form>
        </div>
        <div id="routes" class="tab-pane fade">
          <form>
            <div class="form-group row">
              <label class="col-md-3" for="primaryRoute">
                Primary Route
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="primaryRoute"
                  name="primaryRoute"
                  placeholder="Primary Route"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="primaryRouteDetails">
                Route Details
              </label>
              <div class="col-md-3">
                <textarea
                  id="primaryRouteDetails"
                  name="primaryRouteDetails"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="secondaryRoute">
                Secondary Route
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="secondaryRoute"
                  name="secondaryRoute"
                  placeholder="Secondary Route"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="secondaryRouteDetails">
                Route Details
              </label>
              <div class="col-md-3">
                <textarea
                  id="secondaryRouteDetails"
                  name="secondaryRouteDetails"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="tertiaryRoute">
                Tertiary Route
              </label>
              <div class="col-md-3">
                <input
                  type="text"
                  id="tertiaryRoute"
                  name="tertiaryRoute"
                  placeholder="Tertiary Route"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="tertiaryRouteDetails">
                Route Details
              </label>
              <div class="col-md-3">
                <textarea
                  id="tertiaryRouteDetails"
                  name="tertiaryRouteDetails"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div id="routeDetails" class="tab-pane fade">
          <form>
            <div class="form-group row">
              <label class="col-md-3" for="specialEvents">
                Special Events In Area?
              </label>
              <div class="col-md-3">
                <textarea
                  id="specialEvents"
                  name="specialEvents"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="roadClosures">
                Road Closures In Area?
              </label>
              <div class="col-md-3">
                <textarea
                  id="roadClosures"
                  name="roadClosures"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="bridges">
                Bridges?
              </label>
              <div class="col-md-3">
                <textarea
                  id="bridges"
                  name="bridges"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="overpassees">
                Overpasses?
              </label>
              <div class="col-md-3">
                <textarea
                  id="overpassees"
                  name="overpassees"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3" for="tollRoads">
                Toll Roads?
              </label>
              <div class="col-md-3">
                <textarea
                  id="tollRoads"
                  name="tollRoads"
                  rows="2"
                  cols="100"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div id="safeHavens" class="tab-pane fade">
          <div class="form-group row">
            <label class="col-md-2" for="hospitalName">
              Hospital Name
            </label>
            <div class="col-md-4">
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                placeholder="Hospital Name"
              />
            </div>
            <label class="col-md-3" for="responseTime">
              Average Response Time
            </label>
            <div class="col-md-3">
              <input
                type="text"
                id="responseTime"
                name="responseTime"
                placeholder="Average Response Time"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-2" for="hospitalStreet">
              Street Adress
            </label>
            <div class="col-md-4">
              <input
                type="text"
                id="hospitalStreet"
                name="hospitalStreet"
                placeholder="Street Address"
              />
            </div>
            <label class="col-md-3" for="hospitalPhone">
              Hospital Phone
            </label>
            <div class="col-md-3">
              <input
                type="text"
                id="hospitalPhone"
                name="hospitalPhone"
                placeholder="Hospital Phone"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-2" for="policeDeptName">
              Police Department
            </label>
            <div class="col-md-4">
              <input
                type="text"
                id="policeDeptName"
                name="policeDeptName"
                placeholder="Police Department"
              />
            </div>
            <label class="col-md-3" for="pdResponseTime">
              Average Response Time
            </label>
            <div class="col-md-3">
              <input
                type="text"
                id="pdResponseTime"
                name="pdResponseTime"
                placeholder="Average Response Time"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-2" for="policeStreet">
              Street Adress
            </label>
            <div class="col-md-4">
              <input
                type="text"
                id="policeStreet"
                name="policeStreet"
                placeholder="Street Address"
              />
            </div>
            <label class="col-md-3" for="policePhone">
              Police Phone
            </label>
            <div class="col-md-3">
              <input
                type="text"
                id="policePhone"
                name="policePhone"
                placeholder="Police Phone"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-2" for="fireDeptName">
              Fire Department
            </label>
            <div class="col-md-4">
              <input
                type="text"
                name="fireDeptName"
                id="fireDeptName"
                placeholder="Fire Department"
              />
            </div>
            <label class="col-md-3" for="fdResponseTime">
              Average Response Time
            </label>
            <div class="col-md-3">
              <input
                type="text"
                id="fdResponseTime"
                name="fdResponseTime"
                placeholder="Average Response Time"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-2" for="fireStreet">
              Street Adress
            </label>
            <div class="col-md-4">
              <input
                type="text"
                id="fireStreet"
                name="fireStreet"
                placeholder="Street Address"
              />
            </div>
            <label class="col-md-3" for="firePhone">
              Fire Phone
            </label>
            <div class="col-md-3">
              <input
                type="text"
                id="firePhone"
                name="firePhone"
                placeholder="Fire Phone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advances;
