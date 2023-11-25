<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg">

  <p align="center">
    <img src="https://img.shields.io/badge/node-14.0.0-green.svg">
    <img src="https://img.shields.io/badge/vite-4.4.5-green.svg">
    <img src="https://img.shields.io/badge/vite-4.4.5-green.svg">
    <img src="https://img.shields.io/badge/express-4.18.2-green.svg">
    <img src="https://img.shields.io/badge/handlebars-4.7.8-green.svg">  
    <img src="https://img.shields.io/badge/sass-1.68.0-magenta.svg">
  </p>

</p>

# Yandex Messanger

Проект написанный на ванильном JavaScript с использованием библиотеки handlebars.
В качестве CSS-препроцессора был выбран sass.

Дизайн проекта находится по [ссылке](https://www.figma.com/file/NQSdPkYvzrWn0iqKd7HWDB/Yandex-Chat-Design?type=design&node-id=0-1&mode=design&t=yPfvzLL9ZFkgrKtC-0) 

## Запуск проекта

Из корневого каталога проекта выполните следующую команду:

```bash
  npm run start
```
Скрипт автоматически запустит установку недостающих библиотек, билд статики и запуск сервера.

После чего сайт будет доступен по адресу http://localhost:3000

# Sprint_1

В первом спринте был реализован следующий функционал: 
- [Страница авторизации](https://hilarious-douhua-520b9f.netlify.app/login)
- [Страница регистрации](https://hilarious-douhua-520b9f.netlify.app/signup)
- [Страница редактирования профиля](https://hilarious-douhua-520b9f.netlify.app/editprofile)
- [Страница смены пароля](https://hilarious-douhua-520b9f.netlify.app/editpassword)
- [Страница 404](https://hilarious-douhua-520b9f.netlify.app/404)
- [Страница 500](https://hilarious-douhua-520b9f.netlify.app/500)
- [Домашняя страница (заглушка)](https://hilarious-douhua-520b9f.netlify.app/home)

Страницы вы можете посомтрев, перейдя по ссылкам. 
Проект задеплоен с помощью [Netlify](https://www.netlify.com/)

# Sprint_2

Во втором спринте был добавлен TypeScript, ESLint и компонентный подход, которые полностью изменили структуру проекта. Все страницы также задеплоены на Netlify.

При отправке форм теперь происходит валидация, и вывод вводимых значений в console.log()

Чтобы запустить линтер используйте команду:

```bash
  npm run lint
```
