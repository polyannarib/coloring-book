function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

export default async function randomColor () {
    return new Promise((resolve) => {
        var url = "http://colormind.io/api/";
        var data = {
            model : "default",
        }

        var http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                var colors = JSON.parse(http.responseText).result;
                var colorArray = colors[0];
                var color = "#" + colorToHex(colorArray[0]) +
                    colorToHex(colorArray[1]) + colorToHex(colorArray[2]);
                resolve(color)
            }
        }

        http.open("POST", url, true);
        http.send(JSON.stringify(data));

    })
}
