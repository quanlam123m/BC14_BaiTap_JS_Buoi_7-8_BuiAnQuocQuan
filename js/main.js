document.getElementById("push").addEventListener("click", pushArray)
document.getElementById("delete").addEventListener("click", deleteArray)
document.getElementById("total").addEventListener("click", total)
document.getElementById("tongSoDuong").addEventListener("click", count)
document.getElementById("min").addEventListener("click", min)
document.getElementById("duongNhoNhat").addEventListener("click", soDuongNhoNhat)
document.getElementById("soChanCuoi").addEventListener("click", soChan)
document.getElementById("doiViTri").addEventListener("click", doiViTri)
document.getElementById("sapxep").addEventListener("click", sapXepTang)
document.getElementById("integer").addEventListener("click", firstInteger)
document.getElementById("soNguyen").addEventListener("click", tongSoNguyen)
document.getElementById("addNewArray").addEventListener("click", addNewArray)
document.getElementById("duongAm").addEventListener("click", soSanh)

var array = []
function pushArray() {
    var number = +document.getElementById("addNumber").value
    array.push(number)
    var result = document.getElementById("resultArray")
    result.innerHTML = array.join(" ")
    document.getElementById("addNumber").value = ""
    console.log(array);
}

function addNewArray() {
    var newNumber = +document.getElementById("newNumber").value
    array.push(newNumber)
    var result = document.getElementById("newArray")
    result.innerHTML = array.join(" ")
    document.getElementById("newNumber").value = ""
}

function deleteArray() {
    array = []
    var result = document.getElementById("resultArray")
    var newResult = document.getElementById("newArray")
    result.innerHTML = array
    newResult.innerHTML = array
}

function soDuong(value) {
    return value >= 0
}

function soAm(value) {
    return value < 0
}

function soNguyenTo(n) {
    var flag = true
    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false;
    } else {
        for (var i = 3; i < n - 1; i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        return true;
    } else {
        return false;
    }
}

// C??u 1: 
function total() {
    var total = 0
    newArray = array.filter(soDuong)
    newArray.forEach(function (value) {
        total += value
    })
    var divTotal = document.getElementById("resultTotal")
    return (divTotal.innerHTML = `T???ng c??c s??? trong m???ng: ${total}`)
}

// C??u 2: 
function count() {
    newArray = array.filter(soDuong)
    var divCount = document.getElementById("count")
    return (divCount.innerHTML = `C?? ${newArray.length} s??? d????ng trong m???ng`)
}

// C??u 3: 
function min() {
    var min = Math.min.apply(Math, array)
    var divMin = document.getElementById("nhoNhat")
    return (divMin.innerHTML = `S??? nh??? nh???t trong m???ng: ${min}`)
}

// C??u 4
function soDuongNhoNhat() {
    newArray = array.filter(soDuong)
    min = Math.min.apply(Math, newArray)
    var divMinPositive = document.getElementById("minPositive")
    return (divMinPositive.innerHTML = `S??? d????ng nh??? nh???t trong m???ng: ${min}`)
}

// C??u 5 
function soChan() {
    var divlastEven = document.getElementById("lastEven")
    for (var i = array.length - 1; i >= 0; i -= 1) {
        if (array[i] % 2 == 0) {
            return (divlastEven.innerHTML = `S??? ch???n cu???i c??ng trong m???ng l??: ${array[i]}`)
        }
    }
}

// C??u 6 
function doiViTri() {
    var viTriX = +document.getElementById("x").value
    var viTriY = +document.getElementById("y").value
    var viTri = array[viTriX]
    array[viTriX] = array[viTriY]
    array[viTriY] = viTri
    var divSwap = document.getElementById("swap")
    return (divSwap.innerHTML = `M???ng sau khi ?????i v??? tr?? c???a 2 s??? ???? ch???n: ${array}`)
}

// C??u 7 
function sapXepTang() {
    array.sort(function (a, b) {
        return a - b
    })
    var divSort = document.getElementById("sort")
    return (divSort.innerHTML = `M???ng s???p x???p theo th??? t??? t??ng d???n: ${array}`)
}

// C??u 8 
function firstInteger() {
    var firstInteger = document.getElementById("firstInteger")
    for (var i = 0; i < array.length; i += 1) {
        if (soNguyenTo(array[i])) {
            return (firstInteger.innerHTML = `S??? nguy??n t??? ?????u ti??n trong m???ng: ${array[i]}`)
        }
    }
    return (firstInteger.innerHTML = `-1`)
}

// C??u 9
function tongSoNguyen() {
    var divTongNguyen = document.getElementById("tongNguyen")
    return (divTongNguyen.innerHTML = `T???ng s??? nguy??n trong m???ng: ${array.length}`)
}

// C??u 10
function soSanh() {
    var compare = document.getElementById("compare")
    var am = array.filter(soAm)
    var duong = array.filter(soDuong)
    if (am.length > duong.length) {
        return (compare.innerHTML = `S??? ??m nhi???u h??n s??? d????ng: ${am.length} > ${duong.length}`)
    }
    else if (am.length < duong.length) {
        return (compare.innerHTML = `S??? d????ng nhi???u h??n s??? ??m: ${duong.length} > ${am.length} `)
    }
    else {
        return (compare.innerHTML = `S??? d????ng b???ng s??? ??m: ${duong.length} = ${am.length} `)
    }
}