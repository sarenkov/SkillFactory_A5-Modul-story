const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"]

function getFieldsValue() {
    let valuesArr = []
    fields.forEach(function(item) {
        valuesArr[item] = $("input[name=" + item + "]")[0].value
    })
    return valuesArr;
}

function handleButton() {
    $.getJSON(dataURL, handleData)
        .done(function(data) {
            console.log('Get data: success');
        })
        .fail(function() {
            console.log('Get data: fail');
        })
}

function handleData(data) {
    let story = "";
    let values = getFieldsValue();

    data["text"].forEach(function(line) {
        for (key in values) {
            line = line.replace("{" + key + "}", values[key]);
        }
        story = story + line + "<BR>";
    });

    $('div#result').html(story)
}

function init() {
    $("#button-fetch").click(handleButton);
}

$(document).ready(init);