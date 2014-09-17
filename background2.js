chrome.commands.onCommand.addListener(function(command) {
  if (command == "columnify") { 
    chrome.tabs.executeScript({code: 'document.body.style.marginLeft="35%"'});
    chrome.tabs.executeScript({code: 'document.body.style.marginRight="35%"'});
    }
  else if (command == "decolumnify") {
    chrome.tabs.executeScript({code: 'document.body.style.marginLeft="0%"'});
    chrome.tabs.executeScript({code: 'document.body.style.marginRight="0%"'});
    }
}); 

  
