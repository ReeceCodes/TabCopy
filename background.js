    let tabList = [];
	
	chrome.browserAction.onClicked.addListener(function (tab) {
		//alert('test4');
		
		chrome.tabs.query({currentWindow: true}, function(tabs){
			
			var dummy = document.createElement("textarea");
			document.body.appendChild(dummy);
			
			tabs.forEach((tab) => dummy.value += tab.url + '\r\n')		;
			
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			
		});
		
    });