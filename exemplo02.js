function determinarFaixaEtaria(idade) {
    if (idade < 22) {
        return "Jovem";
    } else if (idade < 66) {
        return "Adulto(a)";
    } else {
        return "Idoso(a)"
    }
}

console.log(determinarFaixaEtaria(30));