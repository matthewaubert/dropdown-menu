# Dynamic User Interface Interactions: Dropdown Menu

This project was built as part of <a href="https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions">The Odin Project: JavaScript course</a> in order to continue practicing my JavaScript and for practice using npm.

## Understanding the Problem

1. Create a drop-down menu that dynamically slides down when a user clicks a button

1. Bundle this as a module and publish it to npm

## How to Use this module

1. Import "toggleDropdown" and "hideDropdown" from this module

1. Create as many dropdown button elements as you need
   1. Add to each the class of "hamburger"
   1. Create a query selector for all "hamburger" dropdown button elements
   1. For each button, add a "click" event listener and pass in the "toggleDropdown" function

1. Add a "click" event listener to the document and pass in the "hideDropdown" function

1. Create and style as many dropdown menu elements as you need
   1. Add to each the class of "dropdown-menu"

1. Give each dropdown menu element a unique "data-id" attribute (it could be anything). Give each related button a matching "data-for" attribute.
   - When a button is clicked, it will open the dropdown menu with the "data-id" attribute that matches the button's "data-for" attribute
   - When anything is clicked other than the matching button, all menus will close