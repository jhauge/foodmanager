/*
 * Dayplan
 *
 */

/* jslint node:true */

'use strict';

function DayPlan(date) {
    if (!date) {
        throw Error('Invalid parameters');
    }
    this.date = date;
    this.date.setHours(0, 0, 0, 0);
    this.morningMeal = '';
    this.lunchMeal = '';
    this.dinnerMeal = '';
    this.groceries = [];
}

DayPlan.prototype.addGroceryItem = function(item){
    var self = this;
    if (!item.hasOwnProperty('category' || !item.hasOwnProperty('item'))) {
        throw new Error('Not a GroceryItem');
    }
    self.groceries.push(item);
};

module.exports = DayPlan;