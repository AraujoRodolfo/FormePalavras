function alertDismissed() {
    np++;
    $('#pergunta').attr('src','img/'+perguntas[np]);    
    $('#display').html('');
    resposta = "";
}

  var resposta = "";
  var perguntas = ['casa.png','carro.png'];
  var certas = ['CASA','CARRO'];
  var np = 0;

  $(document).ready(function(){    
    $('#pergunta').attr('src','img/'+perguntas[np]);    
  });

  $(document).on('click','.alternativa',function(){
    resposta += $(this).html();
    navigator.notification.beep(1);
    $('#display').html(resposta);
  });

  $(document).on('click','#responder',function(){
    
    if(resposta == certas[np]){            
      navigator.notification.alert(
          'Parabéns! Você acertou.',
          alertDismissed, 
          'Game', 
          'Continuar'      
      );
    }else{
      resposta ="";
      navigator.vibrate(2000);
      $('#display').html('');
    }
  });