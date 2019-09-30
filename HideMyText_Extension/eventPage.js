window.onload = function () {
	var btnFacebook = document.getElementById('btnFacebook');
	var btnTwitter = document.getElementById('btnTwitter');
	var btnGmail = document.getElementById('btnGmail');
	var btnOutlook = document.getElementById('btnOutlook');
	var btnSetKey = document.getElementById('setkeyBtn');
	var btnRun = document.getElementById('runBtn');

	

	btnFacebook.addEventListener('click', function (event) {
		chrome.storage.local.get(['facebookKey'], function (data) {
			inputKey.value = data.facebookKey;
		});
	});
	btnTwitter.addEventListener('click', function (event) {
		chrome.storage.local.get(['twitterKey'], function (data) {
			inputKey.value = data.twitterKey;
		});
	});
	btnGmail.addEventListener('click', function (event) {
		chrome.storage.local.get(['gmailKey'], function (data) {
			inputKey.value = data.gmailKey;
		});
	});
	btnOutlook.addEventListener('click', function (event) {
		chrome.storage.local.get(['outlookKey'], function (data) {
			inputKey.value = data.outlookKey;
		});
	});


	btnSetKey.addEventListener('click', function(event){
		chrome.storage.local.get(['secretKey'], function(data){
			inputKey.value = data.secretKey;

		});
	});


	btnRun.addEventListener('click', function(event){
		var valueSecretKey = document.getElementById('inputKey').value;
		chrome.storage.local.set({ 'secretKey': valueSecretKey }, function () { 
			
		});
	});






	
}