import {
  PatientsList,
  PatientsListItem,
  PatientsName,
  BirthDay,
  CardNumber,
  SelectBtn,
} from './PatientSearchList.styled';

export function PatientSearchList({ patients, toggleModal }) {
  return (
    <PatientsList>
      {patients.map(patient => (
        <PatientsListItem key={patient.id}>
          <PatientsName>{patient.name}</PatientsName>
          <BirthDay>{patient.birthDate}</BirthDay>
          <CardNumber>{patient.cardNumber}</CardNumber>
          <SelectBtn to={`${patient.id}`} onClick={toggleModal}>
            Select
          </SelectBtn>
        </PatientsListItem>
      ))}
    </PatientsList>
  );
}
