const ITEMS_CONTAINER = document.getElementById("items")
const ITEM_TEMPLATE = document.getElementById("itemsTemplate")
const ADD_BUTTON = document.getElementById("add")

let items = getItems()
function getItems(){
    const value = localStorage.getItem("todo-test") || "[]";
   return JSON.parse(value)

}
getItems()

function setItems(items){
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("todo-test", itemsJson)
}

function addItem(){
    items.unshift({
        description: "",
        completed: false
    });
    setItems(items);
    refreshList();
}
function refreshList(){
    //sort items

    ITEMS_CONTAINER.innerHTML="";
    for(const item of items){
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
    }
}
/**time:14:31 */