customHeader.RightMenu = function(RightMenu){


let dropdownMenuMob = ''
    let rightSideHtmlStr = ''
    let langSelect = ''
    for (const item of RightMenu) {
      rightSideHtmlStr += `<button class="button-weak-invert hidden-on-web" onclick="${customFunction.handleAction(item)}">${item.title}${item.icon ? item.icon : ''}</button>`;
      dropdownMenuMob += `<li class="active" onclick="${customFunction.handleAction(item)}">${item.title}</li>`
      langSelect = `<div class="lang-change">
<select id="selectBox" onchange="customHeader.dynamicallyLoadScript();customHomepage.dynamicallyLoadScript();"> 
<option value="en" style="display:none">En</option>
<option value="en" >En</option>
<option value="ru">Ru</option>
  
</select>
</div>` 
    }
    // let rightAddMenu = document.getElementById('right_additional_menu').innerHTML;
    // document.getElementById('right_additional_menu').innerHTML = rightSideHtmlStr + rightAddMenu;
    if (document.getElementById('menuDropdown')) {
      document.getElementById('menuDropdown').innerHTML += `<ul>${dropdownMenuMob}</ul>`;
    }
}
