@Smoke @Sanity

Feature: Check my basket application

Scenario Outline: No item selected in basket
Given I start the application
Then I should see a selection of products
When I browse "<Buying_Products>" buying product
Then my basket "<Basket_status>" be empty
And I "<Buy_status>" buy an item


Examples:
|Buying_Products|Basket_status|Buy_status|
|without        |should       |cannot    |
|with           |shouldnot    |can       |
|xxx            |yyy          |zzz       |