function check(){
 let value=document.querySelector('#checkgia').value;
 let out =document.querySelector('.out')
 switch(value){
    case 'ổi':
        out.innerHTML='20000 VNĐ/kg'
        break;
    case 'dưa':
        out.innerHTML='10000 VNĐ/kg'
        break;
    case 'xoài':
        out.innerHTML='30000 VNĐ/kg'
        break;
    case 'táo':
        out.innerHTML='50000 VNĐ/kg'
        break;
 }
}