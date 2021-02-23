
function imp() {
  var files = document.getElementById('selectFiles').files;

  if (files.length <= 0) {
    return false;
  }

  var fr = new FileReader();

  fr.onload = function (e) {
    fr.readAsText(files.item(0));
    var jsonObject = JSON.parse(fr.result); 

    const keys = ["cookies", "content", "postData", "Cookie"];

    function remove(object, keys) {
      for (var property in object) {
        if (object.hasOwnProperty(property)) {
          if (keys.includes(property)) {
            delete object[property];
          }
          else if (typeof object[property] === "object") {
            remove(object[property], keys);
          }
        }
      }

      return object;
    }

    testObject = remove(jsonObject.log, keys);
    var sensitive = JSON.stringify(testObject, null, 2);
    var blob = new Blob([sensitive], {type: "application/json"});
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.download = "sensitive.json"
    a.href = url;
    a.textContent = "Download sensitive-free .har file";

    document.getElementById('downloadBut').appendChild(a);
  }
};
