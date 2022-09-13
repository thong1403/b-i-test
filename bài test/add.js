var input = document.getElementById("inputText");

function getData(url, fn) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        fn(undefined, JSON.parse(xhr.responseText));
      } else {
        fn(new Error(xhr.statusText), undefined);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

input.addEventListener("keyup", () => {
  getData(
    `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${input.value}`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
    );


  
});

