// This is a JavaScript file
function alertDismissed() {}

  var resposta = "";
  

  $(document).on('click','.alternativa',function(){
    resposta += $(this).html();
    navigator.vibrate(500);
    $('#display').html(resposta);
  });

  $(document).on('click','#responder',function(){
    
    if(resposta == "CASA"){
      navigator.notification.alert(
          'Parabéns! Você acertou.',
          alertDismissed, 
          'Game', 
          'Fechar'      
      );
    }else{
      navigator.vibrate(3000);
    }
  });