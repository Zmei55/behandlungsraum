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

export function StaffUnit({ loginFormState, setLoginFormState }) {
  const handleChange = ({ target: { name, value } }) =>
    setLoginFormState(prev => ({ ...prev, [name]: value }));

  const isEmptyLoginForm = loginFormState.station === '';

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
          <BtnLogIn type="submit" disabled={isEmptyLoginForm}>
            Log In
          </BtnLogIn>
        </Link>
      </BtnContainer>
    </>
  );
}
