define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;

      config.title = 'Aurelia - School of net';
      config.map([{
        route: [''],
        name: 'home',
        moduleId: 'home/index',
        title: 'Listing contacts'
      }, {
        route: ['insert'],
        name: 'insert',
        moduleId: 'insert/insert',
        title: 'Inserting new contact'
      }, {
        route: ['edit/:name'],
        name: 'edit',
        moduleId: 'edit/edit',
        title: 'Editing current contact'
      }]);
    };

    App.prototype.alert = function (_alert) {
      function alert() {
        return _alert.apply(this, arguments);
      }

      alert.toString = function () {
        return _alert.toString();
      };

      return alert;
    }(function () {
      alert('SON');
    });

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('hello',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Hello = exports.Hello = function Hello() {
    _classCallCheck(this, Hello);
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('home/index',['exports', './../Contact'], function (exports, _Contact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function () {
    function Home() {
      _classCallCheck(this, Home);

      this.heading = 'List of contacts';
      this.contacts = new _Contact.Contact().getData();
    }

    Home.prototype.deleteContact = function deleteContact(name) {
      this.reg = this.contacts.filter(function (el) {
        return el.name == name;
      });

      var index = this.contacts.indexOf(this.reg[0]);

      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    };

    return Home;
  }();

  ;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('edit/edit',['exports', './../Contact'], function (exports, _Contact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Edit = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Edit = exports.Edit = function () {
    function Edit() {
      _classCallCheck(this, Edit);

      this.heading = 'Edit contact';
      this.contact = new _Contact.Contact();
      this.reg = {};
    }

    Edit.prototype.activate = function activate(params, routeConfig) {
      this.routeConfig = routeConfig;
      this.reg = this.contact.getData().filter(function (el) {
        return el.name == params.name;
      });

      this.name = this.reg[0].name;
      this.lastname = this.reg[0].lastname;
      this.telephone = this.reg[0].telephone;
    };

    Edit.prototype.editContact = function editContact() {
      this.reg[0].name = this.name;
      this.reg[0].lastname = this.lastname;
      this.reg[0].telephone = this.telephone;
    };

    return Edit;
  }();
});
define('insert/insert',['exports', './../Contact'], function (exports, _Contact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Insert = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Insert = exports.Insert = function () {
    function Insert() {
      _classCallCheck(this, Insert);

      this.heading = "Add a new contact";
      this.name = '';
      this.lastname = '';
      this.telephone = 0;
    }

    Insert.prototype.addContact = function addContact() {
      var contact = new _Contact.Contact();

      contact.getData().push(contact.formatObject(this.name, this.lastname, this.telephone));

      console.log(contact.getData());
    };

    return Insert;
  }();
});
define('Contact',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var data = [];

  var Contact = exports.Contact = function () {
    function Contact() {
      _classCallCheck(this, Contact);
    }

    Contact.prototype.getData = function getData() {
      return data;
    };

    Contact.prototype.setData = function setData(_data) {
      data = _data;
    };

    Contact.prototype.formatObject = function formatObject(name, lastname, telephone) {
      return {
        name: name,
        lastname: lastname,
        telephone: telephone
      };
    };

    return Contact;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n  <!--<h1>${message}</h1>-->\n  <!---->\n  <!--INPUT-->\n  <!--<input type=\"text\" value.bind=\"message\">-->\n  <!--<a href=\"\" href.bind=\"message\">${message}</a>-->\n  <!--<button type=\"button\" click.trigger=\"alert()\">${message}</button>-->\n\n  <!--<require from=\"./hello.html\"></require>-->\n  <!--<hello h1-message=\"H1\"></hello>-->\n\n  <!--<h1 as-element=\"hello\"></h1>-->\n\n  <!--<p repeat.for=\"number of repeater\">${number} </p>-->\n</template>\n"; });
define('text!hello.html', ['module'], function(module) { module.exports = "<template bindable=\"h1Message, h2Message\">\n  <h1>${h1Message}</h1>\n</template>\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${heading}</h1>\n\n  <table>\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Lastname</th>\n        <th>Telephone</th>\n        <th>Edit</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr repeat.for=\"contact of contacts\">\n        <td>${contact.name}</td>\n        <td>${contact.lastname}</td>\n        <td>${contact.telephone}</td>\n        <td><a route-href=\"route: edit; params.bind: { name: contact.name }\">Edit</a></td>\n        <td><button type=\"button\" click.trigger=\"deleteContact(contact.name)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</template>\n"; });
define('text!edit/edit.html', ['module'], function(module) { module.exports = "<template>\n  <h2>${heading}</h2>\n\n  <form method=\"post\" submit.trigger=\"editContact()\">\n    <input type=\"text\" name=\"name\" value.bind=\"name\">\n    <input type=\"text\" name=\"lastname\" value.bind=\"lastname\">\n    <input type=\"tel\" name=\"telephone\" value.bind=\"telephone\">\n\n    <button type=\"submit\">Edit Contact</button>\n  </form>\n</template>\n"; });
define('text!insert/insert.html', ['module'], function(module) { module.exports = "<template>\n  <h2>${heading}</h2>\n\n  <form method=\"post\" submit.trigger=\"addContact()\">\n    <input type=\"text\" name=\"name\" value.bind=\"name\">\n    <input type=\"text\" name=\"lastname\" value.bind=\"lastname\">\n    <input type=\"tel\" name=\"telephone\" value.bind=\"telephone\">\n\n    <button type=\"submit\">Add Contact</button>\n  </form>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map