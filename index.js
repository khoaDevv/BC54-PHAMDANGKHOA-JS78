function tinhTongSoDuong(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number); 
    let sum = 0 ;
    for (let i = 0 ; i < mang.length ; i++) {
       if (mang[i] > 0) {
        sum += mang[i];
       }
    }
    // return sum ;
    document.getElementById("tong-so-duong").textContent = "Tổng số dương :" + sum;
    
}
function demSoDuong(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number); 
    let demSoDuong = 0 ;
    for (let i = 0 ; i < mang.length ;i++){
        if (mang[i] > 0){
            demSoDuong++
        }
    }
    document.getElementById("dem-so-duong").textContent = "Đếm số dương :" + demSoDuong ;
}
function timSoNhoNhat(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number); 
    let soNhoNhat = mang[0] ;
    for (let i = 1 ; i < mang.length ; i++){
        if (mang[i] < soNhoNhat){
            soNhoNhat = mang[i] ;
        }
    }
    document.getElementById("tim-so-nho-nhat").textContent = "Số nhỏ nhất : " + soNhoNhat ;
}
function soDuongNhoNhat(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number); 
    const soDuong = mang.filter((mang)=> mang > 0 );
    let ketQua = "";
    if ( soDuong.length === 0 ){
       
        document.getElementById("so-duong-nho-nhat").textContent = "ko có số dương ";
        }
    let min = soDuong[0];
    for (let so of soDuong) {
            if (so < min){
                min = so ;
            }
        }

        document.getElementById("so-duong-nho-nhat").textContent = "Số dương nhỏ nhất : " + min ;
    }

    function soChanEnd(){
        const mangInput = document.getElementById("mang-input").value ;
        const mang = mangInput.split(",").map(Number); 
        let soChan = "" ;
       for (let i of mang){
        if ( mang[i] % 2 == 0){
            soChan = mang[i];
        }
    } return "-1"
    document.getElementById("so-chan-cuoi").textContent = "Số chẵn : " + soChan ;
}
    