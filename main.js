const precioOriginal = 120;
const descuento = 15;

const precioDescontado = 100 - descuento;
const precioDescuento = precioOriginal*(100-descuento)/100;

console.log({
    precioOriginal,
    descuento,
    precioDescontado,
    precioDescuento
});

function CalcularPresioDescuento(precio, descuento){
    const precioDescuento = precio*(100-descuento)/100;

    return precioDescuento;
}

function clickCalcularPrecioDescuento(){
    const precio = document.getElementById("precio");
    const p = parseFloat(precio.value);

    const descuento = document.getElementById("descuento");
    const d = parseFloat(descuento.value);

    const precioDescuento = CalcularPresioDescuento(p,d);

    const input = document.getElementById("resultado");
    input.innerHTML = "Tu precio con descuento es $"+ precioDescuento;
}