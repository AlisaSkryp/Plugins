if (!customFunction)
  var customFunction = {}
customFunction.catalogs;
customFunction.transactionName = Transaction
customFunction.catalogName = Catalog

customFunction.getCatalogs = function () {
    pepperi.api.catalogs.search({
      fields: ["UUID", "ExternalID", "Description", "ID"],
      responseCallback: 'customHomepage.getCatalogsCallback'
    });
  }

  customFunction.getCatalogsCallback = function (res) {
    (res && res.objects && res.objects.length) ? customFunction.catalogs = res.objects : false;
    // var fun = eval("(" + res.requestID + ")");
  this.buildHTML();
  }

  customFunction.handleAction = function (item) {
    var deepLink = item.deepLink.replace(/\"/g, '%22');
    if (item.action == 'navigation') {
      return `customFunction.navigation('${deepLink}')`;
    } else if (item.action == 'setUUIDandNav') {
      return `customFunction.setUUIDandNav('${item.catalog}','${item.transaction}','${deepLink}')`;
    } else if (item.action == 'openInNewTab') {
      return `customFunction.openInNewTab('${deepLink}')`;
    } else if (item.action == 'createNewActivity') {
      return `customFunction.createNewActivity('${item.activity}','${deepLink}')`;
    } else if (item.action == 'createNewTransaction') {
      return `customFunction.createNewOrder('${item.catalog}','${item.transaction}','${deepLink}',true)`;
    } else if (item.action == 'zendesk') {
      return `location.href = 'javascript:$zopim.livechat.window.show()'`;
    }
  }

  customFunction.navigation = function (path) {
    customFunction.closeAllMenusListener();
    var eventData = {
      detail: {
        path: path,
      },
    };

    var event = new CustomEvent("navigateTo", eventData);

    if (document.createEvent) {
      window.dispatchEvent(event);
    } else {
      window.fireEvent("on" + event.eventType, event);
    }
    window.location.href = path;
  };

  customFunction.setUUIDandNav = function (in_catalog = null, in_transactionName = null, deepLink = null) {
    customFunction.closeAllMenusListener();
    var name = eval("(" + nameOfMainJs + ")")
    const uuid = name.getSessionStorage('LastOpenTransactionUUID');
    if (uuid && uuid !== "undefined") {
      deepLink = deepLink.replace('{{UUID}}', uuid.replace(/-/g, ''));
      customFunction.navigation(deepLink);
    } else {
        customFunction.createNewOrder(in_catalog, in_transactionName, deepLink);
    }
  };

  customFunction.openInNewTab = function (url) {
    var win = window.open(url, '_blank');
    win.focus();
  };

  customFunction.createNewOrder = function (inCatalog = null, in_transactionName = null, deepLink = null, skipSessionSaving) {
    var name = eval("(" + nameOfMainJs + ")")
    let catalogUUID = !inCatalog ? customFunction.catalogs.find((el) => el.ExternalID === customFunction.catalogName).UUID : customFunction.catalogs.find((el) => el.ExternalID === inCatalog).UUID
    var bridgeObject = {
      references: {
        account: { UUID: name.accountUUID },
        catalog: { UUID: catalogUUID }
      },
      type: { Name: !in_transactionName ? name.transactionName : in_transactionName },
      responseCallback: skipSessionSaving ? "customFunction.createNewOrderCallback" : "customFunction.createNewOrderAndNavCallback",
      requestID: deepLink
    };
    pepperi.app.transactions.add(bridgeObject);
  };

  customFunction.createNewOrderAndNavCallback = function (res) {
    console.log('createNewOrderAndNavCallback res', res);
    if (res && res.success) {
        customFunction.setSessionStorage('LastOpenTransactionUUID', res.id);
      let uuid = res.id;
      if (res.requestID) {
        var requestID = res.requestID.replace('{{UUID}}', uuid.replace(/-/g, ''));
        customFunction.navigation(requestID);
      }
    }
  };
  customFunction.createNewOrderCallback = function (res) {
    console.log('createNewOrderCallback res', res);
    if (res && res.success) {
      let uuid = res.id;
      if (res.requestID) {
        var requestID = res.requestID.replace('{{UUID}}', uuid.replace(/-/g, ''));
        customFunction.navigation(requestID);
      }
    }
  };
  customFunction.closeAllMenusListener = function () {
    $('#select-menu').attr('tabindex', '-1');
    $('#select-menu').on('focusout', function () {
      $('#select-menu').removeClass('show');
    });
    $('#menuDropdown').attr('tabindex', '-1');
    $('#linksDropdown').attr('tabindex', '-1');
    $('#myDropdown').attr('tabindex', '-1');

    $('#menuDropdown').on('focusout', function () {
      $('#menuDropdown').removeClass('show');
    });

    $('#linksDropdown').on('focusout', function () {
      $('#linksDropdown').removeClass('show');
    });

    $('#myDropdown').on('focusout', function () {
      $('#myDropdown').removeClass('show');
    });

    // $('#sidebar-sm').on('focusout', function () {
    //   const e = document.getElementById("sidebar-sm");
    //   const btn = document.getElementById("btn");
    //   if (e.style.display == 'block') {
    //     e.style.display = 'none';
    //     btn.innerText = 'Open Menu'
    //   }
    // });
  }
 
  customFunction.openCloseMenu = function () {
    const over = document.getElementById("overSide");
    const e = document.getElementById("sidebar-sm");
    const btn = document.getElementById("btn");
    if (e.style.display == "block") {
      e.style.display = "none";
      over.style.display = "none";
      btn.innerText = "Open Menu";
    } else {
      over.style.display = "block";
      e.style.display = "block";
      btn.innerText = "Close Menu";
      $('#sidebar-sm').attr('tabindex', '-1');
      $('#sidebar-sm').focus()
    }
  };

  customFunction.getAccountStatus = function () {
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
  customFunction.getCurrentAccountCallback = function (res) {
    if (res && res.success && res.objects && res.objects.length)
    customHeader.accountUUID = res.objects[0].UUID;
    customFunction.getCatalogs();
  }

  customFunction.createNewActivity = function (in_transactionName, deeplink) {
    var evalCustomName = eval("(" + customName + ")")
    var bridgeObject = {
      references: {
        account: {
          UUID: evalCustomName.accountUUID,
        },
      },
      type: {
        Name: !in_transactionName ? evalCustomName.transactionName : in_transactionName,
      },

      responseCallback: "customFunction.createNewActivityCallback",
      requestID:{
        deeplink,
        customName
      } 
    };

    pepperi.app.activities.add(bridgeObject);
  };

  customFunction.createNewActivityCallback = function (res) {
    if (res && res.success) {
      var uuid = res.id;

      if (res.requestID) {
        var requestID = res.requestID.replace(
          "{{UUID}}",
          uuid.replace(/-/g, "")
        );
        customFunction.navigation(requestID);
      }
    }
  };
