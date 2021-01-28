customHeader.HeaderLeftMenu = function(LeftMenu){
        let htmlStr = '';
    console.log(LeftMenu)
    for (const item of LeftMenu) {
      let classMenu = ""
      let htmlTag = "li"
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        classMenu = ""
        htmlTag = "li"
      }
      htmlStr += `<${htmlTag}  class="${classMenu}" onclick="${customFunction.handleAction(item)}">${item.title}</${htmlTag}>`;
    }
    if (document.getElementById('menuDropdown')) {
      document.getElementById('menuDropdown').innerHTML += `<div class="shown-on-mobile" style="display:flex; flex-direction:column; ">${htmlStr}<hr></div>`;
    }
    htmlStr=''
    for (const item of LeftMenu) {
      let classMenu = "link"
      let htmlTag = "a"
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        classMenu = "link"
        htmlTag = "a"
      }
      htmlStr += `<${htmlTag}  class="${classMenu}" onclick="${customFunction.handleAction(item)}">${item.title}</${htmlTag}>`;
    }
    if (document.getElementById('header_btn_bar')) {
      document.getElementById('header_btn_bar').innerHTML = htmlStr;
    }
    document.getElementById("userNameText").innerHTML = customHeader.context.userName
}