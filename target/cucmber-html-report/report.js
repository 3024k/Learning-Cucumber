$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shopping.feature");
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
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I browse \"\u003cBuying_Products\u003e\" buying product",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my basket \"\u003cBasket_status\u003e\" be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I \"\u003cBuy_status\u003e\" buy an item",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
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
      "line": 14,
      "id": "check-my-basket-application;no-item-selected-in-basket;;1"
    },
    {
      "cells": [
        "without",
        "should",
        "cannot"
      ],
      "line": 15,
      "id": "check-my-basket-application;no-item-selected-in-basket;;2"
    },
    {
      "cells": [
        "with",
        "shouldnot",
        "can"
      ],
      "line": 16,
      "id": "check-my-basket-application;no-item-selected-in-basket;;3"
    },
    {
      "cells": [
        "xxx",
        "yyy",
        "zzz"
      ],
      "line": 17,
      "id": "check-my-basket-application;no-item-selected-in-basket;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
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
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I browse \"without\" buying product",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my basket \"should\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I \"cannot\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 114678500,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 76300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String)"
});
formatter.result({
  "duration": 2052000,
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
  "duration": 85100,
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
  "duration": 125100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I browse \"with\" buying product",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my basket \"shouldnot\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I \"can\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 88800,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 66300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String)"
});
formatter.result({
  "duration": 1873200,
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
  "duration": 459800,
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
  "duration": 183800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
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
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I browse \"xxx\" buying product",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my basket \"yyy\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I \"zzz\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 86200,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 58700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxx",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String)"
});
formatter.result({
  "duration": 95700,
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
  "duration": 132800,
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
  "duration": 102600,
  "status": "passed"
});
});