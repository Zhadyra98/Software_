function Calculator() {
    this.cur = "";
    this.mur = "";//to display any case
    this.case = "dec";
    this.memory = "";
    this.operation = "";
    this.cont = document.createElement('div');
    this.box = document.createElement('div');
    this.conBox = document.createElement('div');
    this.disp = document.createElement('input');
    this.disp.setAttribute('readonly','readonly');
    this.btn0 = document.createElement('button');
    this.btn0.innerHTML = "0";
    this.btn1 = document.createElement('button');
    this.btn1.innerHTML = "1";
    this.btn2 = document.createElement('button');
    this.btn2.innerHTML = "2";
    this.btn3 = document.createElement('button');
    this.btn3.innerHTML = "3";
    this.btn4 = document.createElement('button');
    this.btn4.innerHTML = "4";
    this.btn5 = document.createElement('button');
    this.btn5.innerHTML = "5";
    this.btn6 = document.createElement('button');
    this.btn6.innerHTML = "6";
    this.btn7 = document.createElement('button');
    this.btn7.innerHTML = "7";
    this.btn8 = document.createElement('button');
    this.btn8.innerHTML = "8";
    this.btn9 = document.createElement('button');
    this.btn9.innerHTML = "9";

    this.btn_a = document.createElement('button');
    this.btn_a.innerHTML = "a";
    this.btn_b = document.createElement('button');
    this.btn_b.innerHTML = "b";
    this.btn_c = document.createElement('button');
    this.btn_c.innerHTML = "c";
    this.btn_d = document.createElement('button');
    this.btn_d.innerHTML = "d";
    this.btn_e = document.createElement('button');
    this.btn_e.innerHTML = "e";
    this.btn_f = document.createElement('button');
    this.btn_f.innerHTML = "f";

    this.btnPlus = document.createElement('button');
    this.btnPlus.innerHTML = "+";
    this.btnMin = document.createElement('button');
    this.btnMin.innerHTML = "-";
    this.btnMult = document.createElement('button');
    this.btnMult.innerHTML = "*";
    this.btnDiv = document.createElement('button');
    this.btnDiv.innerHTML = "/";
    this.btnC = document.createElement('button');
    this.btnC.innerHTML = "C";
    this.btnE = document.createElement('button');
    this.btnE.innerHTML = "=";

    this.btnBin = document.createElement('input');
    this.btnBin.type='radio';
    this.btnBin.value="bin";
    this.btnBin.name="convert";

    this.btnOct = document.createElement('input');
    this.btnOct.type='radio';
    this.btnOct.value="oct";
    this.btnOct.name="convert";

    this.btnHex = document.createElement('input');
    this.btnHex.type='radio';
    this.btnHex.value="hex";
    this.btnHex.name="convert";

    this.btnDec = document.createElement('input');
    this.btnDec.type='radio';
    this.btnDec.value="dec";
    this.btnDec.checked=true;
    this.btnDec.name="convert";
}
function open(){
    var body = document.getElementById('main');
    var calc = new Calculator();
    calc.display(body);
    console.log(calc);

    
    var con = document.getElementsByName("convert");
    console.log(con.length)


    calc.btnBin.onclick = function(){
      calc.convertTo(con);
      calc.case="bin";
      calc.control("bin");
    }
    calc.btnOct.onclick = function(){
      calc.convertTo(con);
      calc.case="oct";
      calc.control("oct");
    }
    calc.btnHex.onclick = function(){
      calc.convertTo(con);
      calc.case="hex";
      calc.control("hex");
    }
    calc.btnDec.onclick = function(){
      calc.convertTo(con);
      calc.case="dec";
      calc.control("dec");
    }
    

    calc.btn1.onclick = function(){
      calc.btn(1);
    }
    calc.btn2.onclick = function(){
      calc.btn(2);
    }
    calc.btn3.onclick = function(){
      calc.btn(3);
    }
    calc.btn0.onclick = function(){
      calc.btn(0);
    }
    calc.btn4.onclick = function(){
      calc.btn(4);
    }
    calc.btn5.onclick = function(){
      calc.btn(5);
    }
    calc.btn6.onclick = function(){
      calc.btn(6);
    }
    calc.btn7.onclick = function(){
      calc.btn(7);
    }
    calc.btn8.onclick = function(){
      calc.btn(8);
    }
    calc.btn9.onclick = function(){
      calc.btn(9);
    }

    calc.btn_a.onclick = function(){
      calc.btn("a");
    }
    calc.btn_b.onclick = function(){
      calc.btn("b");
    }
    calc.btn_c.onclick = function(){
      calc.btn("c");
    }
    calc.btn_d.onclick = function(){
      calc.btn("d");
    }
    calc.btn_e.onclick = function(){
      calc.btn("e");
    }
    calc.btn_f.onclick = function(){
      calc.btn("f");
    }


    calc.btnC.onclick = function(){
      calc.clear();
    }
  
    calc.btnPlus.onclick = function(){
      calc.oper('+');
    }
    calc.btnMin.onclick = function(){
      calc.oper('-');
    }
    calc.btnMult.onclick = function(){
      calc.oper('*');
    }
    calc.btnDiv.onclick = function(){
      calc.oper('/');
    }
    calc.btnE.onclick = function(){
      calc.equal();
    }


    calc.control(calc.case);
  }
  
  Calculator.prototype.display = function (body) {
      body.appendChild(this.cont);
      body.appendChild(this.conBox);
      body.appendChild(this.box);
      this.box.setAttribute("id",'boxer');
      this.cont.appendChild(this.disp);
      
      this.box.appendChild(this.btn1);
      this.box.appendChild(this.btn2);
      this.box.appendChild(this.btn3);
      this.box.appendChild(document.createElement('br'));
      this.box.appendChild(this.btn4);
      this.box.appendChild(this.btn5);
      this.box.appendChild(this.btn6);
      this.box.appendChild(document.createElement('br'));
      this.box.appendChild(this.btn7);
      this.box.appendChild(this.btn8);
      this.box.appendChild(this.btn9);
      this.box.appendChild(document.createElement('br'));
      this.box.appendChild(this.btn0);
      this.box.appendChild(this.btnPlus);
      this.box.appendChild(this.btnMin);
      this.box.appendChild(document.createElement('br'));
      this.box.appendChild(this.btnMult);
      this.box.appendChild(this.btnDiv);
      this.box.appendChild(this.btnC);
      this.box.appendChild(this.btnE);
      this.box.appendChild(document.createElement('br'));
      this.box.appendChild(this.btn_a);
      this.box.appendChild(this.btn_b);
      this.box.appendChild(this.btn_c);
      this.box.appendChild(document.createElement('br'));
      this.box.appendChild(this.btn_d);
      this.box.appendChild(this.btn_e);
      this.box.appendChild(this.btn_f);


      this.conBox.appendChild(this.btnBin);
      var b=document.createElement("span");
      b.innerHTML="bin";
      this.conBox.appendChild(b);
      this.conBox.appendChild(this.btnOct);
      var o=document.createElement("span");
      o.innerHTML="oct";
      this.conBox.appendChild(o);
      this.conBox.appendChild(this.btnDec);
      var d=document.createElement("span");
      d.innerHTML="dec";
      this.conBox.appendChild(d);
      this.conBox.appendChild(this.btnHex);
      var h=document.createElement("span");
      h.innerHTML="hex";
      this.conBox.appendChild(h);
  };

  Calculator.prototype.convertTo = function(con) {
    for(var i=0;i<con.length;i++){
      if(con[i].checked){
        switch(con[i].value){
            case "bin":
              this.disp.value=(this.cur*1).toString(2);
              this.mur=(this.cur*1).toString(2);
              break;
            case "oct":
              this.disp.value=(this.cur*1).toString(8);
              this.mur=(this.cur*1).toString(8);
              break;
            case "hex":
              this.disp.value=(this.cur*1).toString(16);
              this.mur=(this.cur*1).toString(16);
              break;
            case "dec":
              this.disp.value=this.cur;
              this.mur=this.cur;
              break;
        }
      }
    }
    
  };
  
  Calculator.prototype.btn = function (num) {
    this.mur+=num;
    switch(this.case){
        case "bin":
          this.cur = fromBinToDec(this.mur);
          break;
        case "oct":
          this.cur = fromOctToDec(this.mur);
          break;
        case "hex":
          this.cur = fromHexToDec(this.mur);
          break;
        case "dec":
          this.cur=this.mur;
          break;
    }
    this.disp.value=this.mur;
  };
  
  Calculator.prototype.clear = function () {
    this.cur="";
    this.mur="";
    this.disp.value=this.mur;
  };
  
  Calculator.prototype.oper = function (opera) {
    this.memory = this.cur;
    this.mur+=opera;
    this.disp.value=this.mur;
    this.cur = "";
    this.mur = "";
    this.operation=opera;
  };
  
    Calculator.prototype.equal = function () {
    var result;
    if(this.operation=='+')
    {
      result = this.memory*1 + this.cur*1;
    }
    else if(this.operation=='-')
    {
      result = this.memory - this.cur;
    }
    else if(this.operation=='*')
    {
      result = this.memory * this.cur;
    }
    else
    {
      result = this.memory / this.cur;
    }
    console.log(this);
    
    switch(this.case){
        case "bin":
          this.disp.value=(result*1).toString(2);
          this.mur=(result*1).toString(2);
          break;
        case "oct":
          this.disp.value=(result*1).toString(8);
          this.mur=(result*1).toString(8);
          break;
        case "hex":
          this.disp.value=(result*1).toString(16);
          this.mur=(result*1).toString(16);
          break;
        case "dec":
          this.disp.value=result;
          this.mur=result;
          break;
    }

    this.cur = result;
    this.operation="";
    this.memory="";
    console.log(this);
  };
  

function fromBinToDec(con) {
    var inDecimal=0;
    var j=0;
    var dew;
    for(var i=con.length-1;i>=0;i--)
    {
        dew=parseInt(con[i],10);
        inDecimal+=dew*Math.pow(2,j);
        j++;
    }
    return inDecimal+"";
}

function fromOctToDec(con) {
    var inDecimal=0;
    var j=0;
    var dew;
    for(var i=con.length-1;i>=0;i--)
    {
        dew=parseInt(con[i],10);
        inDecimal+=dew*Math.pow(8,j);
        j++;
    }
    return inDecimal+"";
}

function fromHexToDec(con) {
    var inDecimal=0;
    var j=0;
    for(var i=con.length-1;i>=0;i--)
    {
        if(con[i]=='a')
        {
            inDecimal+=10*Math.pow(16,j);
            j++;
        }
        else if(con[i]=='b')
        {
            inDecimal+=11*Math.pow(16,j);
            j++;
        }
        else if(con[i]=='c')
        {
            inDecimal+=12*Math.pow(16,j);
            j++;
        }
        else if(con[i]=='d')
        {
            inDecimal+=13*Math.pow(16,j);
            j++;
        }
        else if(con[i]=='e')
        {
            inDecimal+=14*Math.pow(16,j);
            j++;
        }
        else if(con[i]=='f')
        {
            inDecimal+=15*Math.pow(16,j);
            j++;
        }
        else
        {
            inDecimal+=parseInt(con[i],10)*Math.pow(16,j);
            j++;
        }
        
        
    }
    return inDecimal+"";
}


Calculator.prototype.control = function(format) {
  this.zeroToZero();
  switch(format){
    case "bin":
          this.btn3.disabled=true;
          this.btn4.disabled=true;
          this.btn5.disabled=true;
          this.btn6.disabled=true;
          this.btn7.disabled=true;
          this.btn8.disabled=true;
          this.btn9.disabled=true;
          this.btn2.disabled=true;
          this.btn_a.disabled=true;
          this.btn_b.disabled=true;
          this.btn_c.disabled=true;
          this.btn_d.disabled=true;
          this.btn_e.disabled=true;
          this.btn_f.disabled=true;
          break;
        case "oct":
          this.btn3.disabled=false;
          this.btn4.disabled=false;
          this.btn5.disabled=false;
          this.btn6.disabled=false;
          this.btn7.disabled=false;
          this.btn8.disabled=true;
          this.btn9.disabled=true;
          this.btn2.disabled=false;
          this.btn_a.disabled=true;
          this.btn_b.disabled=true;
          this.btn_c.disabled=true;
          this.btn_d.disabled=true;
          this.btn_e.disabled=true;
          this.btn_f.disabled=true;
          break;
        case "hex":
          this.btn3.disabled=false;
          this.btn4.disabled=false;
          this.btn5.disabled=false;
          this.btn6.disabled=false;
          this.btn7.disabled=false;
          this.btn8.disabled=false;
          this.btn9.disabled=false;
          this.btn2.disabled=false;
          this.btn_a.disabled=false;
          this.btn_b.disabled=false;
          this.btn_c.disabled=false;
          this.btn_d.disabled=false;
          this.btn_e.disabled=false;
          this.btn_f.disabled=false;
          break;
        case "dec":
          this.btn3.disabled=false;
          this.btn4.disabled=false;
          this.btn5.disabled=false;
          this.btn6.disabled=false;
          this.btn7.disabled=false;
          this.btn8.disabled=false;
          this.btn9.disabled=false;
          this.btn2.disabled=false;
          this.btn_a.disabled=true;
          this.btn_b.disabled=true;
          this.btn_c.disabled=true;
          this.btn_d.disabled=true;
          this.btn_e.disabled=true;
          this.btn_f.disabled=true;
          break;
  }
};

Calculator.prototype.zeroToZero = function() {
  if(this.disp.value==0 || this.disp.value=="0"){
    this.mur="";
    this.disp.value="";
  }
};