import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

var fromPerson = {
  name: "Mr. Sender",
  addressStreet: "123 Fake St.",
  addressCity: "Boston, MA 02118"
};

var toPerson = {
  name: "Mrs. Receiver",
  addressStreet: "123 Fake St.",
  addressCity: "San Francisco, CA 94101"
};

const AddressLabel = ({ personType, person }) => {
  const { name, addressStreet, addressCity } = person;
  return (
    <div className={`address-label ${personType}`}>
      <div className="name">{name}</div>
      <div className="address-street">{addressStreet}</div>
      <div className="address-city">{addressCity}</div>
    </div>
  );
};

AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressStreet: PropTypes.string.isRequired,
    addressCity: PropTypes.string.isRequired
  }).isRequired
};

const Envelope = ({ toPerson, fromPerson }) => {
  return (
    <div className="envelope">
      <div className="row1">
        <AddressLabel personType="person-sender" person={fromPerson} />
        <div className="stamp">
          <span>Stamp</span>
        </div>
      </div>
      <div className="row2">
        <AddressLabel personType="person-receiver" person={toPerson} />
      </div>
    </div>
  );
};

Envelope.propTypes = {
  toPerson: PropTypes.object.isRequired,
  fromPerson: PropTypes.object.isRequired
};

ReactDOM.render(
  <Envelope toPerson={toPerson} fromPerson={fromPerson} />,
  document.getElementById("root")
);
