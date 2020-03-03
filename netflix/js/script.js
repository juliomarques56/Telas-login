
//Manupulando Campo Login
$(".inputEmail").click(function(){
    //Adiciona class placeholder ao clicar o input
    $(".login-placeholderNomeEmail").addClass('placeholderEmail')

    //Função para verificar o clique 
    $(document).click(function(e)
    {
        //Se o local do clique não for no input da class inputEmail a codição é válida
        if(!$(e.target).is(".inputEmail"))
        {
            //Armazena na variavel o conteudo do input
            var email = $("#email")
            //Se o valor do input for vazio, a condição é válida
            if(!email.val()){
                //Remove a class placeholder
                $(".login-placeholderNomeEmail").removeClass('placeholderEmail')
                //Adiciona a class erro
                $("#inputErroNomeEmail").addClass('erro')
                //Insere um texto na div
                $("#inputErroNomeEmail").text('Informe um email ou número de telefone válido.')
                //Adiciona uma borda manipulando o css da class login-nomeEmail
                $('.login-nomeEmail').css({'border-bottom': '2px solid #E87C03'})
            }
            //Se a variavel email não for vazia, a condição e válida
            if(email.val()){
                //Armazena o conteudo vindo do input
                var sEmail	= $("#email").val()
                // filtros
                var emailFilter=/^.+@.+\..{2,}$/
                var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
                // condição para verificar se foi digido um email válido.
                if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
                    $("#inputErroNomeEmail").addClass('erro')
                    $("#inputErroNomeEmail").text('Por favor, informe um email válido.')
                    $('.login-nomeEmail').css({'border-bottom': '2px solid #E87C03'})
                }else{
                    //Remove class erro
                    $("#inputErroNomeEmail").removeClass('erro')   
                    //Limpa o texto da div que tem o id inputErroNomeEmail
                    $("#inputErroNomeEmail").html('')
                    //remove a borda
                    $('.login-nomeEmail').css({'border-bottom': 'none'})
                }
            }
           
        }
    }); 
    
})

//Manipulando campo senha
$(".inputSenha").click(function(){
     //Adiciona class placeholder ao clicar o input
    $(".login-placeholderSenha").addClass('placeholderSenha')

    //Função para verificar o clique 
    $(document).click(function(e)
    {
        //Se o local do clique não for no input da class inputEmail a codição é válida
        if(!$(e.target).is(".inputSenha"))
        {
            //Armazena na variavel o conteudo do input
            var senha = $("#senha")
            //Se o valor do input for vazio, a condição é válida
            if(!senha.val()){
                $(".login-placeholderSenha").removeClass('placeholderSenha')
                $("#inputErroSenha").addClass('erro')
                $("#inputErroSenha").text('A senha deve ter entre 4 e 60 caracteres.')
                $('.login-senha').css({'border-bottom': '2px solid #E87C03'})
            }else{
                //Armazena na variável validaSenha o conteudo do input
                var validaSenha = senha.val()
                //Condição para verificar o tamanho da senha  
                if((validaSenha.length < 4) || (validaSenha.length > 60)){
                    $("#inputErroSenha").addClass('erro')
                    $("#inputErroSenha").text('A senha deve ter entre 4 e 60 caracteres.');
                    $('.login-senha').css({'border-bottom': '2px solid #E87C03'})
                }else{
                    $("#inputErroSenha").removeClass('erro')
                    $("#inputErroSenha").html('')
                    $('.login-senha').css({'border-bottom': 'none'})
                }
            }

    
        }
    }); 
    
})

$('.btnMostrarSenha').click(function(){
    var btn = $('.btnMostrarSenha').text()
    if(btn == 'MOSTRAR'){
        
        $('#senha').prop('type', 'text')
        $('#senha').attr({title: "Mostrar"})
        $('.btnMostrarSenha').text('OCULTAR')
    }else{
        $('.btnMostrarSenha').text('MOSTRAR')
        $('#senha').prop('type', 'password')
        $('#senha').attr({title: "Ocultar"})
    }
    

})

$('#saiba-mais').click(function(){
    $(this).addClass('hide')
    $('.loginInfor-saibaMais-captcha').removeClass('hide')
    
})
