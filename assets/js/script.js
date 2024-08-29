
    //Função responsavel por capturar evento da pagina, impedir atualização
    const form = document.querySelector('.form') ;
    form.addEventListener('submit', recebeEventoForm);
    function recebeEventoForm(evento){
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('.pesoClass');
        const inputAltura = evento.target.querySelector('.alturaClass');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setResultado('Peso Invalido', false);
            return;
        }
        if (!altura) {
            setResultado('Altura Invalida', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivelImc}).`;
        setResultado(msg, true);

        console.log(msg);
    
    }

    function getNivelImc (imc){
        const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso', 'Obesidade'];

        if (imc >= 30){
            return nivel[3]
        }
        if (imc >= 25){
            return nivel[2];
    }
         if (imc >= 18.5){
            return nivel[1];
    }
        if (imc < 18.5){
            return nivel[0];
    }
}

    function getImc(peso, altura){
        const imc = peso / altura **2;
        return imc.toFixed(2);
    }

    function criaP(){
        //constante para adicionar um elemento na div
        const p = document.createElement('p');
        return p;
        
        p.innerHTML = "Qualquer coisa";
    }

    function setResultado (msg, isValid){
        //abiaxo deixando a div vazia
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = ``;

        const p = criaP();
        

        if (isValid){ p.classList.add('paragrafo-resultado');
        }
            else{
                p.classList.add('bad');
            }
       
        p.innerHTML = msg;
        resultado.appendChild(p);

    }

        // const resultado = document.querySelector('.resultado') ;

    //      const peso = form.querySelector('.pesoClass') ;
    //      const altura = form.querySelector('.alturaClass');

    //      exibicao.push({

    //         pesoValue: peso.value,
    //         alturaValue: altura.value      
        
    //     });
    //     console.log(exibicao);
    //      let imc;
    //      //formula do imc
    //      imc = peso / (altura * altura);
    //      console.log(peso);
    //      console.log(`Seu imc é ${imc}`);
    // }

    
