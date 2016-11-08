var num, aux = 0, operac = "";

$(function() {
		var num, aux=0, operac = "";
			$("#num").on("click",
				function(){ $("#num").val("");}
			);

      $("#cuadrado").on("click", function() { num=$("#num"); num.val(num.val() * num.val());});
      $("#exponencial").on("click", function() {num=$("#num"); aux=num.val(); operac = "exp";});
      $("#inverso").on("click", function() { num=$("#num"); num.val(1/num.val());});
      $("#raiz").on("click", function() { num=$("#num"); num.val(Math.sqrt(num.val()));});
      $("#potencia").on("click", function() { num=$("#num"); num.val(Math.pow(2,num.val()));});

      $("#factorial").on("click",
        function() {
          num=$("#num");
          var total=1;
          for(i=1; i<=num.val();i++){
              total=total*i;
          }
          num.val(total);
        });

      $("#entera").on("click",
        function() {
          num=$("#num");
          if (num.val()>=0) { num.val(Math.floor(num.val()));}
          if (num.val()<0)  { num.val(Math.ceil(num.val()));}
        });

      $("#sumatoria").on("click",
         function() {
           num=$("#num");
           var lista = num.val().split(",");
           var j=0; a=0;
           while(j<lista.length){
               a=a + (+lista[j]);
               j++;
           }
           num.val(a);
         });

          $("#producto").on("click",
             function() {
               num=$("#num");
               var list = num.val().split(",");
               var j=0; a=1;
               while(j<list.length){
                  a=a * (+list[j]);
                  j++;
               }
               num.val(a);
             });



          $("#sumar").on("click", function() {num=$("#num"); aux=num.val(); operac = "+";});
          $("#restar").on("click", function() { num=$("#num"); aux=num.val(); operac = "-";});
          $("#multiplicar").on("click", function() { num=$("#num"); aux=num.val(); operac = "*";});
          $("#dividir").on("click", function() { num=$("#num"); aux=num.val(); operac = "/";});

          $("#calcular").on("click",
            function() {
              num=$("#num");
              if (operac === "exp") {num.val(Math.pow(aux,num.val()));}
              if (operac === "+") {num.val((+aux + +num.val()));}
              if (operac === "-") {num.val((+aux - +num.val()));}
              if (operac === "*") {num.val((+aux * +num.val()));}
              if (operac === "/") {num.val((+aux / +num.val()));}
            });
});
