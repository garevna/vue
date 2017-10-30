var usersPosts = [];
// ======================================================== Vue properties
usersPosts ["Vue.js"] = [
  {
    head: "Vue",
    pict: false,
    code: `
          new Vue  ( {
  	        el : ‘…',
  	        data : { … },
  	        methods : { … },
  	        computed : { … },
  	        watch: {},
          } )`,
    text:`Экземпляр Vue является моделью. 
          Модель необходимо связать с представлением, т.е. с элементом DOM. 
          Для связывания модели с представлением (элементом DOM) служит 
          свойство el экземпляра Vue`,
    ref:false
  },
  {
    head: "Model-View",
    pict: false,
    code:`
      const app = new Vue( {
        ...
      }).$mount('#app')
      `,
    text: `При отсутствии свойства el экземпляра Vue связать модель с
          с представлением можно с помощью метода $mount`,
    ref:false
  },
  {
    head: "data | computed",
    pict: false,
    code:`
      data : {
        priceUSD: 10,
        course: 25.4
      },
      computed: {
        priceUA: function () {
          return this.priceUSD * this.course
        }
      }
      `,
    text: `Объекты data и computed являются встроенными свойствами 
            экземпляра Vue. Эти объекты содержат реактивные свойства
            модели, т.е. свойства, при изменении которых происходит
            автоматическое изменение представления`,
    ref:[ "https://codepen.io/garevna/pen/QqEMoa" ]
  },
  {
    head: "computed",
    pict: false,
    code:`
      data : {
        userId: "Иван",
        message: "зайди в бухгалтерию"
      },
      computed: {
        announcement: function () {
          return this.userId + ", " + this.message
        }
      }
      `,
    text: `Вычисляемое свойство announcement будет пересчитано 
            только тогда, когда изменится одна из его зависимостей 
            - userId или message. `,
    ref:[ "https://codepen.io/garevna/pen/veqNzL" ]
  },
  {
    head: "$emit",
    pict: false,
    code:`
      data : {
        userId: "Иван",
        message: "зайди в бухгалтерию"
      },
      computed: {
        announcement: function () {
          return this.userId + ", " + this.message
        }
      }
      `,
    text: `Вычисляемое свойство announcement будет пересчитано 
            только тогда, когда изменится одна из его зависимостей 
            - userId или message. `,
    ref:[ "https://plnkr.co/edit/vdEIxZYvoN4x6VFMX3kb" ]
  },
]
// ======================================================== Directives
usersPosts ["Directives"] = [
  {
    head: "v-bind",
    pict: false,
    text: `Динамически связывает атрибуты тега или 
          входной параметр компонента с выражением`,
    code: `
      // imageSrc - свойство родителя
      <img v-bind:src = "imageSrc"/>
      // сокращенная запись:
      <img :src = "imageSrc"/>`,
    ref:[
      "https://codepen.io/garevna/pen/eGRawR",
      "https://codepen.io/garevna/pen/VMzYdP"
    ]
  },
  {
    head: "v-model",
    pict: false,
    text: `Служит для двустороннего связывания потомка и родителя. 
            Соответствующее свойство, указанное в директиве,
            может быть изменено в потомке, что будет реактивно 
            отражено в родителе. Обычно используется для элементов
            форм`,
    code: ``,
    ref:[
		"https://codepen.io/garevna/pen/aLypvq",
		"https://codepen.io/garevna/pen/oGKzOB",
		"https://codepen.io/garevna/pen/xXvRyP",
		"https://codepen.io/garevna/pen/PJMbrr",
		"https://codepen.io/garevna/pen/WZVRKj",
		"https://codepen.io/garevna/pen/RLQNjm"
    ]
  },
  {
    head: "v-for",
    pict: false,
    text: `Служит для создания группы элементов
			на основе массива входных данных. 
			Данные массива могут быть как примитивами,
			так и объектами или массивами`,
    code: `
		<div v-for="item in items">
			{{ item.name }}
			{{ item.price }}
		</div>
	`,
    ref:[
		"https://codepen.io/garevna/pen/EwXGPB"
    ]
  },
  {
    head: "v-show",
    pict: false,
    text: `Директива, позволяющая управлять отображением элементов 
            в представлении на основании значений переменных модели`,
    ref:[
      "https://codepen.io/garevna/pen/OxjRJW"
    ]
  },
  {
    head: "v-if",
    pict: false,
    text: `Условный рендеринг. В отличие от директивы v-show, 
            добавляет или удаляет элемент DOM в зависимости от
            значения условного выражения expr. Директива v-else
            обеспечивает рендеринг альтернативного варианта, если
            условное выражение expr принимает значение false`,
    code: `
      <p v-if="expr">{{ message }}</p>
      <p v-else> {{ error }}</p>`,
    ref:[
      "https://codepen.io/garevna/pen/EwvgKJ",
      "https://codepen.io/garevna/pen/NavRdX"
    ]
  },
  {
    head: "v-on",
    pict: false,
    text: `Прикрепляет к элементу прослушиватель событий. 
            Тип события является аргументом директивы.`,
    code:`
      <button v-on:click = “clickHandler">
        Кликни!
      </button>
      `,
    ref:[
      "https://codepen.io/garevna/pen/PJjgPm",
      "https://codepen.io/garevna/pen/veJZOb",
      "https://codepen.io/garevna/pen/YrVpmm"
      
    ]
  },
  {
    head: "v-cloak",
    pict: false,
    text: `Элемент не будет показан до окончания компиляции. Эта 
          директива позволяет избежать отображения "усатого" 
          ( {{...}} ) синтаксиса клиенту`,
    code:`
      <div v-cloak>
          {{ message }}
      </div>
      `,
    ref:[
    ]
  }
]
// ====================================================== Components
usersPosts ['Components'] = [
  {
    head: "Component",
    pict: false,
    text: ``,
    ref:[
	"https://codepen.io/garevna/pen/EwXGPB",
	"https://codepen.io/garevna/pen/pWdLoz"
	]
  },
  {
    head: "Component",
    pict: false,
    text: `Многократно используемый компонент, 
			определенный в глобальной области видимости,
			с динамически обновляемым контентом`,
    ref:[
		"https://plnkr.co/edit/77n86nKgvcllq2nRKLGb?p=preview"
	]
  }
]
// ====================================================== Templates
usersPosts ['Templates'] = [
  {
    head: "String",
    pict: false,
    text: `Шаблон компонента в виде текстовой строки имеет 
          единственное достоинство - широкую поддержку браузеров`,
    code:`
        Vue.component('comp', {
          template: 
            "<div class='comp'></div>"
        })
      `,
    ref:false
  },
  {
    head: "literal",
    pict: false,
    text: `Литералы шаблонов ES6 («backticks») позволяют определять 
          шаблон на нескольких строках, чего нельзя сделать в 
          обычной строке Javascript. Такие шаблоны намного легче 
          читать, и сейчас они поддерживаются во многих новых 
          браузерах.`,
    code:`
        Vue.component('comp', {
          template: 
            \`<div class='comp'
                @click='check'>
            </div>\`,
          methods: {
            check () {
              this.show = !this.show;
            }
          }
        })
      `,
    ref:false
  },
  {
    head: "X-template",
    pict: false,
    text: `С помощью этого метода шаблон определяется внутри тега 
          скрипта в файле index.html. Тэг скрипта маркируется как 
          text/x-template и имеет идентификатор, на который будет 
          ссылка в определении компонента:
          Vue.component('sample', { template: '#my-template' });
          Этот метод позволяет писать валидный код HTML, но при 
          этом шаблон отделен от определения компонента.`,
    code:`
      <script type="text/x-template" id="my-template">
	      <div class="wrapper" @click="callback">
		      <div class="title"></div>
	      </div>
      </script>`,
    ref:[""]
  },
  {
    head: "inline",
    pict: false,
    text: `Атрибут inline-template в теге компонента 
          указывает Vue, что внутренний контент является 
          шаблоном, а не распределенным контентом (слоты).
          Преимущество  этого метода заключается в том, 
          что контент находится в правильном месте в 
          HTML-шаблоне и поэтому может отображаться при 
          загрузке страницы, а не в ожидании запуска 
          Javascript.`,
    code:`
      <sample-component inline-template>
        <div class="wrapper"
            @click="check">
          <div class="title"></div>
        </div>
      </my-checkbox>`,
    ref:["https://codepen.io/garevna/pen/dVdORP"]
  },
  {
    head: "render function",
    pict: false,
    text: `При создании динамических компонентов с переменными
            входными параметрами функции рендеринга зачастую 
            оказываются более удобны, чем другие способы задания
            шаблона компонента. Часто это связано с использованием
            слотов. Фактически во время сборки все шаблоны Vue.js 
            компилируются в функции рендеринга. Шаблоны просто 
            обеспечивают удобный и более привычный синтаксический 
            сахар поверх функций рендеринга. Компоненты с функциями 
            рендеринга не имеют тега или свойства template. Вместо 
            этого внутри компонента объявляется функция render, 
            которой передается в качестве аргумента метод 
            createElement (принятый псевдоним h), и которая 
            возвращает элемент, созданный с помощью этой функции. 
            Шаблоны Vue имеют множество удобных функций для 
            добавления базовой логики и привязки к шаблонам. 
            Функции Render не имеют к ним доступа. 
            Вместо этого они должны быть реализованы на простом 
            Javascript, который для большинства директив довольно 
            прост.`,
    code:`
      const Post = Vue.component('new-post', {
        render: function (createElement) {
          var header = this.$slots.header
          var body   = this.$slots.default
          var footer = this.$slots.footer
          return createElement('div', [
            createElement('header', header),
            createElement('main', body),
            createElement('footer', footer)
          ])
        }
      })`,
    ref:[
      "https://plnkr.co/edit/ORRVJLhVVUyE2OJIoX9R?p=preview",
      "https://plnkr.co/edit/H0GhWgLKuiw1zaFGQLZ1?p=preview"
    ]
  },
  {
    head: "JSX",
    pict: false,
    text: `JSX является самым спорным вариантом шаблона во Vue.
            Некоторые разработчики рассматривают JSX как нечто 
            уродливое, противоречащее главной концепции Vue.
            JSX требует предварительной компиляции, так как он не 
            читается браузерами.`,
    ref:false
  },
  {
    head: "SFC",
    pict: false,
    text: `При условии использованя инструментов сборки 
          Single File Components является наилучшим вариантом 
          создания шаблона компонента. 
          Этот способ вобрал в себя лучшее из всех остальных
          способов: он позволяет писать валидную разметку, 
          сохраняя при этом все части компонента в одном файле
          с раширением vue.
          Этот способ требует транспиляции, и некоторые IDE не 
          поддерживают подсветку синтаксиса vue-файлов.`,
    ref:false
  }
]
// ============================================================= Slots
usersPosts ['Slots'] = [
  {
    head: "slot",
    pict: false,
    text: `Простые (не именованные) слоты`,
    ref:[
      "https://codepen.io/garevna/pen/QqmbrO",
      "https://plnkr.co/edit/fjZol88VeRAOgn9OSe45?p=preview",
      "https://plnkr.co/edit/x7XCNVDkGfm6JPvhVikz?p=preview"
    ]
  },
  {
    head: "named slots",
    pict: false,
    text: `Именованные слоты`,
    ref:["https://plnkr.co/edit/9nFUtNDqeZ1JX003oDHO?p=preview"]
  },
  {
    head: "scoped slots",
    pict: false,
    text: `Слоты с контекстом (областью видимости)`,
    ref:[
      "https://plnkr.co/edit/H0GhWgLKuiw1zaFGQLZ1?p=preview",
      "https://plnkr.co/edit/7gKCXrakfSf5EDFBokN5?p=preview",
      
    ]
  },
  {
    head: "scoped slots",
    pict: false,
    text: `Пример использования именованных слотов`,
    ref:["https://plnkr.co/edit/7gKCXrakfSf5EDFBokN5?p=preview"]
  }
]
// ====================================================== Transitions
usersPosts ['Transitions'] = [
  {
    head: "Анимация",
    pict: false,
    text: `Использование встроенных компонентов transition и transition-group 
            с классами -enter | -leave для анимации появления / исчезновения
            элементов DOM`,
    ref:[
      "https://codepen.io/garevna/pen/XewZZz",
	  "https://plnkr.co/edit/c5pN5tiIEU75ZbnDMxdW?p=preview",
	  "https://plnkr.co/edit/brgMsFIcY71mTr8Yf44m?p=preview",
      "https://codepen.io/garevna/pen/yzWrdN",
      "https://codepen.io/garevna/pen/mBYNEM"
    ]
  }
]
// =========================================================== Router
usersPosts ['Router'] = [
  {
    head: "Роутер",
    pict: false,
    text: `Роутеру нужно указать массив путей (routes).
			Каждый путь должен указывать на компонент.
			Для вставки ссылок на маршруты в html-код служит
			компонент router-link с атрибутом to, значение
			которого является машрутом: 
			<router-link to="/Библиотека"></router-link>
			Содержимое компонента (после рендеринга)
			будет помощено в контейнер <router-view>
			</router-view>.`,
    code:`
		// создаем массив маршрутов
		const routes = [
			{
				path: '/Библиотека',
				component: Library
			},
			{
				path: '/Кафе', component:
				Cafe
			}
		]
		// создаем маршрутизатор и 
		// передаем ему маршруты
		const router = new VueRouter ( {
			routes: routes
		})
		// создаем экземпляр Vue
		// и привязываем к нему роутер
		const app = new Vue ({
			el: "#app",
			router
		})
		// Теперь в приложении можно
		// вставлять ссылки <router-link>
		// и зарезервировать место, куда
		// будет вставлен компонент,
		// соответствующий пути перехода 
		`,
    ref:["https://plnkr.co/edit/M2DdjqrXnIbOqQIbWGEh?p=preview"]
  },
  {
    head: "Роутер",
    pict: false,
    text: `Роутер с анимацией: Винсент ван Гог`,
    ref:["https://plnkr.co/edit/fqer871u9AOOORbbVu5E?p=preview"]
  },
  {
    head: "Nested routes",
    pict: false,
    text: `Роутер с вложенными именованными маршрутами`,
    ref:["https://plnkr.co/edit/9tX5uw1cEMTHEaSODs3Z?p=preview"]
  },
  
]
// =========================================================== $http
usersPosts ['$http'] = [
  {
    head: "vue-resource",
    pict: false,
    text: `Метод this.$http.get( sourceUrl ) возвращает объект
		promise, т.е. объект, имеющий состояние. 
		Пока операция не завершена, состояние объекта
		будет pending, т.е. объект находится в ожидании 
		завершения операции. Если операция завершена 
		успешно, состояние объекта становится fulfilled,
		в противном случае - rejected. 
		Для обработки изменения состояния объекта на него 
		нужно навесить обработчики`,
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
    ref:["https://plnkr.co/edit/lZLVjgPDmkpgmIwzebMd?p=preview"]
  },
  {
    head: "JSON",
    pict: false,
    text: `Для создания и редактирования файлов JSON можно использовать jsoneditoronline (ссылка ниже). 
		Создайте репозиторий на гитхабе, куда поместите свой JSON-файл. Сервис jsonplaceholder 
		можно использовать как эмулятор удаленного сервера`,
    ref:[
	    "http://www.jsoneditoronline.org/",
	    "https://jsonplaceholder.typicode.com/"
    ]
  }
]

