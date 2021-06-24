function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.querySelector('#resultado')
    

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Veirifique os dados e tente novamente!')
        
    } else{
        const fsex = document.getElementsByName('radsex') //informação M/F//
        const idade = ano - Number(fano.value) // Calculo do (ano atual - ano informado)//
        let genero = '' //Informa o sexo. (a variável não é (const), pois há mudança de sexo.)//

            // Criar imagens automaticas pelo JS.//
        let img = document.createElement('img')
        img.setAttribute('id','foto')

            //condições de genero mas//
        if (fsex[0].checked){
           
            genero = 'Homem'
           
            //condições para as fotos serem selecionadas conforme a idade/homem//
            if (idade >= 0 && idade <= 4) {

                img.setAttribute('src','./img/bebe_h.png')
                //bebe
            }else if (idade >= 5 && idade <= 11){

                img.setAttribute('src','./img/crianca_h.png')
                //criança
            }else if (idade >= 12 && idade <= 17){

                img.setAttribute('src','./img/adolescente_h.png')
                //adolescente
            }else if(idade >= 18 && idade <= 30){

                img.setAttribute('src','./img/jovem_h.png')
                // jovem
            }else if (idade >= 31 && idade <= 49){

                img.setAttribute('src','./img/adulto_h.png')
                //adulto
            }else if (idade >= 50 && idade <= 70){

                img.setAttribute('src','./img/50_h.png')
                //aposentado
            }else{

                img.setAttribute('src','./img/idoso.png')
                //idoso
            }
            
            //condições de genero fem//
        }else if(fsex[1].checked){
           
            genero = 'Mulher'

                 //condições para as fotos serem selecionadas conforme a idade/mulher//
                 if (idade >= 0 && idade <= 4) {

                    img.setAttribute('src','./img/bebe_m.png')
                    //bebe
                }else if (idade >= 5 && idade <= 11){
    
                    img.setAttribute('src','./img/crianca_m.png')
                    //criança
                }else if (idade >= 12 && idade <= 17){
    
                    img.setAttribute('src','./img/adolescente_m.png')
                    //adolescente
                }else if(idade >= 18 && idade <= 30){
    
                    img.setAttribute('src','./img/jovem_m.png')
                    // jovem
                }else if (idade >= 31 && idade <= 49){
    
                    img.setAttribute('src','./img/adulto_m.png')
                    //adulto
                }else if (idade >= 50 && idade <= 70){

                    img.setAttribute('src','./img/50_m.png')
                    //aposentado
                }else{
    
                    img.setAttribute('src','./img/idosa.png')
                    //idoso
                }
         
            

        }
        res.innerHTML = `Verificamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}








