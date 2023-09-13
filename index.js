const dataGit = [
  "Какую проблему решают git системы?",
  "Расскажите про Git flow?",
  "Способы отменить изменения. Их отличия",
  "Git stash для чего, git apply по тэгу",
  "Разница между git rebase и git merge",
  "Cherry-pick что делает, в какой ситуации использовать?",
  "Git push –f для чего?",
  "Git commit –amend. Как поменять сообщение коммита? Добавить файлы в предыдущий коммит?",
  "Git rebase -I . Какие преимущества дает интерактивный режим?",
  "Как объединить несколько коммитов в 1?",
];

const dataHTML = [
  "Что такое каскадность?",
  "Понятия БЭМ.",
  "Понимание layouting, painting этапов ререндера в браузере.",
  "Позиционирование. Свойства position, в каких случаях какое использовать?",
  "Расскажите о flex и grid верстках. В каких случаях выбирали бы тот или иной инструмент?",
  "Разница между display: none и opacity: 0",
  "Какие свойства наследуются , а какие нет?",
  "Значимость селекторов. !important.",
  "Комбинированные селекторы.",
  "animation friendly свойства.",
  "Используете ли вы сервис can i use? Кросбраузерность.",
  "С какими css фреймворками/библиотеками компонентов вы пользовались.",
  "Переменные, миксины.",
];

const dataJS = [
  "Какие вы знаете типы в js?",
  "Отличие == от === .",
  "Разница между let , var , const.",
  "Function expression и function declaration в чем разинца?",
  'Стрелочные функции. В чем их отличие от функций, что были объявлены с помощью "function"?',
  "Как работает наследование в js?",
  "Что такое замыкания?",
  "Контекст выполнения функций, call, apply, bind.",
  "Что такое промисы и какую проблему они решили?",
  "Как работает event loop?",
  "В чем отличие макро задач от микро задач?",
  "Что такое hoisting?",
  "Разница __proto__ и prototype?",
  "Что такое Set, Map, WeekSet, WeekMap?",
  "Функции генераторы. В чем их особенность? ",
  "Что вы знаете о дескрипторах?",
  "Как запретить модификацию объекта?",
  "Что делают for in , for of, entries?",
  "Каррирование, что это и для чего?",
  "Виды утечек памяти",
  "В чем разница между xhr и fetch запросами?",
  "Глубокое и поверхностное копирование объектов.",
  "Как избавиться от повторений в массиве и оставить только уникальные значения ?",
];

const dataTS = [
  "Для чего нужен Typescript?",
  "Какие существуют типы?",
  "Что такое интерфейс и тип. В чем разница?",
  "Типизация rest параметров.",
  "Utility types. расскажите какие знаете, что они делают (Awaited, Omit, Partial, Required, Readonly, Record, Pick ….. )",
  "Что такое перегрузка функции?",
  "Что такое generics? (доп задание: Опишите функцию, которая принимает и возвращает результат одинакового типа.)",
  "Что такое enum? когда следует использовать ?",
  "Declaration files .d.ts .",
  "Type guard конструкция и ключевое слово is.",
  "Conditional types.",
  "Distributive conditional types",
];

const dataRT = [
  "Для чего нужен React?",
  "Что такое Virtual Dom",
  "Какие хуки вы знаете? Расскажите про каждый из них",
  "Жизненный цикл классового компонента. Аналогия с функциональным компонентом.",
  "Какой этап жизненного цикла не реализован в функциональном компоненте?",
  "UseCallback, UseMemo. В чем разница? Для чего используются?",
  "react.memo(). Для чего? Какие аргументы принимает?",
  "Приходилось ли писать кастомные хуки?",
  "UseLayoutEffect и UseEffect. В чем разница?",
  "Какие этапы жизненного цикла классового компонента иммитирует UseEffect?",
  "Почему хуки нельзя вызывать внутри циклов или вложенных функций?",
  "Что такое SynteticEvent? Каков алгоритм распространения событий в React в отличии от нативного ?",
  "Что такое виртуализация списка ?",
  "Расскажите про способы оптимизации производительности реакт приложения",
  "React portal. Когда следует использовать?",
  "React fiber. Расскажите о новом алгоритме сравнения virtual dom.",
  "Что такое ленивая загрузка компонентов?",
  "Какие существуют способы стилизации компонентов в React?",
  "React Context. Когда использовать? Расскажите в каких случаях начинается перерисовка компонента.",
  "Какие стейт менеджеры вы использовали? (Redux, Mobx, и тд.)",
];

const data = [dataGit, dataHTML, dataJS, dataTS, dataRT]

const question = document.querySelector('.marafon__question')
const btn = document.querySelector('.marafon__btn')
const git = document.querySelector('#git')
const html = document.querySelector('#html')
const js = document.querySelector('#js')
const ts = document.querySelector('#ts')
const rt = document.querySelector('#rt')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


btn.addEventListener('click', () => {
    let totalData = []
    if(git.checked) {
        totalData.push(dataGit)
    }
    if(html.checked) {
        totalData.push(dataHTML)
    }
    if(js.checked) {
        totalData.push(dataJS)
    }
    if(ts.checked) {
        totalData.push(dataTS)
    }
    if(rt.checked) {
        totalData.push(dataRT)
    }
    if(!git.checked && !html.checked && !js.checked && !ts.checked && !rt.checked){
        totalData.push(data)
    }
    let arr = totalData.flat(Infinity)
    let num = getRandomInt(0,(arr.length-1))
    console.log(arr)
    question.textContent = arr[num]
})
