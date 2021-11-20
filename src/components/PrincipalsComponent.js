import React from "react";

function Principals() {
  return (
    <div className="container">
      <h2 className="mt-3">Add A Principal</h2>
      <p>Select the tabs to add data to each section for your principal.</p>

      <ul className="nav nav-tabs">
        <li className="nav-item active">
          <a
            className="nav-link active"
            data-toggle="tab"
            href="#basicPrincipalInfo"
          >
            Basic Principal information
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#principalCharacteristics"
          >
            Principal Characteristics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#businessInfo">
            Business Information
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#extendedPrincipalDetails"
          >
            Extended Principal Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#familyInfo">
            Family Information
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="basicPrincipalInfo" className="tab-pane fade show active">
          <form>
            <div className="form-group row">
              <label className="col-md-3" for="firstName">
                First name
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <label className="col-md-3" for="lastName">
                Last name
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="homePhone">
                Home phone
              </label>
              <div className="col-md-3">
                <input
                  type="tel"
                  id="homePhone"
                  name="homePhone"
                  placeholder="Home Phone"
                />
              </div>
              <label className="col-md-3" for="mobilePhone">
                Mobile phone
              </label>
              <div className="col-md-3">
                <input
                  type="tel"
                  id="mobilePhone"
                  name="mobilePhone"
                  placeholder="Mobile Phone"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="homeStreet">
                Home Address 1
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="homeStreet"
                  name="homeStreet"
                  placeholder="Home Street Address"
                />
              </div>
              <label className="col-md-3" for="homeCity">
                Home Address 2
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="homeCity"
                  name="homeCity"
                  placeholder="Home City/State/Zip"
                />
              </div>
            </div>
          </form>
        </div>
        <div id="principalCharacteristics" className="tab-pane fade">
          <form method="post" enctype="multipart/form-data">
            <div className="form-group row">
              <label className="col-md-3" for="height">
                Height
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="height"
                  name="height"
                  placeholder="Height"
                />
              </div>
              <label className="col-md-3" for="Weight">
                Weight
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  placeholder="Weight"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="distinguishingMarks">
                Distinguishing Marks
              </label>
              <div className="col-md-3">
                <textarea
                  id="distinguishingMarks"
                  name="distinguishingMarks"
                  rows="2"
                  cols="100"
                >
                  Birthmarks/Scars/Tattoos
                </textarea>
              </div>
            </div>
          </form>
        </div>
        <div id="businessInfo" className="tab-pane fade">
          <form>
            <div className="form-group row">
              <label className="col-md-3" for="business">
                Business Name
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="business"
                  name="business"
                  placeholder="Business Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="position">
                Position
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Position"
                />
              </div>
              <label className="col-md-3" for="busPhone">
                Business phone
              </label>
              <div className="col-md-3">
                <input
                  type="tel"
                  id="busPhone"
                  name="busPhone"
                  placeholder="Business Phone"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="businessStreet">
                Business Address 1
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="businessStreet"
                  name="businessStreet"
                  placeholder="Business Street Address"
                />
              </div>
              <label className="col-md-3" for="businessCity">
                Business Address 2
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="businessCity"
                  name="businessCity"
                  placeholder="Business City/State/Zip"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="assistant">
                Assistant
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="assistant"
                  name="assistant"
                  placeholder="Assistant"
                />
              </div>
              <label className="col-md-3" for="assistantPhone">
                Assistant phone
              </label>
              <div className="col-md-3">
                <input
                  type="tel"
                  id="assistantPhone"
                  name="assistantPhone"
                  placeholder="Assistant Phone"
                />
              </div>
            </div>
          </form>
        </div>
        <div id="extendedPrincipalDetails" className="tab-pane fade">
          <div className="form-group row">
            <label className="col-md-3" for="physician">
              Physician
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="physician"
                name="physician"
                placeholder="Physician"
              />
            </div>
            <label className="col-md-3" for="drPhone">
              Phone Number
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="drPhone"
                name="drPhone"
                placeholder="Physician Phone Number"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3" for="doctorStreet">
              Doctor Address 1
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="doctorStreet"
                name="doctorStreet"
                placeholder="Doctor Street Address"
              />
            </div>
            <label className="col-md-3" for="doctorCity">
              Doctor Address 2
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="doctorCity"
                name="doctorCity"
                placeholder="Doctor City/State/Zip"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3" for="dentist">
              Dentist
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="dentist"
                name="dentist"
                placeholder="Dentist"
              />
            </div>
            <label className="col-md-3" for="dentistPhone">
              Phone Number
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="dentistPhone"
                name="dentistPhone"
                placeholder="Dentist Phone Number"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3" for="dentistStreet">
              Dentist Address 1
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="dentistStreet"
                name="dentistStreet"
                placeholder="Dentist Street Address"
              />
            </div>
            <label className="col-md-3" for="dentistCity">
              Dentist Address 2
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="dentistCity"
                name="dentistCity"
                placeholder="Dentist City/State/Zip"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3" for="medications">
              Medications
            </label>
            <div className="col-md-3">
              <textarea
                id="medications"
                name="medications"
                rows="2"
                cols="100"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3" for="medicalConditions">
              Medical Conditions
            </label>
            <div className="col-md-3">
              <textarea
                id="medicalConditions"
                name="medicalConditions"
                rows="2"
                cols="100"
              ></textarea>
            </div>
          </div>
        </div>
        <div id="familyInfo" className="tab-pane fade">
          <form>
            <div className="form-group row">
              <label className="col-md-3" for="spouseName">
                Spouse name
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="spouseName"
                  name="spouseName"
                  placeholder="Spouse Name"
                />
              </div>
              <label className="col-md-3" for="spousePhone">
                Spouse Phone
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="spousePhone"
                  name="spousePhone"
                  placeholder="Spouse Phone"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="height">
                Height
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="height"
                  name="height"
                  placeholder="Height"
                />
              </div>
              <label className="col-md-3" for="Weight">
                Weight
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  placeholder="Weight"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="distinguishingMarks">
                Distinguishing Marks
              </label>
              <div className="col-md-3">
                <textarea
                  id="distinguishingMarks"
                  name="distinguishingMarks"
                  rows="2"
                  cols="100"
                >
                  Birthmarks/Scars/Tattoos
                </textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="child1">
                Child Name
              </label>
              <div className="col-md-3">
                <input
                  type="tel"
                  id="child1"
                  name="child1"
                  placeholder="Child Name"
                />
              </div>
              <label className="col-md-3" for="child1Phone">
                Child Phone
              </label>
              <div className="col-md-3">
                <input
                  type="tel"
                  id="child1Phone"
                  name="child1Phone"
                  placeholder="Child Phone"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="height">
                Height
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="height"
                  name="height"
                  placeholder="Height"
                />
              </div>
              <label className="col-md-3" for="Weight">
                Weight
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  placeholder="Weight"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="distinguishingMarks">
                Distinguishing Marks
              </label>
              <div className="col-md-3">
                <textarea
                  id="distinguishingMarks"
                  name="distinguishingMarks"
                  rows="2"
                  cols="100"
                >
                  Birthmarks/Scars/Tattoos
                </textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="child2Name">
                Child Name
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="child2Name"
                  name="child2Name"
                  placeholder="Child Name"
                />
              </div>
              <label className="col-md-3" for="child2Phone">
                Child Phone
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="child2Phone"
                  name="child2Phone"
                  placeholder="Home Child Phone"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="height">
                Height
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="height"
                  name="height"
                  placeholder="Height"
                />
              </div>
              <label className="col-md-3" for="Weight">
                Weight
              </label>
              <div className="col-md-3">
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  placeholder="Weight"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3" for="distinguishingMarks">
                Distinguishing Marks
              </label>
              <div className="col-md-3">
                <textarea
                  id="distinguishingMarks"
                  name="distinguishingMarks"
                  rows="2"
                  cols="100"
                >
                  Birthmarks/Scars/Tattoos
                </textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Principals;
