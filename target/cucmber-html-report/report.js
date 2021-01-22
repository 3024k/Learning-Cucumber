$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shopping.feature");
formatter.feature({
  "line": 1,
  "name": "Check my basket application",
  "description": "",
  "id": "check-my-basket-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I start the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I browse without buying product",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "my basket should be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I cannot buy an item",
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 160779000,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 94800,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_browse_without_buying_product()"
});
formatter.result({
  "duration": 1057500,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.my_basket_should_be_empty()"
});
formatter.result({
  "duration": 398200,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_cannot_buy_an_item()"
});
formatter.result({
  "duration": 283200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "No item selected in basket",
  "description": "",
  "id": "check-my-basket-application;no-item-selected-in-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I start the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I browse with buying product",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket shouldnot be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I can buy an item",
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 2361800,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 316600,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_browse_without_buying_product()"
});
formatter.result({
  "duration": 1948300,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.my_basket_should_be_empty()"
});
formatter.result({
  "duration": 991300,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_cannot_buy_an_item()"
});
formatter.result({
  "duration": 62600,
  "status": "passed"
});
});