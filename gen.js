// var app = chrome.runtime.getBackgroundPage();

function work() {
    //Set length of the string
    const length = 12;

    //Set which characters are in the string
    const lower_case = true;
    const upper_case = true;
    const numbers = true;
    const symbols = false;
    const noDuplicates = true;

    //increase the likelihood of character group appearing (minimum 1)
    const lower_case_weighting = 1;
    const upper_case_weighting = 1;
    const number_weighting = 2;
    const symbol_weighting = 1;
    
    //add characters to character set
    var charSet = [];
    for(var i = 0; i < lower_case_weighting && lower_case; i++) {charSet += ['abcdefghijklmnopqrstuvwxyz'];}
    for(var i = 0; i < upper_case_weighting && upper_case; i++) {charSet += ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];}
    for(var i = 0; i < number_weighting && numbers; i++) {charSet += ['1234567890'];}
    for(var i = 0; i < symbol_weighting && symbols; i++) {charSet += ['`~!@#$%^*\(\)-_=<+[{]};:,\'\"<.>/?'];}
    
    //Construct password according random math input
    var str = "";
    var idx = Math.floor(Math.random() * charSet.length);
    var oldIdx = -1;
    for(var i = 0; i < length; i++){
        idx = Math.floor(Math.random() * charSet.length);
        while(idx == oldIdx && noDuplicates) idx = Math.floor(Math.random() * charSet.length);
        str += charSet[idx];
        oldIdx = idx;
    }
    //copy password to clipboard
    copyToClipboard(str);
};

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


  
document.getElementsByTagName("body").addEventListener('load', work());