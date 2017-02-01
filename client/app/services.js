'use-strict'
/*
 * File: services.js
 * Description: Used for common custom services within the web application
 */

// setup services module
var services = angular.module('app.services',[]);

/*
 * UserInfoService - provides the name and user type of the logged in user
 */
services.service('UserInfoService', function() {
    this.userId = '';
    this.userName = '';
    this.userType = '';
    
    this.setUserId = function(loginId) {
        this.userId = loginId;
    }
    
    this.setUserName = function(name) {
        this.userName = name;
    }
    
    this.setUserType = function(type) {
        this.userType = type;
    }
    
    this.getUserId = function() {
        return this.userId;
    }
    
    this.getUserName = function() {
        return this.userName;
    }
    
    this.getUserType = function() {
        return this.userType;
    }
});