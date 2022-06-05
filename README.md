Минимальный набор готовых CSS-классов для повседневных задач по верстке.

## Установка

NPM:
`npm install macro-styles`

Yarn:
`yarn add macro-styles`

## Использование

Установить набор классов с помощью NPM или Yarn

### React

Подключить в любом месте index.js: `import 'macro-styles';`

### SASS/SCSS

Открыть самый главный файл со стилями и дописать в самом начале: `@import 'macro-styles';`

Внизу в таблице приведены примеры классов, которые можно использовать. Вместо символа "\*" укажите одну букву любой стороны. Если не указывать сторону, то отступы будут задаваться со всех сторон.

Сторона => сокращение:

- `left` => `l`
- `right` => `r`
- `top` => `t`
- `bottom` => `b`

### Например:

| Класс               | Значение                                                      |
| ------------------- | ------------------------------------------------------------- |
| `mr-10 mb-50`       | `margin-right: 10px; margin-bottom: 50px;`                    |
| `m-25`              | `margin: 25px;`                                               |
| `p-50`              | `padding: 50px;`                                              |
| `pr-10 mt-15 mb-15` | `padding-right: 10px; margin-top: 15px; margin-bottom: 15px;` |

Значение:

- `mt-10` - `margin-top: 10px`
- `mr-40` - `margin-right: 40px`

# Отступы margin

| Класс  | Значение         |
| ------ | ---------------- |
| m\*-5  | margin-\*: 5px;  |
| m\*-10 | margin-\*: 10px; |
| m\*-15 | margin-\*: 15px; |
| m\*-20 | margin-\*: 20px; |
| m\*-25 | margin-\*: 25px; |
| m\*-30 | margin-\*: 30px; |
| m\*-35 | margin-\*: 35px; |
| m\*-40 | margin-\*: 40px; |
| m\*-45 | margin-\*: 45px; |
| m\*-50 | margin-\*: 50px; |

# Отступы padding

| Класс  | Значение          |
| ------ | ----------------- |
| p\*-5  | padding-\*: 5px;  |
| p\*-10 | padding-\*: 10px; |
| p\*-15 | padding-\*: 15px; |
| p\*-20 | padding-\*: 20px; |
| p\*-25 | padding-\*: 25px; |
| p\*-30 | padding-\*: 30px; |
| p\*-35 | padding-\*: 35px; |
| p\*-40 | padding-\*: 40px; |
| p\*-45 | padding-\*: 45px; |
| p\*-50 | padding-\*: 50px; |

# Базовая очистка стилей 
|                 |                                 |
| --------------- | ------------------------------- |
| *               | box-sizing: border-box;         |
|                 | outline: none;                  |
|                 | margin: 0;                      |
|                 | padding: 0;                     |
| a               | color: inherit;                 |
|                 | text-decoration: none;          |
| li              | box-sizing: border-box;         |
|                 | outline: none;                  |


# Container, row, col

 Класс            | Значение                        | 
| --------------- | ------------------------------- |
| container       | width: 100%; + padding&margin   |
| row             | display: flex;                  |
| col             | flex: 1 0 0%;                   |
| col-1           | flex: 0 0 auto;                 |
|                 | width: 8.3333333333%;           |
| col-2           | flex: 0 0 auto;                 |
|                 | width: 16.6666666667%;          |
| col-3           | flex: 0 0 auto;                 |
|                 | width: 25%;                     |
| col-4           | flex: 0 0 auto;                 |
|                 | width: 33.3333333333%;          |
| col-5           | flex: 0 0 auto;                 |
|                 | width: 41.6666666667%;          |
| col-6           | flex: 0 0 auto;                 |
|                 | width: 50%;                     |
| col-7           | flex: 0 0 auto;                 |
|                 | width: 58.3333333333%;          |
| col-8           | flex: 0 0 auto;                 |
|                 | width: 66.6666666667%;          |
| col-9           | flex: 0 0 auto;                 |
|                 | width: 75%;                     |
| col-10          | flex: 0 0 auto;                 |
|                 | width: 83.3333333333%;          |
| col-11          | flex: 0 0 auto;                 |
|                 | width: 91.6666666667%;          |
| col-12          | flex: 0 0 auto;                 |
|                 | width: 100%;                    |


# Flex, позиционирование, размер

| Класс           | Значение                        |
| --------------- | ------------------------------- |
| h100p           | height: 100%;                   |
| w100p           | width: 100%;                    |
| d-ib            | display: inline-block;          |
| d-if            | display: inline-flex;           |
| d-flex          | display: flex;                  |
| d-block         | display: block;                 |
| j-between       | justify-content: space-between; |
| j-around        | justify-content: space-around;  |
| j-center        | justify-content: center;        |
| j-end           | justify-content: flex-end;      |
| j-evenly        | justify-content: space-evenly;  |
| a-center        | align-items: center;            |
| a-end           | align-items: flex-end;          |
| a-start         | align-items: flex-start;        |
| a-stretch       | align-items: stretch;           |
| a-between       | align-content: space-between;   |
| a-around        | align-content: space-around;    |
| a-s-auto        |  align-self: auto;              |
| a-s-start       | align-self: flex-start;         |
| a-s-end         | align-self: flex-end;           |
| a-s-center      | align-self: center;             |
| a-s-baseline    | align-self: baseline;           |
| a-s-stretch     | align-self: stretch;            |
| flex-column     | flex-direction: column;         |
| flex-row        | flex-direction: row;            |
| flex-wrap       | flex-wrap: wrap;                |
| flex-auto       | flex: 1 1 auto;                 |
| flex            | flex: 1;                        |
| m-auto          | margin: auto;                   |
| ml-auto         | margin-left: auto;              |
| mr-auto         | margin-right: auto;             |
| text-center     | text-align: center;             |
| pos-r           | position: relative;             |
| pos-a           | position: absolute;             |
| pos-f           | position: fixed;                |
| pos-s           | position: sticky;               |
| cu-p            | cursor: pointer;                |

# Текст

| Класс           | Значение                                                        |
| --------------- | --------------------------------------------------------------- |
| text-center     | text-align: center;                                             |
| text-capitalize | text-transform: capitalize;                                     |
| text-uppercase  | text-transform: uppercase;                                      |
| text-lowercase  | text-transform: lowercase;                                      |
| text-truncate   | white-space: nowrap; overflow: hidden; text-overflow: ellipsis; |
| fw-bold         | font-weight: bold;                                              |

# Opacity

| Класс      | Значение      |
| ---------- | ------------- |
| opacity-1  | opacity: 0.1; |
| opacity-2  | opacity: 0.2; |
| opacity-3  | opacity: 0.3; |
| opacity-4  | opacity: 0.4; |
| opacity-5  | opacity: 0.5; |
| opacity-6  | opacity: 0.6; |
| opacity-7  | opacity: 0.7; |
| opacity-8  | opacity: 0.8; |
| opacity-9  | opacity: 0.9; |
| opacity-10 | opacity: 1;   |
