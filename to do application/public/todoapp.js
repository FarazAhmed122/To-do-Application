function addtext(){
    var txtfeeeld= document.getElementById('field')
    
    var list= document.createElement('li')
    var node= document.createTextNode(txtfeeeld.value)
    list.appendChild(node)
    document.getElementById('listitems').appendChild(list)
     txtfeeeld.value=""
     list.className="liststyle"
     var container=document.createElement('div')
     var edit=document.createElement('button')
     var edittxt=document.createTextNode('Edit')
     edit.appendChild(edittxt)
     var del=document.createElement("button")
     var nd=document.createTextNode('Del')
     del.appendChild(nd)
     container.appendChild(edit)
     container.appendChild(del)
     list.appendChild(container)
     del.className='work btn btn-outline-danger '
     edit.className='work btn  btn-outline-warning'
     del.setAttribute('onclick','del(this)')
     edit.setAttribute('onclick','edit(this)')

}


function edit(e){
    var b= prompt('Enter Your Edit Value',e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue=b
}


function del(a){
    a.parentNode.parentNode.remove()


}

function dlt(){
    document.getElementById('listitems').innerHTML=""
}