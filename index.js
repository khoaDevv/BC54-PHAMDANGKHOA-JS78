function tinhTongSoDuong(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number); 
    let sum = 0 ;
    for (let i of mang) {
       if (i > 0) {
        sum += i;
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
            demSoDuong++ ;
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
    for (let i of soDuong) {
            if (i < min){
                min = i ;
            }
        }

        document.getElementById("so-duong-nho-nhat").textContent = "Số dương nhỏ nhất : " + min ;
    }

    function soChanEnd(){
        const mangInput = document.getElementById("mang-input").value ;
        const mang = mangInput.split(",").map(Number); 
        let soChan = -1 ;
    for (let i = 0 ; i < mang.length; i++ ){
        if ( mang[i] % 2 === 0){
             soChan = mang[i];
        }
    }if (soChan === -1){
        document.getElementById("so-chan-cuoi").textContent= "không có số chẵn";
    }else {
    document.getElementById("so-chan-cuoi").textContent = "Số chẵn : " + soChan ;
        }
    }


    function tangDan(){
        const mangInput = document.getElementById("mang-input").value ;
        const mang = mangInput.split(",").map(Number); 
        mang.sort(function (a, b){
            return a - b ;
        });
        document.getElementById("tang-dan").textContent = "Đã sắp xếp : " + mang.join(", ");
    
    
    }
    // tìm số nguyên tố đầu tiên
    function laSoNguyenTo (num){
        if (num <= 1) {
            return false;
        }
        for (let i = 2 ; i<= Math.sqrt(num) ;i++ ){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }

    function timNguyenToDau(){
        const mangInput = document.getElementById("mang-input").value ;
        const mang = mangInput.split(",").map(Number); 
        let soNguyenTo = -1 ;
        for (let i = 0 ; i < mang.length ; i++){
            if (laSoNguyenTo(mang[i])){
                soNguyenTo = mang[i];
                break;
            }
        }
        const nguyenToDau = document.getElementById("nguyen-to-dau");
        if (soNguyenTo === -1){
            nguyenToDau.textContent = "-1";
        }
        else {
            nguyenToDau.textContent = "Số nguyên tố đầu tiền : " + soNguyenTo;
        }
    }      
// đếm số nguyên
function demSoNguyen(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number); 
    let soLuongSoNguyen = 0 ;
    for (let i = 0 ;i < mang.length ; i++){
        if (Number.isInteger(mang[i])){
            soLuongSoNguyen ++ ;
        }
    }
    document.getElementById("dem-so-nguyen").textContent = "Số lượng số nguyên : " + soLuongSoNguyen;
}

function soSanh(){
    const mangInput = document.getElementById("mang-input").value ;
    const mang = mangInput.split(",").map(Number);
    let demSoAm = 0 ;
    let demSoDuong = 0 ;
    for (let i = 0 ; i< mang.length ; i++){
        if (mang[i] > 0 ){
            demSoDuong++ ;
            console.log("🚴‍♀️ - soSanh - demSoDuong:", demSoDuong);
        }else if (mang[i] < 0){
            demSoAm++ ;
            console.log("🚴‍♀️ - soSanh - demSoAm:", demSoAm);
        }
    }
    const soSanhSo = document.getElementById("so-sanh");
    if(demSoDuong < demSoAm ){
        soSanhSo.textContent ="Số dương < Số âm";
    }
    else if ( demSoDuong > demSoAm){
        soSanhSo.textContent = " Số dương > Số âm";
    }else {
        soSanhSo.textContent = " Số dương = Số âm";
    }
}