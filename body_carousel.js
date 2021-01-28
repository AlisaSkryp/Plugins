customFunction.slideLifetyme = 5000;
customFunction.slideSwitchTimeoutKeeper;
customFunction.CaruselData = []
customFunction.carousel = function (slideid, CaruselData) {
    customFunction.CaruselData = CaruselData
    if (document.getElementById("slides")) {
        this.transactionName = Transaction
        this.catalogName = Catalog
    let htmlStr = "";
    let indicatorsStr = "";
    var idx = 0;
    var value = CaruselData[idx];
    htmlStr += `<div class="slide" onclick="customHomepage.setUUIDandNav(null,null,'${value.deepLink}')" data-state="active"
    style="background-image: url('${value.imageURL}'); display: block;">
    <div class="gard-overlay">
        <button id="prev" class="button-weak-invert button-icon hidden-on-mobile"
            onclick="minusSlide()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M4.00083514,11.9333905 C4.00147275,11.9136916 4.00240186,11.8939888 4.00362383,11.874289 L4,12 C4,11.941539 4.0025083,11.8836638 4.00742314,11.8264762 C4.00983834,11.795513 4.0132029,11.764829 4.01728725,11.7341905 C4.02017201,11.7141312 4.02314228,11.6941061 4.02640704,11.6741801 C4.03108845,11.6445646 4.03666341,11.614877 4.04292778,11.5852717 C4.04845379,11.5596696 4.05434248,11.5342475 4.06071064,11.5090162 C4.06366103,11.4970831 4.06681283,11.4851033 4.07008003,11.4731421 C4.07394022,11.4610118 4.07629683,11.4526456 4.07870784,11.4442942 C4.08664727,11.415086 4.09567525,11.38631 4.1053277,11.3578221 C4.10922803,11.3464786 4.11338529,11.3345987 4.11766084,11.3227444 L4.12185334,11.3121718 C4.12320731,11.3084654 4.12457234,11.3047627 4.12594841,11.3010637 C4.17735915,11.1620877 4.24425642,11.0303516 4.32420886,10.9079156 L4.33589941,10.8905996 L8.33589941,4.89059961 C8.94860433,3.97154223 10.190343,3.72319449 11.1094004,4.33589941 C12.0284578,4.94860433 12.2768055,6.19034302 11.6641006,7.10940039 L11.6641006,7.10940039 L9.737,9.99978745 L18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 L9.737,13.9997875 L11.6641006,16.8905996 C12.2768055,17.809657 12.0284578,19.0513957 11.1094004,19.6641006 C10.190343,20.2768055 8.94860433,20.0284578 8.33589941,19.1094004 L4.33589941,13.1094004 L4.32827108,13.0982801 C4.24671069,12.9743852 4.17855307,12.8408839 4.12586157,12.6998395 C4.12459157,12.6952895 4.12321685,12.6915607 4.12185334,12.6878282 L4.08467806,12.5776264 C4.08220157,12.5694035 4.07977659,12.5611582 4.07740349,12.552891 C4.0767557,12.5489122 4.07570919,12.5452255 4.07467326,12.541536 C4.06678688,12.5151067 4.0613395,12.4942108 4.05624152,12.4732657 C4.05194765,12.4552489 4.04768346,12.4365236 4.04368405,12.4177003 C4.04226104,12.4090639 4.04052289,12.4006535 4.03883865,12.3922323 C4.03366277,12.3688145 4.02990319,12.3481099 4.02647635,12.3273764 C4.02307182,12.3055999 4.01977241,12.2832434 4.01684607,12.2607697 C4.01615342,12.2540046 4.01530606,12.2473201 4.01449225,12.2406309 L4.01180994,12.2208211 C4.00987451,12.2032625 4.00817408,12.1856931 4.00670769,12.1681175 C4.00577444,12.1538336 4.0047109,12.1391462 4.00380681,12.1244158 C4.00282844,12.1095649 4.00204787,12.0945175 4.00143675,12.0794581 C4.00112828,12.0752346 4.00097472,12.070922 4.00083514,12.0666095 Z" />
            </svg>
        </button>
        <div class="slide-text">
            <div id="shop_now">${value.mainTitle}</div>
            <h1 class="title">${value.title}</h1>
            <p class="subtitle">${value.description}</p>
            <button onclick="customHomepage.setUUIDandNav(null,null,'${value.deepLink}')" class="strong-btn-invert body-md bolder">
            ${value.buttonText}</button>
        </div>
        <button id="next" class="button-weak-invert button-icon hidden-on-mobile" onclick="plusSlide()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M4.00083514,11.9333905 C4.00147275,11.9136916 4.00240186,11.8939888 4.00362383,11.874289 L4,12 C4,11.941539 4.0025083,11.8836638 4.00742314,11.8264762 C4.00983834,11.795513 4.0132029,11.764829 4.01728725,11.7341905 C4.02017201,11.7141312 4.02314228,11.6941061 4.02640704,11.6741801 C4.03108845,11.6445646 4.03666341,11.614877 4.04292778,11.5852717 C4.04845379,11.5596696 4.05434248,11.5342475 4.06071064,11.5090162 C4.06366103,11.4970831 4.06681283,11.4851033 4.07008003,11.4731421 C4.07394022,11.4610118 4.07629683,11.4526456 4.07870784,11.4442942 C4.08664727,11.415086 4.09567525,11.38631 4.1053277,11.3578221 C4.10922803,11.3464786 4.11338529,11.3345987 4.11766084,11.3227444 L4.12185334,11.3121718 C4.12320731,11.3084654 4.12457234,11.3047627 4.12594841,11.3010637 C4.17735915,11.1620877 4.24425642,11.0303516 4.32420886,10.9079156 L4.33589941,10.8905996 L8.33589941,4.89059961 C8.94860433,3.97154223 10.190343,3.72319449 11.1094004,4.33589941 C12.0284578,4.94860433 12.2768055,6.19034302 11.6641006,7.10940039 L11.6641006,7.10940039 L9.737,9.99978745 L18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 L9.737,13.9997875 L11.6641006,16.8905996 C12.2768055,17.809657 12.0284578,19.0513957 11.1094004,19.6641006 C10.190343,20.2768055 8.94860433,20.0284578 8.33589941,19.1094004 L4.33589941,13.1094004 L4.32827108,13.0982801 C4.24671069,12.9743852 4.17855307,12.8408839 4.12586157,12.6998395 C4.12459157,12.6952895 4.12321685,12.6915607 4.12185334,12.6878282 L4.08467806,12.5776264 C4.08220157,12.5694035 4.07977659,12.5611582 4.07740349,12.552891 C4.0767557,12.5489122 4.07570919,12.5452255 4.07467326,12.541536 C4.06678688,12.5151067 4.0613395,12.4942108 4.05624152,12.4732657 C4.05194765,12.4552489 4.04768346,12.4365236 4.04368405,12.4177003 C4.04226104,12.4090639 4.04052289,12.4006535 4.03883865,12.3922323 C4.03366277,12.3688145 4.02990319,12.3481099 4.02647635,12.3273764 C4.02307182,12.3055999 4.01977241,12.2832434 4.01684607,12.2607697 C4.01615342,12.2540046 4.01530606,12.2473201 4.01449225,12.2406309 L4.01180994,12.2208211 C4.00987451,12.2032625 4.00817408,12.1856931 4.00670769,12.1681175 C4.00577444,12.1538336 4.0047109,12.1391462 4.00380681,12.1244158 C4.00282844,12.1095649 4.00204787,12.0945175 4.00143675,12.0794581 C4.00112828,12.0752346 4.00097472,12.070922 4.00083514,12.0666095 Z"
                    transform="matrix(-1 0 0 1 24 0)" />
            </svg>
        </button>
    </div>
</div>`

document.getElementById("slides").innerHTML = htmlStr;

for (const [idx1, value] of customFunction.CaruselData.entries()) {
  indicatorsStr +=
    idx1 == idx
    ? `<div class="radio-box">
    <input type="radio" name="indicator" data-slide="${idx1}" data-time="${value.time}"  data-state="active" onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)" checked="checked">
    <span class="radio-dot" data-slide="${idx1}" data-time="${value.time}"  data-state="active"  onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)"></span>
    </div>`
     : `<div class="radio-box">
    <input type="radio" name="indicator" data-slide="${idx1}" data-time="${value.time}" onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)">
    <span class="radio-dot" data-slide="${idx1}" data-time="${value.time}"  data-state="active"  onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)"></span>
    </div>`
}


document.getElementById("indicators").innerHTML = indicatorsStr;
customFunction.setSessionStorage("savedIDX", 0);
customFunction.slideLifetyme = value.time;
customFunction.switchSlide();
customFunction.swipeListener()
} else {
    setTimeout(() => {
      customHomepage.buildHTML()
    }, 100);
  }
}

customFunction.playerClick = function () {
    var btn = document.getElementById("player");
    var btnClass = btn.className;
    if (btnClass == "play") {
      btn.className = "pause";
      customFunction.switchSlide();
    } else {
      btn.className = "play";
      clearTimeout(customFunction.slideSwitchTimeoutKeeper);
    }
  };
  customFunction.switchSlide = function (isCurrent, next = true) {
    clearTimeout(this.slideSwitchTimeoutKeeper);
    let htmlStr = "";

    let indicatorsStr = "";

    var idx;
    var value;

    idx =
      +sessionStorage.getItem("savedIDX") < CaruselData.length
        ? +sessionStorage.getItem("savedIDX")
        : 0;

    value = CaruselData[idx];
    if (next) {
        customFunction.setSessionStorage(
        "savedIDX",
        +sessionStorage.getItem("savedIDX") + 1 < CaruselData.length
          ? +sessionStorage.getItem("savedIDX") + 1
          : 0
      );
    } else {
      this.setSessionStorage(
        "savedIDX",
        +sessionStorage.getItem("savedIDX") - 1 > 0
          ? +sessionStorage.getItem("savedIDX") - 1
          : 3
      );

    }

    htmlStr += `<div class="slide" onclick="customHomepage.setUUIDandNav(null,null,'${value.deepLink}')" data-state="active"
    style="background-image: url('${value.imageURL}'); display: block;">
    <div class="gard-overlay">
        <button id="prev" class="button-weak-invert button-icon hidden-on-mobile"
            onclick="minusSlide()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M4.00083514,11.9333905 C4.00147275,11.9136916 4.00240186,11.8939888 4.00362383,11.874289 L4,12 C4,11.941539 4.0025083,11.8836638 4.00742314,11.8264762 C4.00983834,11.795513 4.0132029,11.764829 4.01728725,11.7341905 C4.02017201,11.7141312 4.02314228,11.6941061 4.02640704,11.6741801 C4.03108845,11.6445646 4.03666341,11.614877 4.04292778,11.5852717 C4.04845379,11.5596696 4.05434248,11.5342475 4.06071064,11.5090162 C4.06366103,11.4970831 4.06681283,11.4851033 4.07008003,11.4731421 C4.07394022,11.4610118 4.07629683,11.4526456 4.07870784,11.4442942 C4.08664727,11.415086 4.09567525,11.38631 4.1053277,11.3578221 C4.10922803,11.3464786 4.11338529,11.3345987 4.11766084,11.3227444 L4.12185334,11.3121718 C4.12320731,11.3084654 4.12457234,11.3047627 4.12594841,11.3010637 C4.17735915,11.1620877 4.24425642,11.0303516 4.32420886,10.9079156 L4.33589941,10.8905996 L8.33589941,4.89059961 C8.94860433,3.97154223 10.190343,3.72319449 11.1094004,4.33589941 C12.0284578,4.94860433 12.2768055,6.19034302 11.6641006,7.10940039 L11.6641006,7.10940039 L9.737,9.99978745 L18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 L9.737,13.9997875 L11.6641006,16.8905996 C12.2768055,17.809657 12.0284578,19.0513957 11.1094004,19.6641006 C10.190343,20.2768055 8.94860433,20.0284578 8.33589941,19.1094004 L4.33589941,13.1094004 L4.32827108,13.0982801 C4.24671069,12.9743852 4.17855307,12.8408839 4.12586157,12.6998395 C4.12459157,12.6952895 4.12321685,12.6915607 4.12185334,12.6878282 L4.08467806,12.5776264 C4.08220157,12.5694035 4.07977659,12.5611582 4.07740349,12.552891 C4.0767557,12.5489122 4.07570919,12.5452255 4.07467326,12.541536 C4.06678688,12.5151067 4.0613395,12.4942108 4.05624152,12.4732657 C4.05194765,12.4552489 4.04768346,12.4365236 4.04368405,12.4177003 C4.04226104,12.4090639 4.04052289,12.4006535 4.03883865,12.3922323 C4.03366277,12.3688145 4.02990319,12.3481099 4.02647635,12.3273764 C4.02307182,12.3055999 4.01977241,12.2832434 4.01684607,12.2607697 C4.01615342,12.2540046 4.01530606,12.2473201 4.01449225,12.2406309 L4.01180994,12.2208211 C4.00987451,12.2032625 4.00817408,12.1856931 4.00670769,12.1681175 C4.00577444,12.1538336 4.0047109,12.1391462 4.00380681,12.1244158 C4.00282844,12.1095649 4.00204787,12.0945175 4.00143675,12.0794581 C4.00112828,12.0752346 4.00097472,12.070922 4.00083514,12.0666095 Z" />
            </svg>
        </button>
        <div class="slide-text">
            <div id="shop_now">${value.mainTitle}</div>
            <h1 class="title">${value.title}</h1>
            <p class="subtitle">${value.description}</p>
            <button onclick="customHomepage.setUUIDandNav(null,null,'${value.deepLink}')" class="strong-btn-invert body-md bolder">
            ${value.buttonText}</button>
        </div>
        <button id="next" class="button-weak-invert button-icon hidden-on-mobile" onclick="plusSlide()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M4.00083514,11.9333905 C4.00147275,11.9136916 4.00240186,11.8939888 4.00362383,11.874289 L4,12 C4,11.941539 4.0025083,11.8836638 4.00742314,11.8264762 C4.00983834,11.795513 4.0132029,11.764829 4.01728725,11.7341905 C4.02017201,11.7141312 4.02314228,11.6941061 4.02640704,11.6741801 C4.03108845,11.6445646 4.03666341,11.614877 4.04292778,11.5852717 C4.04845379,11.5596696 4.05434248,11.5342475 4.06071064,11.5090162 C4.06366103,11.4970831 4.06681283,11.4851033 4.07008003,11.4731421 C4.07394022,11.4610118 4.07629683,11.4526456 4.07870784,11.4442942 C4.08664727,11.415086 4.09567525,11.38631 4.1053277,11.3578221 C4.10922803,11.3464786 4.11338529,11.3345987 4.11766084,11.3227444 L4.12185334,11.3121718 C4.12320731,11.3084654 4.12457234,11.3047627 4.12594841,11.3010637 C4.17735915,11.1620877 4.24425642,11.0303516 4.32420886,10.9079156 L4.33589941,10.8905996 L8.33589941,4.89059961 C8.94860433,3.97154223 10.190343,3.72319449 11.1094004,4.33589941 C12.0284578,4.94860433 12.2768055,6.19034302 11.6641006,7.10940039 L11.6641006,7.10940039 L9.737,9.99978745 L18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 L9.737,13.9997875 L11.6641006,16.8905996 C12.2768055,17.809657 12.0284578,19.0513957 11.1094004,19.6641006 C10.190343,20.2768055 8.94860433,20.0284578 8.33589941,19.1094004 L4.33589941,13.1094004 L4.32827108,13.0982801 C4.24671069,12.9743852 4.17855307,12.8408839 4.12586157,12.6998395 C4.12459157,12.6952895 4.12321685,12.6915607 4.12185334,12.6878282 L4.08467806,12.5776264 C4.08220157,12.5694035 4.07977659,12.5611582 4.07740349,12.552891 C4.0767557,12.5489122 4.07570919,12.5452255 4.07467326,12.541536 C4.06678688,12.5151067 4.0613395,12.4942108 4.05624152,12.4732657 C4.05194765,12.4552489 4.04768346,12.4365236 4.04368405,12.4177003 C4.04226104,12.4090639 4.04052289,12.4006535 4.03883865,12.3922323 C4.03366277,12.3688145 4.02990319,12.3481099 4.02647635,12.3273764 C4.02307182,12.3055999 4.01977241,12.2832434 4.01684607,12.2607697 C4.01615342,12.2540046 4.01530606,12.2473201 4.01449225,12.2406309 L4.01180994,12.2208211 C4.00987451,12.2032625 4.00817408,12.1856931 4.00670769,12.1681175 C4.00577444,12.1538336 4.0047109,12.1391462 4.00380681,12.1244158 C4.00282844,12.1095649 4.00204787,12.0945175 4.00143675,12.0794581 C4.00112828,12.0752346 4.00097472,12.070922 4.00083514,12.0666095 Z"
                    transform="matrix(-1 0 0 1 24 0)" />
            </svg>
        </button>
    </div>
</div>`
    if (document.getElementById("slides")) {
      document.getElementById("slides").innerHTML = htmlStr;
      for (const [idx1, value] of CaruselData.entries()) {
        indicatorsStr +=
          idx1 == idx
            ? `<div class="radio-box">
           <input type="radio" name="indicator" data-slide="${idx1}" data-time="${value.time}"  data-state="active" onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)" checked="checked">
           <span class="radio-dot" data-slide="${idx1}" data-time="${value.time}"  data-state="active"  onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)"></span>
           </div>`
            : `<div class="radio-box">
           <input type="radio" name="indicator" data-slide="${idx1}" data-time="${value.time}" onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)">
           <span class="radio-dot" data-slide="${idx1}" data-time="${value.time}"  data-state="active"  onclick="customHomepage.setSessionStorage('savedIDX', this.getAttribute('data-slide')); customHomepage.switchSlide(true)"></span>
           </div>`
      }
      document.getElementById("indicators").innerHTML = indicatorsStr;
      document.querySelectorAll(".slide-text")[0].style.opacity = 1;
      customFunction.slideLifetyme = value.time;
      customFunction.slideSwitchTimeoutKeeper = setTimeout(function () {
        customHomepage.switchSlide();
      }, this.slideLifetyme);
    }
  };
  customFunction.swipeListener = function () {
    var initialPoint;
    var finalPoint;
    document.addEventListener('touchstart', function (event) {
      event.preventDefault();
      event.stopPropagation();
      initialPoint = event.changedTouches[0];
    }, false);
    document.addEventListener('touchend', function (event) {
      event.preventDefault();
      event.stopPropagation();
      finalPoint = event.changedTouches[0];
      var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
      var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
      if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
          if (finalPoint.pageX < initialPoint.pageX) {
            customFunction.switchSlide(true);
          }
          else {
            customFunction.switchSlide(true, false);
          }
        }
      }
    }, false);
  }
  customFunction.swipeListener()
