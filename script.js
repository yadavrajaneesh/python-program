const nameInput =document.getElementById("studentname");
const courseInput = document.getElementById("course");
const addbtn = document.getElementById("addbtn");
const studentlist = document.getElementById("studentlist");
addbtn.addEventListener("click",
    function(){
        const name =nameInput.value;
        const course =courseInput.value;
      if(name===""||course===""){
        alert("please Enter name and course");
        return;
      }
      const row = document.createElement("tr");
      row.innerHTML=`<td>${name}</td><td>${course}</td>
      <td><button onClick="deletestudent(this)">delet</button></td>`;
      studentlist.appendChild(row);
      nameInput.value="";
      courseInput.value = "";
  }
);
function deletestudent(button){
    button.parentElement.parentElement.remove();
}