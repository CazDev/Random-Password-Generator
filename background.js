// import does not work throws error: import declarations may only appear at top level of a module
// :(
//import { lower_case, upper_case } from './gen'

chrome.contextMenus.create({
    "type":"checkbox",
    "checked":true,
    "title":"Lower case",
    "contexts":["browser_action"],
    "onclick":function() {
        lower_case = false;
        console.log("1");
    }
});

chrome.contextMenus.create({
    "type":"checkbox",
    "checked":true,
    "title":"Upper case",
    "contexts":["browser_action"],
    "onclick":function() {
        console.log("2");
    }
});

chrome.contextMenus.create({
    "type":"checkbox",
    "checked":true,
    "title":"Numbers",
    "contexts":["browser_action"],
    "onclick":function() {
        console.log("3");
    }
});

chrome.contextMenus.create({
    "type":"checkbox",
    "checked":true,
    "title":"Symbols",
    "contexts":["browser_action"],
    "onclick":function() {
        console.log("4");
    }
});