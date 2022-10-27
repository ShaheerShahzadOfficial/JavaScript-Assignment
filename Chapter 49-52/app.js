function Submit() {
  let Name = document.getElementById('name')
  let email = document.getElementById('email')
  let password = document.getElementById('password')
let data = document.getElementById("data")
  if (
    Name.value.length === 0 ||
    email.value.length === 0 ||
    password.value.length === 0
  ) {
    alert('enter name , email and password')
  } else {
    data.innerHTML = (`
<h2> Name :- ${Name.value} </h2>
<h2> Email :- ${email.value} </h2>
<h2> Password :- ${password.value} </h2>
<br/>
`)
Name.value = ""
email.value = ""
password.value = ""
  }
}

let doc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus modi minus qui quod, in recusandae quia obcaecati voluptatum ut, quibusdam incidunt distinctio tenetur repudiandae quis dicta repellat vero reiciendis rem!
Incidunt, ex. Doloribus sunt earum officiis error eveniet repudiandae qui minima ipsa velit, corporis obcaecati voluptate suscipit sint illo mollitia nulla. Consequuntur saepe ullam reiciendis blanditiis omnis nemo amet pariatur!
Omnis iure qui expedita doloribus voluptatibus sit eum consequatur commodi corporis deleniti quaerat deserunt voluptate, consectetur vero. Autem veniam excepturi dolore quidem, quia minima esse, perferendis et repellat cum veritatis? `

let para = document.getElementById('para')
para.innerHTML = `${doc} `

function expandData() {
  let str2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem impedit fugiat earum voluptas iusto laboriosam neque aut at quod nisi, recusandae nobis! A blanditiis magni veritatis minus itaque facere.
    Eveniet possimus accusantium, laudantium corporis aliquam optio minima sint recusandae eum sapiente. Magni assumenda odit vitae delectus temporibus cum deserunt fuga consequuntur error. Veritatis recusandae ullam harum ut suscipit eligendi!
    Magni, ducimus temporibus! Delectus adipisci incidunt quae doloribus. Ea dignissimos similique fuga itaque blanditiis. Impedit, sapiente. Et, ipsam. Distinctio nemo recusandae minima similique voluptatum illum repellat atque officia necessitatibus reiciendis.
    Itaque, consectetur? Dolorem, aliquid sint? Maxime dolorum cumque ut reiciendis cum, nisi possimus repellat sit neque ad quo? Accusamus illo corrupti exercitationem architecto nam accusantium, ratione veniam nemo corporis quo.
    Consequuntur, nemo laborum dignissimos impedit quaerat earum officia fuga. Architecto, nesciunt vero. Quaerat incidunt suscipit odit dolore veritatis error, quisquam enim est, ea sunt, debitis sequi eveniet inventore illo magni.
    Voluptatum, quisquam harum dolor, deleniti nobis unde commodi, laborum labore eaque illum magnam! Temporibus reprehenderit dignissimos nemo porro omnis ex veniam. Ad qui vitae fugiat iusto? Libero facilis recusandae quos!
    Veritatis nihil maiores, vero, quis nam eaque assumenda placeat vitae dolorum fuga voluptatem earum eos quidem odit ratione praesentium. Veritatis in architecto hic laboriosam fugiat? Distinctio veritatis quasi laborum labore?
    Deserunt non fuga pariatur qui veritatis necessitatibus, sit beatae totam eligendi, explicabo alias sed atque? Ipsam, perspiciatis, quia explicabo, quaerat tempore nostrum consequuntur rem maxime beatae in at. Quasi, sit.
    Voluptatum itaque consequuntur soluta sunt ipsam quidem fugiat, vero dicta numquam error aspernatur cumque inventore. Voluptates magni voluptas odit laborum, impedit, quae repellendus iste ipsam modi, eos recusandae consequatur id?
    Omnis tenetur optio quis, facere in incidunt! Consequuntur sapiente doloremque libero iure nihil veritatis error dolore aliquid, deserunt adipisci laborum? Fugit reiciendis unde perspiciatis nobis! Illum quis corporis officia labore!
    Atque culpa illum corporis quidem laborum, cumque maxime. Vel dolores a iste quam, molestiae animi eveniet autem velit reiciendis veritatis excepturi illo eos minus deserunt. Dolore quos distinctio eos esse!
    Exercitationem pariatur architecto ipsa nihil quae aliquid inventore, nobis mollitia laudantium atque, quo quisquam quam, recusandae provident optio rem doloremque omnis nam. Alias ipsum libero voluptatibus accusantium, ratione amet ex .
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, itaque. Quae voluptates provident consectetur voluptatem aut repellat magnam maiores velit fugiat incidunt? Maxime debitis iure soluta, reprehenderit cum deleniti minima.
    Totam possimus dolorum magni voluptatibus? Voluptates dolores necessitatibus itaque error, consequatur repellendus quidem quo, beatae similique veniam incidunt consequuntur ea? Ex asperiores veritatis, quibusdam maiores expedita quis cupiditate unde vitae!`

  doc = doc.concat(str2)

  para.innerHTML = `${doc} `

  let btn = document.getElementById('btn')

  btn.setAttribute('style', `display:none`)
}




const arr = []

async function addData(event) {
  event?.preventDefault()

  let Name = document.getElementById('name1')
  let email = document.getElementById('email1')

if (Name.value.length !== 0 && email.value.length !== 0  ) {
  const obj = {
    id: arr.length,
    name: Name.value,
    email: email.value,
  }
  arr[obj.id] = obj
  
  let table = document.getElementById('table23')

  let tr = document.createElement("tr")
  let td = document.createElement("td")
  let td2 = document.createElement("td")
  let td3 = document.createElement("td")
  let td4 = document.createElement("td")
  
  var editbtn = document.createElement("button")
  var editbtntext =document.createTextNode("Edit")
  editbtn.appendChild(editbtntext)
  td4.appendChild(editbtn)
  editbtn.setAttribute("onclick","edit(this)")
  
  
  var delbtn = document.createElement("button")
  var delbtntext =document.createTextNode("Delete")
  delbtn.appendChild(delbtntext)
  td3.appendChild(delbtn)
  delbtn.setAttribute("onclick","deleted(this)")
  
  
  
  
  
  table.appendChild(tr)
  
  
  tr.appendChild(td)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)
  
  
  
  arr.forEach(element => {
          td.textContent = element?.name
          td2.textContent = element?.email
  
  });  
  

  Name.value = ""
   email.value = "" 


} else {
  alert("Enter Name and email")
}



}


function deleted(e){
  e.parentNode.parentNode.remove()
  }


  function edit(e) {
    let pr = prompt("Enter Updated Name",e.parentNode.parentNode.firstChild.innerHTML)
    e.parentNode.parentNode.firstChild.innerHTML = pr
  
    let pr2 = prompt("Enter Updated Email",e.parentNode.parentNode.children[1].innerHTML)
    e.parentNode.parentNode.children[1].innerHTML = pr2
  }

