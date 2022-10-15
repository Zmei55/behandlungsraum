import { useParams } from 'react-router-dom';
import { Patient } from 'components/Patient';

export default function PatientView() {
  const { patientID } = useParams();
  console.log('PatientView ~ patientID', patientID);

  return <Patient patientID={patientID} />;
}
