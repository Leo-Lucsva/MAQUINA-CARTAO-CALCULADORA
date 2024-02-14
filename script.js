var nomes = [
    'Débito',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
    '11x',
    '12x',
    
]

var taxas = [ // PRIMEIRA LISTA 1 DIA UTIL - SEGUNDA LISTA 1 DIA CORRIDO - TERCEIRA LISTA NO MESMO DIA
    ['Black', [// TAXAS VISA E MASTERCARD:
               [0.79, 0.79, 3.99,4.99, 5.99, 6.99, 7.99, 8.99, 8.99, 8.99, 8.99, 8.99, 8.99],
        	   [1.29, 1.29, 4.49, 5.49, 5.49, 7.49, 8.49, 9.49, 9.49, 9.49, 9.49, 9.49, 9.49],
               [0.79, 0.79, 3.99,4.99, 5.99, 6.99, 7.99, 8.99, 8.99, 8.99, 8.99, 8.99, 8.99]],
               // TAXAS ELO, AME, HIPERCARD:
               [[2.57, 4.34, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.28],
               [3.07, 4.84, 7.52, 8.08, 8.88, 9.88, 10.88, 11.48, 11.88, 12.88, 13.38, 14.24, 14.28],
               [1.29, 1.29, 4.49, 5.49, 5.49, 7.49, 8.49, 9.49, 9.49, 9.49, 9.49, 9.49, 9.49]],

               
            ],
    ['Black Padrão', [// TAXAS VISA E MASTERCARD:
                      [1.38, 3.15, 5.63,6.19, 6.99, 7.99, 8.99, 9.59, 9.99, 10.99, 11.49, 12.35, 12.39],
                      [1.88, 3.65, 6.13, 6.69, 7.49, 8.49, 9.49, 10.09, 10.49, 11.49, 11.99, 12.85, 12.89],
                      [2.38, 4.15, 6.63, 7.19, 7.99, 8.99, 9.99, 10.59, 10.99, 11.99, 12.49, 13.35, 13.39]],
                      // TAXAS ELO, AME, HIPERCARD:
                      [[2.57, 4.34, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.28],
                      [3.07, 4.84, 7.52, 8.08, 8.88, 9.88, 10.88, 11.48, 11.88, 12.88, 13.38, 14.24, 14.28],
                      [3.57, 5.34, 8.02, 8.58, 9.38, 10.38, 11.38, 11.98, 12.38, 13.38, 13.88, 14.74, 14.78]],
                      
                    
                    ],
    ['Mega', [// TAXAS VISA E MASTERCARD:
              [1.69, 3.49, 8.99,10.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 17.99, 17.99],
              [2.19, 3.99, 9.49, 11.49, 12.49, 13.49, 14.49, 15.49, 16.49, 17.49, 18.49, 18.49, 18.49],
              [2.69, 4.49, 9.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 18.99, 18.99, 18.99]],
              // TAXAS ELO, AME, HIPERCARD:              
              [[2.88, 4.68, 10.38, 12.38, 13.38, 14.38, 15.38, 16.38, 17.38, 18.38, 19.38, 19.38, 19.38],
              [3.38, 5.18, 10.88, 12.88, 13.88, 14.88, 15.88, 16.88, 17.88, 18.88, 19.88, 19.88, 19.88],
              [3.88, 5.68, 11.38, 13.38, 14.38, 15.38, 16.38, 17.38, 18.38, 19.38, 20.38, 20.38, 20.38]]
            
            ],
    ['Básico', [// TAXAS VISA E MASTERCARD:
                [1.99, 4.99, 9.91,11.29, 12.64, 13.97, 15.27, 16.55, 17.81, 19.04, 20.24, 21.43, 22.59],
                [2.49, 5.49, 10.41, 11.79, 13.14, 14.47, 15.77, 17.05, 18.31, 19.54, 20.74, 21.93, 23.09],
                [2.99, 5.99, 10.91, 12.29, 13.64, 14.97, 16.27, 17.55, 18.81, 20.04, 21.24, 22.43, 23.59]],
                // TAXAS ELO, AME, HIPERCARD: 
                [[2.99, 6.18, 11.10, 12.48, 13.83, 15.16, 16.46, 17.74, 19.00, 20.23, 21.43, 22.62, 23.78],
                [3.49, 6.68, 11.60, 12.98, 14.33, 15.66, 16.96, 18.24, 19.50, 20.73, 21.93, 23.12, 24.28],
                [3.99, 7.18, 12.10, 13.48, 14.83, 16.16, 17.46, 18.74, 20.00, 21.23, 22.43, 23.62, 24.78]],
            
               
            ]

];

// variaveis do HTML

const planoSelecionado = document.getElementById('plano');

const outputValor = document.getElementById('valor');
const inputValor = document.getElementById('valor-venda');
const valorPagoCliente = document.getElementById('valor_pago_cliente');
const totalTaxas = document.getElementById('totalTaxas');
const valorTaxas = document.getElementById('valorTaxas');
const recebimento = document.getElementById('recebimento');
const bandeira = document.getElementById('bandeira');

const parcelas = document.getElementById('parcelamento');
const qtdParcelas = document.getElementById('qtd_parcelamento');
const opts_parcelas = parcelas.children;

const repassarTaxas = document.getElementById('repassarTaxas');

const formatarValor = (valor) => {
    let valorFormatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      return valorFormatado;
}

function atualizarValor (taxas_plano) {
    
    // OBTER O VALOR DA VENDA, CONVERTER EM FLOAT E FAZER O CALCULO
    let valorPreenchido = parseFloat(inputValor.value);
    let taxa = taxas_plano[parcelas.value];

    let valorFinal = 0;
    let clienteValor = 0;
    console.log(taxa);
    if (repassarTaxas.value === "false") {
        valorFinal = valorPreenchido - (taxa/100 * valorPreenchido);
        clienteValor = valorPreenchido
    }
    else {
        let inteiro = 1 - (taxa/100);
        
        valorFinal = valorPreenchido;
        clienteValor = valorPreenchido / inteiro;

    }

    // FORMATAR EM DUAS CASAS DECIMAIS E TROCAR '.' POR ','

    let valorFormatado = formatarValor(valorFinal);
    let clienteValorFormatado = formatarValor(clienteValor);
    let valorParcelas = formatarValor(clienteValor/parcelas.value);
    let valorTaxasFormatado = formatarValor(clienteValor - valorFinal);

    if (repassarTaxas.value == "true") {
        valorTaxasFormatado = (clienteValor - valorPreenchido).toFixed(2).replace('.', ',');
    }

    outputValor.innerHTML =   valorFormatado;
    valorPagoCliente.innerText = clienteValorFormatado;
    qtdParcelas.innerHTML = `${parcelas.value}x de R$ ${valorParcelas}`;
    totalTaxas.innerHTML = taxa + '%';
    valorTaxas.innerHTML = valorTaxasFormatado;

    if (parcelas.value == 0) {
        qtdParcelas.innerHTML = `À vista`;
    }

}

function atualizarDados (event) {
    console.log(222);
    // Pega as taxas no Array de taxas para depois substituir nas options no html
    let taxas_plano = taxas[planoSelecionado.value][bandeira.value][recebimento.value];
    console.log(taxas[planoSelecionado.value][bandeira.value], '  <-' );
    // percorre as options (cada parcela do HTML) para atualizar e add a taxa certa do plano
    for (i = 0; i < opts_parcelas.length; i++) {
        console.log(taxas_plano[i], ' aq');
        opts_parcelas[i].innerHTML = `${nomes[i]} <span class="porcentagem">(${taxas_plano[i]}%)</span>`;
        
    }

    // atualizar valor final
    atualizarValor(taxas_plano);
}

planoSelecionado.addEventListener('change', atualizarDados);
repassarTaxas.addEventListener('change', atualizarDados);
parcelas.addEventListener('change', atualizarDados);
recebimento.addEventListener('change', atualizarDados);
inputValor.addEventListener('input', atualizarDados);
bandeira.addEventListener('change', atualizarDados);

// atualiza as taxas para o plano selecionado quando o site é carregado
atualizarDados({ target: planoSelecionado });

