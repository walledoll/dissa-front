import X from "@assets/icons/X.png";
import { Button } from "@components/Button/Button.tsx";
import HeartIcon from "@assets/icons/heartIcon.svg?react";
import { LogoPurple } from "@components/LogoPurple/LogoPurple.tsx";

import cls from "./StartSmthNewScreen.module.scss";

export const StartSmthNewScreen = () => {
  return (
    <div className={cls.container}>
      <HeartIcon className={cls.heart} />
      <header className={cls.header}>
        <img src={X} />
        <LogoPurple />
      </header>
      <main className={cls.main}>
        <h1 className={cls.smthNew}>
          Начни что-то <br /> новое
        </h1>
        <Button isLoading={false} isDisabled={false} style={{ marginBottom: "16px" }}>
          Регистрация
        </Button>
        <Button isLoading={false} isDisabled={false} variant="secondary" style={{ marginBottom: "32px" }}>
          Проблемы со входом
        </Button>
        <p className={cls.caption}>
          Нажимая &#34;Создать аккаунт&#34; или &#34;Войти&#34;, ты <br />
          соглашаешься с нашими <u>Условиями</u>. Чтобы <br />
          узнать, как мы обрабатываем данные, <br />
          ознакомься с <u>Политикой конфиденциальности</u> <br />и <u>Политикой в отношении файлов cookie</u>.
        </p>
      </main>
    </div>
  );
};
