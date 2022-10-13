export function Patient({ patient }) {
  return <>{patient && <h1>Patient {patient.id}</h1>}</>;
}
