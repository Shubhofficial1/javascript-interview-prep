// var vs let vs const

// Difference is usually given based on below parameters :

// Scope
// Updation & redeclration
// Initialization
// Access
// Hoisting

// var is global/functional scoped
// let & const is block scoped

// var can be updated & redeclared into current scope
// let can be updated but can't be redeclared in same scope
// const can't be updated not redeclared

// var can be declared without init
// let can be declared without init
// const can't be declared without init

// var can be accessed before init & it's value would be undefined
// let can't be accessed before init / reference error
// const can't be accessed before init / missing init in const decl

// var is hoisted & is initialised with undefined
// let is hoisted but it's value is accessible only after temporal dead zone
// const is hoisted but it's value is accessible only after temporal dead zone
