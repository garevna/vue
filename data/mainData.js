var sadSmile = "https://raw.githubusercontent.com/garevna/vue.github.io/master/images/smile-03.gif"

var mainData = [
  {
    name:"Vue.js",
    title:"Подключение библиотеки Vue.js",
    comment:"<script src =“https://unpkg.com/vue”></script>",
    ref:"https://docs.google.com/presentation/d/1Ngckdav0zi7vPw9V8FC7aJGsXIsYDCy_Bi6aBXcZzjo/edit?usp=sharing",
    picture:false
  },
  // ======================================================== Directives
  {
    name:"Directives",
    title:"Директивы Vue.js",
    comment:`Директивы расширяют множество стандартных атрибутов тегов,
              позволяя использовать встроенные возможности Vue.js
              по управлению отображением данных модели в представлении. 
              По сути, директива - это особый токен в разметке, который 
              сообщает библиотеке Vue.js, что делать с элементом DOM.
              Все директивы Vue.js имеют префикс (v-)`,
    code:`
      <tag v-[directiveId] = "..."></tag>
      
      // Следующая директива инструктирует 
      // Vue.js обновлять текст в элементе 
      // div при изменении значения message 
      // в модели
      
      <div v-text="message"></div>
      
      // Далее используется вычисляемое 
      // выражение вместо одного ключевого 
      // свойства. 
      // Vue.js автоматически отслеживает 
      // свойства, от которых зависит 
      // выражение, и обновляет директиву, 
      // когда изменяется зависимость.
      
      <div 
        v-text="'Привет, ' + user.name + '!'">
      </div>`,
    ref:"https://docs.google.com/presentation/d/1igrCFnps4TL7aebpWPPVeCveO7dYhO8NVQ9oVCRrcEw/edit?usp=sharing",
    picture:false
  },
  // ====================================================== Components
  {
    name:"Components",
    title:"Компоненты",
    comment:`Основа модульной системы Vue.js`,
    ref:"https://docs.google.com/presentation/d/1wc3MBlxkmpnB5AdsvQq1b7rtvWfnKUDJez9FO3z60oM/edit?usp=sharing",
    picture:false
  },
  {
    name:"Events",
    title:"События",
    comment:`Событийная модель Vue.js`,
    ref:"https://plnkr.co/edit/vdEIxZYvoN4x6VFMX3kb?p=preview",
    picture:false
  },
  // ====================================================== Templates
  {
    name:"Templates",
    title:"Шаблоны",
    comment:`Существует досточное разнообразие способов определения 
              шаблона компонента: символьной строкой (String), 
              литералом (Template literal), X-Templates,
              Inline, рендер-функцией (Render functions), JSX и
              Single page components. Шаблоны Vue.js обеспечивают 
              почти все, что нужно в приложении.`,
    code:`
      // Можно задать именованный шаблон как обычный тег в html
      <template id="child">
        <div>
          <slot name="original-slot"></slot>
          <slot name="scoped-slot"
                :message="childMessage">
          </slot>
        </div>
      </template>
      // а затем в коде компонента указать ссылку на id шаблона
      `,
    ref:"",
    picture:false
  },
  // ============================================================= Slots
  {
    name:"Slots",
    title:"Дистрибуция контента",
    comment:`Слоты позволяют вставить контент родителя 
            в определенное место потомка. Для доступа к слотам
            существует свойство $slots`,
    ref:"https://docs.google.com/presentation/d/1-Cu9dLOg5CVRFOHUbKy7PqSL0upFlnEakT-HLofbTdY/edit?usp=sharing",
    picture:false
  },
  // =========================================================== Router
  {
    name:"Router",
    title:"Маршрутизатор",
    comment:`vue-router официально поддерживается командой разработчиков Vue.js`,
	code:`<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>`,
    ref:"",
    picture:"./images/cabine.gif"
  },
  // ====================================================== Transitions
  {
    name:"Transitions",
    title:"Анимация состояний компонентов или элементов",
    comment:`Vue отрабатывает анимационные переходы, добавляя и удаляя классы 
            компонентам / элементам в процессе перехода из одного состояния в 
            другое. 
            Всего предусмотрено шесть классов переходов`,
    ref:"",
    picture:false
  },
  // ====================================================== $http
  {
    name:"$http",
    title:"vue-resource",
    comment:`Метод this.$http.get( sourceUrl ) возвращает объект
		promise, т.е. объект, имеющий состояние.  
		Пока операция не завершена, состояние объекта
		будет pending, т.е. объект находится в ожидании 
		завершения операции.  Если операция завершена 
		успешно, состояние объекта становится fulfilled,
		в противном случае - rejected. 
		Для обработки изменения состояния объекта на него 
		нужно навесить обработчики.   
		* Детальнее: https://github.com/pagekit/vue-resource   
		* Ссылка на библиотеку: https://cdn.jsdelivr.net/npm/vue-resource@1.3.4   
		* Для создания и редактирования JSON-файлов можно использовать сервис 
		http://www.jsoneditoronline.org/   Создайте репозиторий на гитхабе, куда поместите 
		свой JSON-файл   * Сервис https://jsonplaceholder.typicode.com/ можно использовать 
		как эмулятор удаленного сервера`,
    code:`
		var sourceUrl = 
			"https://garevna.github.io/vue.github.io/data/posts.json"
		
		var promise = this.$http.get( sourceUrl )
		promise.then ( successCallback, failureCallback )
		
		// или еще проще:
		
		this.$http.get( sourceUrl ).then(
			successCallback, failureCallback)
		// функции-обработчики:
		// successCallback -  успешного завершения операции
		// failureCallback -  завершения операции с ошибкой
		`,
    ref:"https://plnkr.co/edit/lZLVjgPDmkpgmIwzebMd?p=preview",
    picture:false
  }
]
