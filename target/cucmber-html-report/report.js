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
formatter.scenario({
  "line": 5,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket",
  "type": "scenario",
  "keyword": "Scenario"
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my basket \"should\" be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I \"cannot\" buy an item",
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 100962200,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 52000,
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
  "duration": 2010000,
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
  "duration": 297500,
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
  "duration": 110000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I start the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I browse \"with\" buying product",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "my basket \"shouldnot\" be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I \"can\" buy an item",
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 77000,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 50700,
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
  "duration": 1233200,
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
  "duration": 145500,
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
  "duration": 100400,
  "status": "passed"
});
});