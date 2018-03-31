/**
 * Created by Danil on 27.02.2018.
 */

console.log("NODE JS are working. Тест русских символов");


var bomj = {
    name : 'Danil',
    toString: function () {
        return this.name;
    }
}

var user = {
    name: 'Андрей',
};

console.log(objToString (user));

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + ': ' + obj[p] + '\n';
        }
    }
    return str;
}