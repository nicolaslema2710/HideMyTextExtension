chrome.commands.onCommand.addListener(function (command) {});
chrome.runtime.onMessage.addListener(receiver);
window.word = "";
function receiver(request, sender, sendResponse) {
    var ciphertext = CryptoJS.AES.encrypt(requst, 123).toString();
    console.log(request);
}