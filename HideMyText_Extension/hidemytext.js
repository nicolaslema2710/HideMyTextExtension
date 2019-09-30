
document.addEventListener('dblclick', function (event) {
    var htmlTarget = $(event.target)[0];
    wordSelected(htmlTarget);

});

hideMyText = (function () {
    var key = null;
    const keyword = "HIDE.MY.TEXT__";

    function initialize() {
          chrome.storage.local.get(['secretKey'], function(data){
              secretkeyValue  = data.secretKey;       
        });
        this.key = secretkeyValue;
    }

    function saveKey(key) {
        if (key) {
            this.key = key;
        }
    }

    function getKey() {
        return this.key;
    }

    function encryptMessage(message = '', key = '') {
        message = keyword + CryptoJS.AES.encrypt(message, key);
        return message.toString();
    }

    function decryptMessage(message = '', key = '') {
        var code = CryptoJS.AES.decrypt(message, key);
        var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
        return decryptedMessage;
    }


    function setKey(){
        chrome.storage.local.get(['secretKey'], function (data) {
        this.key = data.secretKey;
    });
    }


    return {
        encrypt: encryptMessage,
        decrypt: decryptMessage,
        saveKey: saveKey,
        getKey: getKey,
        initialize: initialize,
        keyWord: keyword
    }
})();

function wordSelected(htmlElement) {
    const selectedText = htmlElement.textContent || htmlElement.innerText;
    hideMyText.initialize();
    const key = hideMyText.getKey();
    if(key==""){
        console.dir('set secretkey please!');    
    }
    // Detectar si tiene una encriptación nuestra. En caso contrario, encriptar
    if (selectedText.indexOf(hideMyText.keyWord) != -1){
        // Acá ya sabemos que tenemos que desencriptar
        var toDecrypt = selectedText.substring(hideMyText.keyWord.length, selectedText.length);
        var decrypted = hideMyText.decrypt(toDecrypt, key);
        htmlElement.innerHTML = decrypted;
    } else {
        // Acá tenemos que encriptarle la madre
        const encryptedText = hideMyText.encrypt(selectedText, key);
        htmlElement.innerHTML = encryptedText;
        htmlElement.innerText = encryptedText;
        htmlElement.textContent = encryptedText;

        // triggerear el .onChange || fakear un borrado y pegado
        console.dir(htmlElement);
        console.dir(key);
        console.dir(encryptedText);
        
       
    }








    /*
    console.log('without crypt');
    console.log(selectedText);
    console.log('key');
    console.log(hideMyText.getKey());
    console.log('with crypt');
    console.log(hideMyText.encrypt(selectedText, hideMyText.getKey()));

     */
}







