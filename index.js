#!/usr/bin/env node

var colors = require('colors');

var javaScriptContent = "angular.module( 'xxxxx', [ \n" +
  "'ui.router', \n"+
  "'plusOne' \n"+
"]) \n"+
"\n"+
".config(function config( $stateProvider ) { \n"+
"  $stateProvider.state( 'xxxxx', { \n"+
"    url: '/xxxxx',  \n"+
"    views: {  \n"+
"      'main': {  \n"+
"        controller: 'xxxxxCtrl', \n"+
"        templateUrl: 'xxxxx/xxxxx.tpl.html' \n"+
"      } \n"+
"    }, \n"+
"    data:{ pageTitle: 'xxxxx' } \n"+
"  }); \n"+
"}) \n"+
"\n"+
".controller( 'xxxxxCtrl', function xxxxxController( $scope ) { \n"+
"}) \n"+
"\n"+
";";

var lessContent = "";
var partialContent = "<h2>xxxxx</h2>";
var specJSContent = "describe( 'xxxxx section', function() { \n"+
  "beforeEach( module( 'xxxxx' ) ); \n"+
"\n"+
  "it( 'should have a dummy test', inject( function() { \n"+
  "  expect( true ).toBeTruthy(); \n"+
  "})); \n"+
"});";


var mkdirp = require('mkdirp');

var fs = require('fs');


var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question('What is your component name?  ', function(answer) {
  console.log('Component Name: ' + answer);


// create directory
  mkdirp(__dirname+'/'+answer, function (err) {
  	if (err) { throw err; }
  	// done
  	console.log('Component created successlly!'.green);
	});


var filesToCreate = ['.js', '.less', '.tpl.html', '.spec.js' ];

var filesContents = [javaScriptContent, lessContent, partialContent, specJSContent];

for (var i = 0; i < filesToCreate.length; i++) {
  fs.writeFile(__dirname+'/'+answer+'/'+answer+filesToCreate[i], filesContents[i].replace(/xxxxx/g, answer), function(err) {
    if(err) {
        return console.log(err);
    }    
  });
  console.log(answer+filesToCreate[i]+" file"  + " was saved!".green);   
};

  rl.close();
});

