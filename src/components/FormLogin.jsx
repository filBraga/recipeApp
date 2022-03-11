import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

const FormLogin = () => {
  const history = useHistory();
  // const { user, setUser } = useContext();
  const { email, setEmail } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);

  const handleChangeEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleChangePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const validEmail = (emailParam) => {
    // REFERÊNCIA
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    return emailRegex.test(emailParam);
  };

  const handleDisabled = () => {
    const MINIMIUM_CARACTERS = 6;
    const isValid = validEmail(email);
    return password.length > MINIMIUM_CARACTERS && isValid;
  };

  const handleClick = (event) => {
    event.preventDefault();
    const userObj = { email };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(userObj));
    history.push('/foods');
  };

  return (
    <section>
      <form onSubmit={ () => {} }>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="text"
            id="email"
            name="email"
            placeholder="EMAIL"
            onChange={ handleChangeEmail }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            id="password"
            name="password"
            placeholder="SENHA"
            onChange={ handleChangePassword }
          />
        </label>
        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ !handleDisabled() }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </section>
  );
};

FormLogin.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default FormLogin;
