let traumaPatientCount = 0;
let heartPatientCount = 0;

const numberOfHeartPatientBeds = 50;
const numberOfTraumaPatientBeds = 50;

class EmergencyRoom {

  constructor() {
    this.render();

    document.querySelector('.btn-add-patient').addEventListener('click', this.insertItem.bind(this));

  }

  render() {
    document.getElementById('heartPatientCount').innerHTML = heartPatientCount;
    document.getElementById('traumaPatientCount').innerHTML = traumaPatientCount;
  }

  insertItem() {
    let patienttype = document.querySelector('.patientType').value;

    if (patienttype === 'trauma_patient' && traumaPatientCount < numberOfTraumaPatientBeds) {
      traumaPatientCount++;
      console.log('Truama patient added. Total booking count for trauma patient is : ', traumaPatientCount);
    }

    if (patienttype === 'heart_attack_patient' && heartPatientCount < numberOfHeartPatientBeds) {
      heartPatientCount++;
      console.log('Heart attack patient added.Total booking count for heart attack patient is : ', heartPatientCount);
    }

    if (heartPatientCount >= numberOfHeartPatientBeds && traumaPatientCount >= numberOfTraumaPatientBeds) {
      document.getElementById('errorMessage').innerHTML = 'Emergency Room is full, can not accept more bookings';
      console.log('Emergency Room is full, can not accept more bookings.');
    } else if (heartPatientCount >= numberOfHeartPatientBeds) {
      document.getElementById('errorMessage').innerHTML = 'Heart patient beds are full, can not accept more bookings';
      console.log('Heart patient beds are full, can not accept more bookings.');
    } else if (traumaPatientCount >= numberOfTraumaPatientBeds) {
      document.getElementById('errorMessage').innerHTML = 'Trauma patient beds are full, can not accept more bookings';
      console.log('Trauma patient beds are full, can not accept more bookings.');
    } else {
      document.getElementById('errorMessage').innerHTML = '';
    }

    this.render();
  }

}

export default EmergencyRoom;
