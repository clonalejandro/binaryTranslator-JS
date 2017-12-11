/**
 * Created by alejandrorioscalera
 * On 27/9/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *    
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©traductorBinario 2017 / 2018
*/

/** SMALL CONSTRUCTORS **/

var it=0;
var binary = [];
var decimal = 0;
var Id = 0;
var htms = "";


/** REST **/

class Calculator {

    /**
     * This method return a binary
     * @param target
     * @returns {string}
     */
    static getBinary(target) {
        var m = 0;
        var r = false;
        while (!r) {
            m = Math.trunc(target % 2);
            binary.push(m.toString());
            target = Math.trunc(target / 2);
            r = ((target) === 0);
        }
        var result = "";
        binary.forEach((pos) => {
            result += binary[pos];
        });
        return result;
    }
}


class Reader {

    /**
     * This method return a data as array
     * @param Id
     * @return
     */
    static getData(Id){
        const res = document.getElementById(Id).value;
        decimal = res;
        return res;
    }
}


/** OTHERS **/

/**
 * This method init the main function
 * @param number
 */
function init(number) {
    const n = Calculator.getBinary(number);
    send("The result", n);
}


/**
 * This method return a milisecond number parsed
 * @param n
 * @returns {number}
 */
function ms(n) {
    return n * 1000;
}


/**
 * This function read the data in form
 */
function reader() {
    if (Id === 0) uuid();
    const data = Reader.getData("n");
    init(parseInt(data));
    binary = [];
    decimal = 0;
}

/**
 * This function set the toaster
 * @param title
 * @param number
 */
function send(title, number) {

        notify({
            type: "success",
            title: title,
            message: "The result in binary is: " + number,

            position: { x: "right", y: "top" },
            icon: '<i class="fa fa-check"></i>',

            size: "normal",
            overlay: false,
            closeBtn: true,
            overflowHide: false,
            spacing: 20,
            theme: "default",
            autoHide: true,
            delay: ms(10.5),
            onShow: null, onClick: null, onHide: null,
            template: '<div class="notify"><div class="notify-text"></div></div>'
        });

        it++;
        var clazz = randomClass();

        switch (clazz){
            default:
                htms += "<tr class='" + clazz + "'>" +
                    "<th class='ct' scope='row'>" + it + "</th>" +
                    "<td class='ct'>" + Id + "</td>" +
                    "<td class='ct'>" + decimal + "</td>" +
                    "<td class='ct'>" + number + "</td>" +
                    "</tr>";
                break;
            case "bg-light":
            case "bg-warning":
                htms += "<tr class='" + clazz + "'>" +
                    "<th scope='row'>" + it + "</th>" +
                    "<td>" + Id + "</td>" +
                    "<td>" + decimal + "</td>" +
                    "<td>" + number + "</td>" +
                    "</tr>";
                break;

        }

        $(".results").html(htms);
}


/**
 * This function set props to button
 */
$(".button").hover(() => {
    $(".button").html("Submit! <i class='fa fa-arrow-right'></i>")
},() => {
    $(".button").html("Submit!")
});


/**
 * This function return a random propertie
 * @return {string}
 */
function randomClass() {
    var arr = ["bg-success", "bg-info", "bg-warning", "bg-danger", "bg-default", "bg-light", "bg-dark", "bg-primary"];
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}


/**
 * This method give to user a Id
 */
const uuid = () => {
    Id = Math.floor(Math.random() * 2000);
};
