import { Link } from 'react-router-dom';
import {
  SubTitle,
  StationsList,
  StationListItem,
  RadioBtn,
  BtnContainer,
  BtnBack,
  BtnLogIn,
  IconArrowLeft,
} from './StaffUnit.styled';

export function StaffUnit({ formState, setFormState }) {
  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const isEmptyForm = formState.station === '';

  return (
    <>
      <SubTitle>Wählen Sie eine Personaleinheit</SubTitle>

      <StationsList>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="chirurgisch"
            onChange={handleChange}
          />
          chirurgische Station, Krankenschwester
        </StationListItem>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="neurologisch"
            onChange={handleChange}
          />
          neurologische Station, Krankenschwester
        </StationListItem>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="traumatologisch"
            onChange={handleChange}
          />
          traumatologische Station, Krankenschwester
        </StationListItem>
      </StationsList>

      <BtnContainer>
        <Link to="/">
          <BtnBack type="button">
            <IconArrowLeft />
            Zurück
          </BtnBack>
        </Link>
        <Link to="/desktop">
          <BtnLogIn type="submit" disabled={isEmptyForm}>
            Log In
          </BtnLogIn>
        </Link>
      </BtnContainer>
    </>
  );
}
