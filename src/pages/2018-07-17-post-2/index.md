---
path: "/post-2"
date: "2018-07-17"
title: "JepRiaToolkit 7.15.0-SNAPSHOT"
author: "Альмир Абраров"
---

В JepRiaToolkit добавлен функционал генерации JSON данных о сборке приложения. Пример:

{
library: {
JepRIA: " 10.10.0-SNAPSHOT"
},
compile: {
time_stamp: "2018.07.17 13:09:44",
user_name: "USERNAME",
UUID: "8a0e3063-a4a4-4b19-9e67-c3696cf77200",
host_name: "PC_NAME"
},
svn: {
tag_version: "Trunk",
repo_name: "scoring",
module_name: "Car",
revision: "56642:57316M"
}
}
Сгенеренный файл включается внутрь WAR, при каждой сборке.
Для получения информации нужно запросить ссылку ./actuator/version.json
JepRiaShowcase: изменен build.xml, таргет do-sign теперь генерит JSON 
Для применения изменений достаточно собрать модуль с новым build.xml и новым JepRiaToolkit 7.15.0-SNAPSHOT

В продакшен сборке поля user_name и host_name отсутствуют в JSON.
В debug сборке информация из JSON будет отображена в плашке справа сверху.
Также информация из JSON выводится в лог браузера.
