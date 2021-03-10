(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{420:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("h2",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic holds the configuration in the config attribute of the application object. The configuration object is merely an object that can be modified either using dot-notation or like a dictionary.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB_NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appdb"')]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DB_USER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appuser"')]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("You can also use the "),s("code",[t._v("update()")]),t._v(" method like on regular dictionaries.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("db_settings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appdb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_USER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appuser'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db_settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("It is standard practice in Sanic to name your config values in "),s("strong",[t._v("uppercase letters")]),t._v(". Indeed, you may experience weird behaviors if you start mixing uppercase and lowercase names.")])]),t._v(" "),s("h2",{attrs:{id:"loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading"}},[t._v("#")]),t._v(" Loading")]),t._v(" "),s("h3",{attrs:{id:"environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment variables")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Any environment variables defined with the "),s("code",[t._v("SANIC_")]),t._v(" prefix will be applied to the Sanic config. For example, setting "),s("code",[t._v("SANIC_REQUEST_TIMEOUT")]),t._v(" will be loaded by the application automatically and fed into the "),s("code",[t._v("REQUEST_TIMEOUT")]),t._v(" config variable.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SANIC_REQUEST_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TIMEOUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("You can change the prefix that Sanic is expecting at startup.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYAPP_REQUEST_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" load_env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MYAPP_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TIMEOUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("You can also disable environment variable loading completely.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" load_env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"using-sanic-update-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-sanic-update-config"}},[t._v("#")]),t._v(" Using Sanic.update_config")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Sanic")]),t._v(" instance has a "),s("em",[t._v("very")]),t._v(" versatile method for loading config: "),s("code",[t._v("app.update_config")]),t._v(". You can feed it a path to a file, a dictionary, a class, or just about any other sort of object.")]),t._v(" "),s("h4",{attrs:{id:"from-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-a-file"}},[t._v("#")]),t._v(" From a file")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Let's say you have "),s("code",[t._v("my_config.py")]),t._v(" file that looks like this.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my_config.py")]),t._v("\nA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("You can load this as config values by passing its path to "),s("code",[t._v("app.update_config")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/my_config.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("This path also accepts bash style environment variables.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("my_path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to"')]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${my_path}/my_config.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Just remember that you have to provide environment variables in the format "),s("code",[t._v("${environment_variable}")]),t._v(" and that "),s("code",[t._v("$environment_variable")]),t._v(' is not expanded (is treated as "plain" text).')])]),t._v(" "),s("h4",{attrs:{id:"from-a-dict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-a-dict"}},[t._v("#")]),t._v(" From a dict")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("The "),s("code",[t._v("app.update_config")]),t._v(" method also works on plain dictionaries.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"from-a-class-or-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-a-class-or-object"}},[t._v("#")]),t._v(" From a class or object")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("You can define your own config class, and pass it to "),s("code",[t._v("app.update_config")])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    B "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("It even could be instantiated.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"builtin-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#builtin-values"}},[t._v("#")]),t._v(" Builtin values")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Variable")])]),t._v(" "),s("th",[s("strong",[t._v("Default")])]),t._v(" "),s("th",[s("strong",[t._v("Description")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("REQUEST_MAX_SIZE")]),t._v(" "),s("td",[t._v("100000000")]),t._v(" "),s("td",[t._v("How big a request may be (bytes)")])]),t._v(" "),s("tr",[s("td",[t._v("REQUEST_BUFFER_QUEUE_SIZE")]),t._v(" "),s("td",[t._v("100")]),t._v(" "),s("td",[t._v("Request streaming buffer queue size")])]),t._v(" "),s("tr",[s("td",[t._v("REQUEST_TIMEOUT")]),t._v(" "),s("td",[t._v("60")]),t._v(" "),s("td",[t._v("How long a request can take to arrive (sec)")])]),t._v(" "),s("tr",[s("td",[t._v("RESPONSE_TIMEOUT")]),t._v(" "),s("td",[t._v("60")]),t._v(" "),s("td",[t._v("How long a response can take to process (sec)")])]),t._v(" "),s("tr",[s("td",[t._v("KEEP_ALIVE")]),t._v(" "),s("td",[t._v("True")]),t._v(" "),s("td",[t._v("Disables keep-alive when False")])]),t._v(" "),s("tr",[s("td",[t._v("KEEP_ALIVE_TIMEOUT")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("How long to hold a TCP connection open (sec)")])]),t._v(" "),s("tr",[s("td",[t._v("WEBSOCKET_MAX_SIZE")]),t._v(" "),s("td",[t._v("2^20")]),t._v(" "),s("td",[t._v("Maximum size for incoming messages (bytes)")])]),t._v(" "),s("tr",[s("td",[t._v("WEBSOCKET_MAX_QUEUE")]),t._v(" "),s("td",[t._v("32")]),t._v(" "),s("td",[t._v("Maximum length of the queue that holds incoming messages")])]),t._v(" "),s("tr",[s("td",[t._v("WEBSOCKET_READ_LIMIT")]),t._v(" "),s("td",[t._v("2^16")]),t._v(" "),s("td",[t._v("High-water limit of the buffer for incoming bytes")])]),t._v(" "),s("tr",[s("td",[t._v("WEBSOCKET_WRITE_LIMIT")]),t._v(" "),s("td",[t._v("2^16")]),t._v(" "),s("td",[t._v("High-water limit of the buffer for outgoing bytes")])]),t._v(" "),s("tr",[s("td",[t._v("WEBSOCKET_PING_INTERVAL")]),t._v(" "),s("td",[t._v("20")]),t._v(" "),s("td",[t._v("A Ping frame is sent every ping_interval seconds.")])]),t._v(" "),s("tr",[s("td",[t._v("WEBSOCKET_PING_TIMEOUT")]),t._v(" "),s("td",[t._v("20")]),t._v(" "),s("td",[t._v("Connection is closed when Pong is not received after ping_timeout seconds")])]),t._v(" "),s("tr",[s("td",[t._v("GRACEFUL_SHUTDOWN_TIMEOUT")]),t._v(" "),s("td",[t._v("15.0")]),t._v(" "),s("td",[t._v("How long to wait to force close non-idle connection (sec)")])]),t._v(" "),s("tr",[s("td",[t._v("ACCESS_LOG")]),t._v(" "),s("td",[t._v("True")]),t._v(" "),s("td",[t._v("Disable or enable access log")])]),t._v(" "),s("tr",[s("td",[t._v("FORWARDED_SECRET")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("Used to securely identify a specific proxy server (see below)")])]),t._v(" "),s("tr",[s("td",[t._v("PROXIES_COUNT")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("The number of proxy servers in front of the app (e.g. nginx; see below)")])]),t._v(" "),s("tr",[s("td",[t._v("FORWARDED_FOR_HEADER")]),t._v(" "),s("td",[t._v("X-Forwarded-For")]),t._v(" "),s("td",[t._v('The name of "X-Forwarded-For" HTTP header that contains client and proxy ip')])]),t._v(" "),s("tr",[s("td",[t._v("REAL_IP_HEADER")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v('The name of "X-Real-IP" HTTP header that contains real client ip')])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("FYI")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("WEBSOCKET_")]),t._v(" values will be ignored if in ASGI mode.")])]),t._v(" "),s("h2",{attrs:{id:"timeouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeouts"}},[t._v("#")]),t._v(" Timeouts")]),t._v(" "),s("h3",{attrs:{id:"request-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-timeout"}},[t._v("#")]),t._v(" REQUEST_TIMEOUT")]),t._v(" "),s("p",[t._v("A request timeout measures the duration of time between the instant when a new open TCP connection is passed to the\nSanic backend server, and the instant when the whole HTTP request is received. If the time taken exceeds the\n"),s("code",[t._v("REQUEST_TIMEOUT")]),t._v(" value (in seconds), this is considered a Client Error so Sanic generates an "),s("code",[t._v("HTTP 408")]),t._v(" response\nand sends that to the client. Set this parameter's value higher if your clients routinely pass very large request payloads\nor upload requests very slowly.")]),t._v(" "),s("h3",{attrs:{id:"response-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-timeout"}},[t._v("#")]),t._v(" RESPONSE_TIMEOUT")]),t._v(" "),s("p",[t._v("A response timeout measures the duration of time between the instant the Sanic server passes the HTTP request to the\nSanic App, and the instant a HTTP response is sent to the client. If the time taken exceeds the "),s("code",[t._v("RESPONSE_TIMEOUT")]),t._v("\nvalue (in seconds), this is considered a Server Error so Sanic generates an "),s("code",[t._v("HTTP 503")]),t._v(" response and sends that to the\nclient. Set this parameter's value higher if your application is likely to have long-running process that delay the\ngeneration of a response.")]),t._v(" "),s("h3",{attrs:{id:"keep-alive-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-timeout"}},[t._v("#")]),t._v(" KEEP_ALIVE_TIMEOUT")]),t._v(" "),s("h4",{attrs:{id:"what-is-keep-alive-and-what-does-the-keep-alive-timeout-value-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-keep-alive-and-what-does-the-keep-alive-timeout-value-do"}},[t._v("#")]),t._v(" What is Keep Alive? And what does the Keep Alive Timeout value do?")]),t._v(" "),s("p",[s("code",[t._v("Keep-Alive")]),t._v(" is a HTTP feature introduced in "),s("code",[t._v("HTTP 1.1")]),t._v(". When sending a HTTP request, the client (usually a web browser application)\ncan set a "),s("code",[t._v("Keep-Alive")]),t._v(" header to indicate the http server (Sanic) to not close the TCP connection after it has send the response.\nThis allows the client to reuse the existing TCP connection to send subsequent HTTP requests, and ensures more efficient\nnetwork traffic for both the client and the server.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("KEEP_ALIVE")]),t._v(" config variable is set to "),s("code",[t._v("True")]),t._v(" in Sanic by default. If you don't need this feature in your application,\nset it to "),s("code",[t._v("False")]),t._v(" to cause all client connections to close immediately after a response is sent, regardless of\nthe "),s("code",[t._v("Keep-Alive")]),t._v(" header on the request.")]),t._v(" "),s("p",[t._v("The amount of time the server holds the TCP connection open is decided by the server itself.\nIn Sanic, that value is configured using the "),s("code",[t._v("KEEP_ALIVE_TIMEOUT")]),t._v(" value. By default, it is set to 5 seconds.\nThis is the same default setting as the Apache HTTP server and is a good balance between allowing enough time for\nthe client to send a new request, and not holding open too many connections at once. Do not exceed 75 seconds unless\nyou know your clients are using a browser which supports TCP connections held open for that long.")]),t._v(" "),s("p",[t._v("For reference:")]),t._v(" "),s("ul",[s("li",[t._v("Apache httpd server default keepalive timeout = 5 seconds")]),t._v(" "),s("li",[t._v("Nginx server default keepalive timeout = 75 seconds")]),t._v(" "),s("li",[t._v("Nginx performance tuning guidelines uses keepalive = 15 seconds")]),t._v(" "),s("li",[t._v("IE (5-9) client hard keepalive limit = 60 seconds")]),t._v(" "),s("li",[t._v("Firefox client hard keepalive limit = 115 seconds")]),t._v(" "),s("li",[t._v("Opera 11 client hard keepalive limit = 120 seconds")]),t._v(" "),s("li",[t._v("Chrome 13+ client keepalive limit > 300+ seconds")])]),t._v(" "),s("h2",{attrs:{id:"proxy-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configuration"}},[t._v("#")]),t._v(" Proxy configuration")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/advanced/proxy-headers.html"}},[t._v("proxy configuration section")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);