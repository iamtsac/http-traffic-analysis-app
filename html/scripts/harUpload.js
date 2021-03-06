var uploadButton = document.getElementById("uploadBut");

function inHeaders(obj) {
  let inHeaderValues = {};
  for (var i in obj) {
    let checkName = ['cache-control', 'pragma', 'host', 'last-modified', 'content-type', 'expires'];
    if (checkName.includes(obj[i]["name"].toLowerCase())) {
      if (obj[i]['name'] != null && obj[i]['value'] != null) {
        inHeaderValues[obj[i]['name'].toLowerCase()] = obj[i]['value'];

      }
    }
  }
  return inHeaderValues;
}

function addHeaderValues(obj, valueArr, attribute) {
  let inHeaderValues = inHeaders(obj);
  let itemKeys = Object.keys(inHeaderValues);
  let itemValues = Object.values(inHeaderValues);
  for (var items in itemKeys) {
    if (itemKeys[items] != null) {
      if(itemKeys[items] in valueArr){  
        valueArr[itemKeys[items] + attribute] = itemValues[items]
      }
      else{
        valueArr[itemKeys[items] + attribute] = itemValues[items] 
      }
    }
  }
}

function readHar() {

  let uploadValues = {};
  var harFile = document.getElementById("harFile").files[0];
  if (harFile) {
    var reader = new FileReader();
    reader.readAsText(harFile, "UTF-8");
    reader.onload = function () {
      harContent = JSON.parse(reader.result);
      harEntry = harContent.log.entries;

      for (var key in harEntry) {
        harRequest = harEntry[key].request['headers'];
        harResponse = harEntry[key].response['headers'];

        valueArr = {
          "startedDateTime": harEntry[key]["startedDateTime"],
          "serverIPAddress": harEntry[key]["serverIPAddress"],
          "wait": harEntry[key].timings["wait"],
          "url": harEntry[key].request["url"],
          "status": harEntry[key].response["status"],
          "statusText": harEntry[key].response["statusText"],
        };

        addHeaderValues(harRequest, valueArr, "Request");
        addHeaderValues(harResponse, valueArr, "Response");
        uploadValues[key] = valueArr;
      }
      console.log(uploadValues);
    }

    reader.onerror = function () {
      console.log("error loading file");
    }

    return uploadValues;
  }
} 

uploadButton.onclick = readHar; 
