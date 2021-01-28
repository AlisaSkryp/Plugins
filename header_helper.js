customHeader.getAccountStatus = function () {
    var bridgeObject = {
      fields: ['Name', 'UUID'],
      filter: { 
        Operation: "AND",
        RightNode: { 
          ApiName: "ParentExternalID",
          Operation: "IsEqual",
          Values: [""],
        },
        LeftNode: { 
          ApiName: "Hidden",
          Operation: "IsEqual",
          Values: ["false"],
        },
      },
      sorting: [],
      responseCallback: 'customHeader.getCurrentAccountCallback'
    };
    pepperi.api.accounts.search(bridgeObject);
  };

  customHeader.logout = function () {
    var event = new CustomEvent('logout');
    if (document.createEvent) {
      window.dispatchEvent(event);
    } else {
      window.fireEvent('on' + event.eventType, event);
    }
  };

  customHeader.changePassword = function () {
    window.location.href = 'https://idp.pepperi.com/Account/ChangePassword';
  };

  customHeader.closeHamburgerMenu = function () {
    $('#myDropdown').toggleClass('show').focus()
  }
  customHeader.closeMenu = function () {
    $('#menuDropdown').toggleClass('show').focus();
  }

  customHeader.linksMenu = function () {
    $('#linksDropdown').toggleClass('show').focus()
  }