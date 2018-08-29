const Workstate = {
    ADD: 0,
    EDIT: 1,
    SEARCH: 2,
    SELECTED: 3,
    VIEW_DETAILS: 4,
    VIEW_LIST: 5,
};

const WorkstateAsString = {
    0: "Создание",
    1: "Редактирование",
    2: "Поиск",
    3: "Выделен элемент списка",
    4: "Просмотр объекта",
    5: "Просмотр списка",
};

export {Workstate, WorkstateAsString};