function toggleVeg() {
  let q = document.getElementById("menuopt");
  let p = document.getElementById("contVeg");
  let r = document.getElementById("contNonveg");
  let s = document.getElementById("m");
  if (p.style.display == "none") {
    p.style.display = "flex";
    s.style.display = "block";
    r.style.display = "none";
  } else {
    p.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";
  }
}
function toggleNonveg() {
  let q = document.getElementById("menuopt");
  let p = document.getElementById("contVeg");
  let r = document.getElementById("contNonveg");
  let s = document.getElementById("m");

  if (r.style.display == "none") {
    r.style.display = "flex";
    s.style.display = "block";
    p.style.display = "none";
  } else {
    r.style.display = "none";
    p.style.display = "none";
    s.style.display = "none";
  }
}

// ------------------------------------------------------------------------------------------------------------

let str = "";
let price = "";
let tprice = 0;
let tot;

let bflag = false;
function Briyani() {
  if (bflag == false) {
    str = str + " Briyani";

    let qty = document.getElementById("brNum").value;

    price = price + "120";
    tprice = tprice + 120 * qty;
    bflag = true;
  } else {
    alert("briyani already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function BriyaniUnselect() {
  if (bflag == true) {
    bflag = false;
    let qty = document.getElementById("brNum").value;

    str = str.replace("Briyani", ""); //  ff
    price = price.replace("120", ""); // 200
    tprice = tprice - 120 * qty;

    alert("Briyani removed from cart");
  } else {
    alert("No Briyani in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let fflag = false;
function Fishfry() {
  if (fflag == false) {
    str = str + " Fishfry";
    let qty = document.getElementById("ffNum").value;

    price = price + " 200";
    tprice = tprice + 200 * qty;

    fflag = true;
  } else {
    alert("Fish fry already selected");
  }
  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function FishfryUnselect() {
  if (fflag == true) {
    fflag = false;
    let qty = document.getElementById("ffNum").value;

    str = str.replace("Fishfry", ""); //  ff
    price = price.replace("200", ""); // 200
    tprice = tprice - 200 * qty;

    alert("Fish fry removed from cart");
  } else {
    alert("No fresh fry in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let Nflag = false;
function NuggetsSelect() {
  if (Nflag == false) {
    str = str + " Nuggets";

    let qty = document.getElementById("cnNum").value;

    price = price + " 150";
    tprice = tprice + 150 * qty;
    Nflag = true;
  } else {
    alert("ChickenNuggets already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function NuggetsUnselect() {
  if (Nflag == true) {
    Nflag = false;
    let qty = document.getElementById("cnNum").value;

    str = str.replace("Nuggets", ""); //  ff
    price = price.replace("150", ""); // 200
    tprice = tprice - 150 * qty;

    alert("Nuggets removed from cart");
  } else {
    alert("No Nuggets in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let Cflag = false;
function CrabSelect() {
  if (Cflag == false) {
    str = str + " JuicyCrab";

    let qty = document.getElementById("jcNum").value;

    price = price + " 180";
    tprice = tprice + 180 * qty;
    Cflag = true;
  } else {
    alert("JuicyCrab already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function CrabUnselect() {
  if (Cflag == true) {
    Cflag = false;
    let qty = document.getElementById("jcNum").value;

    str = str.replace("JuicyCrab", ""); //  ff
    price = price.replace("180", ""); // 200
    tprice = tprice - 180 * qty;

    alert("JuicyCrab removed from cart");
  } else {
    alert("No JuicyCrab in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let CPflag = false;
function ParottaSelect() {
  if (CPflag == false) {
    str = str + " ChickenCurry";

    let qty = document.getElementById("cpNum").value;

    price = price + "  185";
    tprice = tprice + 185 * qty;
    CPflag = true;
  } else {
    alert("ChickenCurry already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function ParottaUnselect() {
  if (CPflag == true) {
    CPflag = false;
    let qty = document.getElementById("cpNum").value;

    str = str.replace("ChickenCurry", ""); //  ff
    price = price.replace("185", ""); // 200
    tprice = tprice - 185 * qty;

    alert("Chickencurry removed from cart");
  } else {
    alert("No Chickencurry in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let MFflag = false;
function MuttonSelect() {
  if (MFflag == false) {
    str = str + " MuttonFry";

    let qty = document.getElementById("mfNum").value;

    price = price + "  220";
    tprice = tprice + 220 * qty;
    MFflag = true;
  } else {
    alert("MuttonFry already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function MuttonUnselect() {
  if (MFflag == true) {
    MFflag = false;
    let qty = document.getElementById("mfNum").value;

    str = str.replace("MuttonFry", ""); //  ff
    price = price.replace("220", ""); // 200
    tprice = tprice - 220 * qty;

    alert("MuttonFry removed from cart");
  } else {
    alert("No MuttonFry in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}
// --------------veg-Menu-----------------------------------------------------

let Dflag = false;
function DosaSelect() {
  if (Dflag == false) {
    str = str + " Dosa";

    let qty = document.getElementById("DNum").value;

    price = price + " 70";
    tprice = tprice + 70 * qty;
    Dflag = true;
  } else {
    alert("Dosa already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function DosaUnselect() {
  if (Dflag == true) {
    Dflag = false;
    let qty = document.getElementById("DNum").value;

    str = str.replace("Dosa", ""); //  ff
    price = price.replace("70", ""); // 200
    tprice = tprice - 70 * qty;

    alert("Dosa removed from cart");
  } else {
    alert("No Dosa in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let Iflag = false;
function IdlySelect() {
  if (Iflag == false) {
    str = str + "   Idly(2nos)";

    let qty = document.getElementById("INum").value;

    price = price + " 30";
    tprice = tprice + 30 * qty;
    Iflag = true;
  } else {
    alert("Idly already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function IdlyUnselect() {
  if (Iflag == true) {
    Iflag = false;
    let qty = document.getElementById("INum").value;

    str = str.replace("Idly(2nos)", ""); //  ff
    price = price.replace("30", ""); // 200
    tprice = tprice - 30 * qty;

    alert("Idly removed from cart");
  } else {
    alert("No Idly in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let VBflag = false;
function VegbriyaniSelect() {
  if (VBflag == false) {
    str = str + " VegBriyani";

    let qty = document.getElementById("VBNum").value;

    price = price + " 90";
    tprice = tprice + 90 * qty;
    VBflag = true;
  } else {
    alert("VegBriyani already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function VegbriyaniUnselect() {
  if (VBflag == true) {
    VBflag = false;
    let qty = document.getElementById("VBNum").value;

    str = str.replace("VegBriyani", ""); //  ff
    price = price.replace("90", ""); // 200
    tprice = tprice - 90 * qty;

    alert("VegBriyani removed from cart");
  } else {
    alert("No VegBriyani in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let CRflag = false;
function CurdSelect() {
  if (CRflag == false) {
    str = str + " CurdRice";

    let qty = document.getElementById("CSNum").value;

    price = price + " 45";
    tprice = tprice + 45 * qty;
    CRflag = true;
  } else {
    alert("CurdRice already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function CurdUnselect() {
  if (CRflag == true) {
    CRflag = false;
    let qty = document.getElementById("CSNum").value;

    str = str.replace("CurdRice", ""); //  ff
    price = price.replace("45", ""); // 200
    tprice = tprice - 45 * qty;

    alert("CurdRice removed from cart");
  } else {
    alert("No CurdRice in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let MRflag = false;
function MintSelect() {
  if (MRflag == false) {
    str = str + " MintRice";

    let qty = document.getElementById("MRNum").value;

    price = price + " 55";
    tprice = tprice + 55 * qty;
    MRflag = true;
  } else {
    alert("MintRice already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function MintUnselect() {
  if (MRflag == true) {
    MRflag = false;
    let qty = document.getElementById("MRNum").value;

    str = str.replace("MintRice", ""); //  ff
    price = price.replace("55", ""); // 200
    tprice = tprice - 55 * qty;

    alert("MintRice removed from cart");
  } else {
    alert("No MintRice in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

let Idiflag = false;
function IdiSelect() {
  if (Idiflag == false) {
    str = str + " Idiyappam";

    let qty = document.getElementById("IdiNum").value;

    price = price + " 60";
    tprice = tprice + 60 * qty;
    Idiflag = true;
  } else {
    alert("Idiyappam already selected");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

function IdiUnselect() {
  if (Idiflag == true) {
    Idiflag = false;
    let qty = document.getElementById("IdiNum").value;

    str = str.replace("Idiyappam", ""); //  ff
    price = price.replace("60", ""); // 200
    tprice = tprice - 60 * qty;

    alert("Idiyappam removed from cart");
  } else {
    alert("No Idiyappam in cart");
  }

  document.getElementById("item").innerHTML = str;
  document.getElementById("pr").innerHTML = price;
}

// -----------------------BILL----------------------------
function calculate() {
  if (tprice > 0) {
    if (tprice > 500) {
      dis = tprice * 10 / 100;
      tot = tprice - dis;
      document.getElementById("offer").innerHTML = "Dis: - " + dis;
      document.getElementById("total").innerHTML = "Total:Rs " + tot;
    } else {
      document.getElementById("offer").innerHTML =
        "Purchase for more than Rs500 for offers";
      document.getElementById("total").innerHTML = "Total:Rs " + tprice;
    }
    document.getElementById("pay").innerHTML = "Price:Rs " + tprice;
  } else {
    document.getElementById("offer").innerHTML = "Cart is empty";
    document.getElementById("pay").innerHTML = "Price:";
    document.getElementById("total").innerHTML = null;
  }
}
