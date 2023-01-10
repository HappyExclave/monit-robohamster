import React from "react";
import './style/Forma.css';
export const Forma = ({org,submite}) => {
    return(
        <div className="Forma">
            <div className="header_name">
                    <h1>Мониторинг {org} </h1>
                </div>
                <div className="main_block">
                    <p>Ваш дискорд: // Сюда нужно будет импортировать дс-ник//</p>
                    <p>Ваш никнейм:</p>
                    <p>Ваша должность:</p>
                    <input type="text" />
                    <p>Скриншот /members + time:</p>
                    <input type="text" />
                    <p>Скриншот онлайна в Discord:</p>
                    <input type="text" />
                    <p>Скриншот собеседований:</p>
                    <input type="text" />
                    <p>Скриншот или ссылка на сообщение с пресс-службой:</p>
                    <input type="text" />
                    <div className="btn">
                        <form>
                        <button type="submit" onSubmit={submite} className="singup_btn blue">Отправить</button>
                        </form>
                    </div>
                </div>
        </div>
)};



export default Forma;