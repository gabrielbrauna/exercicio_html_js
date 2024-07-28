const comparar = document.getElementById('formulario');

comparar.addEventListener('submit', function(e){
    e.preventDefault();
    validarCampo();

    function validarCampo(){
        const numeroA = document.querySelector('.numeroA');
        const numeroB = document.querySelector('.numeroB');

        const nA = Number(numeroA.value);
        const nB = Number(numeroB.value);

        
        if (nA > nB){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".sucess").style.display = "none";
        } else {
            document.querySelector(".sucess").style.display = "block";
            document.querySelector(".error").style.display = "none";
            
        }
    }
});