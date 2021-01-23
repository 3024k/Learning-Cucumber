$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.Launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 530345700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Valid username and password",
  "description": "",
  "id": "login-into-account;valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter correct username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicked on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am login into application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.I_launch_the_application()"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.I_enter_correct_username_and_password()"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicked_on_Login_Button()"
});
formatter.result({
  "duration": 102400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.I_am_login_into_application()"
});
formatter.result({
  "duration": 47700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.Launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Valid username and password",
  "description": "",
  "id": "login-into-account;valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter correct username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "clicked on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I am login into application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.I_launch_the_application()"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.I_enter_correct_username_and_password()"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicked_on_Login_Button()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.I_am_login_into_application()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.uri("shopping.feature");
formatter.feature({
  "line": 3,
  "name": "Check my basket application",
  "description": "",
  "id": "check-my-basket-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Application_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"\u003cBuying_Products\u003e\" buying product",
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Shoes",
        "Adidas"
      ],
      "line": 13
    },
    {
      "cells": [
        "T-shirt",
        "4F"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"\u003cBasket_status\u003e\" be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"\u003cBuy_status\u003e\" buy an item",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket;",
  "rows": [
    {
      "cells": [
        "Buying_Products",
        "Basket_status",
        "Buy_status"
      ],
      "line": 20,
      "id": "check-my-basket-application;no-item-selected-in-basket;;1"
    },
    {
      "cells": [
        "without",
        "should",
        "cannot"
      ],
      "line": 21,
      "id": "check-my-basket-application;no-item-selected-in-basket;;2"
    },
    {
      "cells": [
        "with",
        "shouldnot",
        "can"
      ],
      "line": 22,
      "id": "check-my-basket-application;no-item-selected-in-basket;;3"
    },
    {
      "cells": [
        "xxx",
        "yyy",
        "zzz"
      ],
      "line": 23,
      "id": "check-my-basket-application;no-item-selected-in-basket;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Application_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"without\" buying product",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Shoes",
        "Adidas"
      ],
      "line": 13
    },
    {
      "cells": [
        "T-shirt",
        "4F"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"should\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"cannot\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application(DataTable)"
});
formatter.result({
  "duration": 4496000,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String,DataTable)"
});
formatter.result({
  "duration": 1131900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 64300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cannot",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 108200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Application_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"with\" buying product",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Shoes",
        "Adidas"
      ],
      "line": 13
    },
    {
      "cells": [
        "T-shirt",
        "4F"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"shouldnot\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"can\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application(DataTable)"
});
formatter.result({
  "duration": 209100,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String,DataTable)"
});
formatter.result({
  "duration": 341700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "can",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 106800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Application_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"xxx\" buying product",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Shoes",
        "Adidas"
      ],
      "line": 13
    },
    {
      "cells": [
        "T-shirt",
        "4F"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"yyy\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"zzz\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application(DataTable)"
});
formatter.result({
  "duration": 191900,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxx",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String,DataTable)"
});
formatter.result({
  "duration": 226800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yyy",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 65800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zzz",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 71300,
  "status": "passed"
});
});