let add = document.getElementById("add");

function getAndUpdate() {
    console.log("Updating List...")
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;

    if (localStorage.getItem("itemJson") == null) {
        itemJsonArray = [];
        itemJsonArray.push([title, description]);
        localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayString = localStorage.getItem("itemJson");
        itemJsonArray = JSON.parse(itemJsonArrayString);
        itemJsonArray.push([title, description]);
        localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    }
    // innerHTML="reset"
    // 
    update();
}


function update() {
    if (localStorage.getItem("itemJson") == null) {
        itemJsonArray = [];
        localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayString = localStorage.getItem("itemJson");
        itemJsonArray = JSON.parse(itemJsonArrayString);
    }
    let tbody = document.getElementById("tbody");
    let str = "";


    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleteItem(${index})">Delete</button></td>
        </tr>
        `
    });

    tbody.innerHTML = str;
}

add.addEventListener("click", getAndUpdate);
// document.getElementById("itemJson").reset()

update();


function deleteItem(itemIndex) {
    console.log("Deleting", itemIndex)
    itemJsonArrayString = localStorage.getItem("itemJson")
    itemJsonArray = JSON.parse(itemJsonArrayString);

    itemJsonArray.splice(itemIndex, 1);

    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    update();
}

function clearList() {
    if (confirm("Do you really want to clear the list?")) {
        localStorage.clear();
        // title.innerHTML=""
        // document.getElementById("itemJson").reset()
        update();
    }
}


// $(function() {
//     $('.btn btn-primary').click(function() {
//       $('.form-control[type="text"]').val('');
//     });
//   });