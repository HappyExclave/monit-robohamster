import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WhiteList } from "../Modals/WhiteList";
import "./style/login.css";
import { useAuth } from "../hook/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { singin } = useAuth();

  const fromPage = location.state?.from?.pathname || "fgklflkfm";
  const hanleLogin = (e) => {
    e.preventDefault();
    const user = "привет"; // ДАВЕ ШЕЛБИ ЭТО ЗАГЛУШКА СЮДА ТОКЕН ПОЛЬЗОВАТЕЛЯ
    singin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <Fragment>
      <WhiteList>
        <div className="singup_block">
          <p>Вы не авторизованы</p>
          <form onSubmit={hanleLogin}>
            <button type="submit">Войти</button>
          </form>
        </div>
      </WhiteList>
    </Fragment>
  );
};
export { Login };
