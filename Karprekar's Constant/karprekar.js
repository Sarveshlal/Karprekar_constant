var div = document.createElement('div')
div.setAttribute('id','div')
var p = document.createElement('p')
p.setAttribute('id','heading')
p.innerHTML = 'Enter number to Generate Karprekar Number'
var box = document.createElement('input')
box.setAttribute('type','number')
box.setAttribute('id','box')
var button = document.createElement('button')
button.setAttribute('type','button')
button.setAttribute('id','button')
button.setAttribute('onclick','check()')
button.innerText = 'Generate'
var ptag = document.createElement('p')
ptag.setAttribute('id','ptag')
div.append(p,box,button,ptag)
document.body.append(div)

function check(){
    document.getElementById('ptag').innerHTML = '';
    var valu = document.querySelector('#box').value
    var val = document.querySelector('#box').value
    var count = 0;
    function karprekar(val1,val2){
        var data1 = val1.toString().split('').sort((a,b)=>(b-a)).join('')
        var data2 = val2.toString().split('').sort((a,b)=>(a-b)).join('')
        var result = data1-data2
        document.getElementById('ptag').innerHTML += `${data1} - ${data2} = ${result}<br>`
        count++;
        if(result != 6174)
        {
            val1= result
            val2 = result
            //console.log(val1,val2)
            karprekar(val1,val2);
        }
    }
    karprekar(valu,val)
    document.getElementById('ptag').innerHTML += `<br>The Karprekar constant is derived in ${count} iteration`
}