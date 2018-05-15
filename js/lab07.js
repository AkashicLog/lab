let mySelectOne =document.getElementById("select_one");
let index1 =mySelectOne.selectedIndex;
let value1 = mySelectOne.options[index1].value;
let mySelectTwo =document.getElementById("select_two");
let index2 =mySelectTwo.selectedIndex;
let inputdiv =document.getElementById("hidden_input");
let inputdiv2 =document.getElementById("hidden_input2");
let formdiv =document.getElementById("hidden_form");
let row = 0;
let column = 0;
let temp_name ="";
let form_index = -1;
let form_name =[];
let temp_value =[];
let form_content = [];
let form_elements =[];
let table =document.createElement("table");
function removeAllChild(id) {
    if(typeof(id)==="string" ){
        let element =document.getElementById(id);
        while (element.hasChildNodes()){
            element.removeChild(element.firstChild);
        }
    }
}
function removeAllChild2(node){
    while (node.hasChildNodes()){
        node.removeChild(node.firstChild);
    }
}
mySelectOne.onchange= mySelectOne.blur();
mySelectOne.onblur =function () {
    index1 =mySelectOne.selectedIndex;
    value1 = mySelectOne.options[index1].value;
    if (value1 ==="SELECT ONE") {
        removeAllChild("hidden_input");
        removeAllChild2(inputdiv2);
        document.getElementById("commit").style.display = "none";
    }
    else{
        if (value1 ==="CREATE TABLE"){
            removeAllChild("hidden_input");
            removeAllChild2(formdiv);
            removeAllChild2(inputdiv2);
            temp_value =[];
            let input1 = document.createElement("input");
            let input2 = document.createElement("input");
            input1.id ="tablename";
            input2.id ="columns";
            input1.type ="text";
            input2.type ="number";
            input1.placeholder ="Table Name";
            input2.placeholder="Columns Numbers";
            input1.onblur= function(){
                temp_name = input1.value;
            };
            input2.onblur=function () {
                column =input2.value;
                if(column!== null&&column > 0){
                    row = 1;
                    if (temp_name!==undefined &&temp_name!==null){
                        addInputChild(column,1,null);
                    }
                    else  document.getElementById("commit").style.display = "none";
                }
                else  document.getElementById("commit").style.display = "none";
            };
            inputdiv.appendChild(input1);
            inputdiv.appendChild(input2);
        }
        else if (value1 ==="ADD ROW"){
            removeAllChild("hidden_input");
            if(column !== 0){
                temp_value=[];
                addInputChild(column,3,form_content[0]);
            }
        }
        else if(value1 ==="DELETE ROW"){
            removeAllChild("hidden_input");
            if(column!==0&& row!==0){
                temp_value=[];
                addInputChild(column,2,form_content[form_content.length - 1]);
                if(form_content > 1){
                    document.getElementById("commit").style.display = "inline-block";
                }
            }
        }
        else if (value1==="DELETE TABLE") {
            temp_value=[];
            document.getElementById("commit").style.display = "inline-block";
            removeAllChild("hidden_input");
            removeAllChild2(inputdiv2);
            let p =document.createElement("p");
            p.innerText="WARNING: You cannot undo this action!";
            p.style.color="red";
            p.style.fontSize ="1.5em";
            inputdiv.appendChild(p);
        }
    }
};
mySelectTwo.onchange =function () {
    index2 =mySelectTwo.selectedIndex;
    form_index =index2 - 1;
    form_content =JSON.parse(JSON.stringify(form_elements[form_index]));
    column = form_content[0].length;
    row =form_content.length;
    temp_value =[];
    show(form_index);
};
function deleteArrayElement(array,index) {
    for(let i=index; i < array.length - 1;++i){
        array[i] = JSON.parse(JSON.stringify(array[i+1]));
    }
    array.pop();
}
function addInputChild(number,command,value) {
    if(command ===1){
        removeAllChild("hidden_input2");
        for(let i = 0;i < number;++i){
            let input_temp = document.createElement("input");
            input_temp.type="text";
            input_temp.id ="input_"+ i;
            input_temp.placeholder ="Arribute";
            input_temp.onblur =function (){
                let idmark =input_temp.id;
                let index =idmark.charAt(idmark.length - 1);
                temp_value[index] = input_temp.value;
                if(addInputChild(0,4))
                    document.getElementById("commit").style.display = "inline-block";
            };
            inputdiv2.appendChild(input_temp);
        }
    }
    else if(command===2){
        removeAllChild("hidden_input2");
            for(let i = 0;i < number; ++i){
                let input_temp = document.createElement("input");
                input_temp.type="text";
                input_temp.readonly ="readonly";
                input_temp.placeholder = value[i];
                inputdiv2.appendChild(input_temp);
            }
        }
        else if (command ===3) {
        removeAllChild("hidden_input2");
            for(let i = 0;i < number; ++i){
                let input_temp = document.createElement("input");
                input_temp.type="text";
                input_temp.id ="input_"+ i;
                input_temp.placeholder = value[i];
                input_temp.onblur =function (){
                    let idmark =input_temp.id;
                    let index =idmark.charAt(idmark.length - 1);
                    temp_value[index] = input_temp.value;
                    if (addInputChild(0,5))
                        document.getElementById("commit").style.display = "inline-block";
                };
                inputdiv2.appendChild(input_temp);
            }
            document.getElementById("commit").style.display = "inline-block";
        }
        else if(command ===4){
            for (let i = 0;i< temp_value.length;++i) {
                if (temp_value[i]===null||undefined) {
                    return false;
                }
            }
            return true;
        }
        else return !!(document.getElementById("input_0").value !== null || undefined);
}
function commit2(){
    if(value1 ==="CREATE TABLE"){
        if(temp_value.length >= 1&& temp_value[0]!==null){
            form_index++;
            form_name[form_index] = JSON.parse(JSON.stringify(temp_name));
            form_content=[];
            form_content[0] = JSON.parse(JSON.stringify(temp_value));
            form_elements[form_index] = JSON.parse(JSON.stringify(form_content));
            let select_option =document.createElement("option");
            select_option.value =temp_name;
            select_option.innerText =temp_name;
            mySelectTwo.add(select_option,null);
            mySelectTwo.options[form_index + 1].selected = "selected";
            show(form_index);
            return false;
        }
    }
    else if (value1==="ADD ROW"){
        if(temp_value.length >= 1&& temp_value[0]!==null){
            row++;
            form_content =JSON.parse(JSON.stringify(form_elements[form_index]));
            form_content[row - 1] = JSON.parse(JSON.stringify(temp_value));
            form_elements[form_index]=JSON.parse(JSON.stringify(form_content));
            show(form_index);
            return false;
        }
        else {
            alert("Fail to add row");
            return false;
        }
    }
    else if(value1==="DELETE ROW"){
        if(row > 1){
            row--;
            form_content.pop();
            temp_value = JSON.parse(JSON.stringify(form_content[form_content.length - 1]));
            form_elements[form_index]=JSON.parse(JSON.stringify(form_content));
            show(form_index);
            return false;
        }
        else {
            show(form_index);
            alert("Please enter right command.You can't delete frist row");
            return false;
        }
    }
    else if (value1==="DELETE TABLE") {
        if(form_elements.length > 0){
            deleteArrayElement(form_elements,form_index);
            mySelectTwo.remove(form_index + 1);
            form_content = form_elements[0];
            form_index = 0;
            show(form_index);
            return false;
        }
        else {
            removeAllChild("hidden_form");
            mySelectTwo.options[0].selected = "selected";
            alert("You can't delete frist row or empty form");
            return false;
        }
    }
}
function show(index) {
    removeAllChild("hidden_form");
    removeAllChild2(table);
    if(index >=0){
        form_content = JSON.parse(JSON.stringify(form_elements[index]));
        for(let i = 0;i<form_content.length;++i ){
            let tr = document.createElement("tr");
            if(i === 0){
                tr.style.backgroundColor="grey";
                tr.style.color="whitesmoke";
            }
            else if(i % 2===0){
                tr.style.backgroundColor="lightgrey";
            }
            for (let j = 0;j<form_content[i].length;++j){
                let th =document.createElement("th");
                let node =document.createTextNode(form_content[i][j]);
                th.appendChild(node);
                tr.appendChild(th);
            }
            table.appendChild(tr);
        }
        formdiv.appendChild(table);
    }
}