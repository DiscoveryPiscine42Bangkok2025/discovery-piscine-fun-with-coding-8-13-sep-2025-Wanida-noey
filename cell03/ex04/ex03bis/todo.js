function createToDoList(){
    let input = prompt("to do?");
        let div = $("<div></div>").text(input);

        div.attr("onclick", "remove(this)");


        $("#ft_list").prepend(div);
        setCookie("todo", $("#ft_list").html(), 30);
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let todo = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(todo) == 0) {
        return c.substring(todo.length, c.length);
      }
    }
    return "";
}

function checkCookie(){
    let todo = getCookie("todo");
    if (todo !== "") {
        $("#ft_list").html(todo);
    }
}
  
function remove(elem){
    if (confirm("delete ?")) {
        $(elem).remove();
        setCookie("todo", $("#ft_list").html(), 30);
    }
}