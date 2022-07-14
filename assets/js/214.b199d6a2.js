(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{522:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"响应函数-handlers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应函数-handlers"}},[t._v("#")]),t._v(" 响应函数(Handlers)")]),t._v(" "),s("p",[t._v("第二个重要的组件就是响应函数(Handlers)，也就是我们通常所说的视图(views)。")]),t._v(" "),s("p",[t._v("在 Sanic 中，响应函数可以是任何一个可调用程序，它至少以一个 "),s("code",[t._v("request")]),t._v(" 实例作为参数，并返回一个 "),s("code",[t._v("HTTPResponse")]),t._v(" 实例或一个执行其他操作的协同程序作为响应。")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("哈? 😳")]),t._v(" "),s("p",[t._v("它既可以是一个普通函数，也可以是一个异步的函数。")]),t._v(" "),s("p",[t._v("它的工作是响应指定端点的访问， 并执行一些指定的操作，所以这里是承载业务逻辑代码的地方。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("i_am_a_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HTTPResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("i_am_ALSO_a_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HTTPResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示：")]),t._v(" "),s("p",[t._v("如果您想要了解更多关于封装逻辑的信息，可以通过 "),s("RouterLink",{attrs:{to:"/zh/guide/advanced/class-based-views.html"}},[t._v("基于类的视图")]),t._v(" 这一章节来了解更多")],1)]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("之后，您需要做的就只是将其挂载到服务端点上。 在 "),s("RouterLink",{attrs:{to:"/zh/guide/basics/routing.html"}},[t._v("路由")]),t._v(" 这一章节，我们将会了解更多相关的内容")],1),t._v(" "),s("p",[t._v("让我们来用一个示例进行讲解：")]),t._v(" "),s("ul",[s("li",[t._v("我们在响应函数实例中使用了装饰器："),s("code",[t._v("@app.get()")])]),t._v(" "),s("li",[t._v("我们还使用了函数 "),s("code",[t._v("text()")]),t._v(" 来快速的生成一个文本类型的响应对象。")])]),t._v(" "),s("p",[t._v("任务完成 💪")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I said foo!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"关于-async-a-word-about-async"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-async-a-word-about-async"}},[t._v("#")]),t._v(" 关于 async …(A word about async...)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("编写普通的响应函数是完全可行的。")]),t._v(" "),s("p",[t._v("在下面的例子中，我们通过  "),s("code",[t._v("time.sleep()")]),t._v(" 方法来等待 100 毫秒，用于模拟数据读取或者内容处理等操作。")]),t._v(" "),s("p",[t._v("使用 4 个工作进程和一个通用基准工具进行性能测试，得到以下数据：")]),t._v(" "),s("ul",[s("li",[t._v("在 30.10 秒内，共进行了 956 次请求")]),t._v(" "),s("li",[t._v("平均每秒响应 31.76 次请求")])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/sync"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("当我们使用异步解决方案时，性能将会得到极大的提升，您会看到一组惊人的数据​ 🚀。")]),t._v(" "),s("p",[t._v("同样使用 4 个子进程和一个相同的基准工具再次进行性能测试，得到以下数据:")]),t._v(" "),s("ul",[s("li",[t._v("在 30.10 秒内，共进行了 "),s("strong",[t._v("115,590")]),t._v(" 次请求")]),t._v(" "),s("li",[t._v("平均每秒响应 "),s("strong",[t._v("3843.17")]),t._v(" 次请求")])]),t._v(" "),s("p",[t._v("😳 Wow！")]),t._v(" "),s("p",[t._v("好吧，这个结果有些夸张，甚至有些好笑。这个例子有一些极端了，您所看到的任何一个基准测试都是如此的。这样的测试方式在实际生产环境中没有任何意义，这个例子旨在告诉我们在网络编程中 "),s("code",[t._v("async/await")]),t._v(" 的优势有多么大。像 Sanic 和其他的异步 Python 库并不是让程序执行速度变得更快，只是让它们的组织方式变得更为高效而已。")]),t._v(" "),s("p",[t._v("在我们刚才的例子中，异步版本的效率要高得多，因为当一个请求处于休眠状态时，它能够响应另一个请求、另一个请求、另一个请求、另一个请求...")]),t._v(" "),s("p",[t._v("没错，重点就在这里，Sanic 之所以快速是因为它充分组织了这些可用资源来提升性能。它可以同时响应多个请求，这意味着它每秒可以处理更多的请求。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/async"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("async_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("常见错误：")]),t._v(" "),s("p",[t._v("请尽量避免使用同步的工具，或许您需要 ping 一下您的站点来进行测试。")]),t._v(" "),s("p",[t._v("请尽可能的使用异步工具来避免发生阻塞。您的服务器将感谢您。在 "),s("a",{attrs:{href:"https://github.com/mekicha/awesome-sanic",target:"_blank",rel:"noopener noreferrer"}},[t._v("Awesome Sanic"),s("OutboundLink")],1),t._v(" 中有许多性能优秀的 Sanic 异步工具，您可以在那里找到合适自己的异步工具。")]),t._v(" "),s("p",[t._v("Sanic 的测试套件 (sanic-testing) 充分的发挥了 "),s("a",{attrs:{href:"https://www.python-httpx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("httpx"),s("OutboundLink")],1),t._v(" 的性能 😉。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"带完整注释的响应函数-a-fully-annotated-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带完整注释的响应函数-a-fully-annotated-handler"}},[t._v("#")]),t._v(" 带完整注释的响应函数(A fully annotated handler)")]),t._v(" "),s("p",[t._v("Sanic 支持使用类型注解，下面的例子送给喜欢使用类型注解的人…")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HTTPResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Request\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/typed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("typed_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" HTTPResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);