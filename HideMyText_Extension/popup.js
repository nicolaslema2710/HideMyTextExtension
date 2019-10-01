window.onload = function () {
	document.getElementById('save').onclick = function () {
		var valueFacebook = document.getElementById('inputFacebook').value;
		var valueTwitter = document.getElementById('inputTwitter').value;
		var valueGmail = document.getElementById('inputGmail').value;
		var valueOutlook = document.getElementById('inputOutlook').value;
		chrome.storage.local.set({ 'facebookKey': valueFacebook }, function () { });
		chrome.storage.local.set({ 'twitterKey': valueTwitter }, function () { });
		chrome.storage.local.set({ 'gmailKey': valueGmail }, function () { });
		chrome.storage.local.set({ 'outlookKey': valueOutlook }, function () { });
	}
	chrome.storage.local.get(['facebookKey'], function (data) {
		inputFacebook.value = data.facebookKey;
	});
	chrome.storage.local.get(['twitterKey'], function (data) {
		inputTwitter.value = data.twitterKey;
	});
	chrome.storage.local.get(['gmailKey'], function (data) {
		inputGmail.value = data.gmailKey;
	});
	chrome.storage.local.get(['outlookKey'], function (data) {
		inputOutlook.value = data.outlookKey;
	});
}









