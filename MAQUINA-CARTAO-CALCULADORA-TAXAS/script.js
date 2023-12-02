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

var taxas = [ // Primeiro valor (receber 1 dia util) // segundo valor (receber 1 dia corrido)
    ['Black', [[0.79, 0.79, 3.99,4.99, 5.99, 6.99, 7.99, 8.99, 8.99, 8.99, 8.99, 8.99, 8.99],
        	   [1.29, 1.29, 4.49, 5.49, 5.49, 7.49, 8.49, 9.49, 9.49, 9.49, 9.49, 9.49, 9.49]], []],
    ['Black Padrão', [[1.38, 3.15, 5.63,6.19, 6.99, 7.99, 8.99, 9.59, 9.99, 10.99, 11.49, 12.35, 12.39],
                      [1.88, 3.65, 6.13, 6.69, 7.49, 8.49, 9.49, 10.09, 10.49, 11.49, 11.99, 12.85, 12.89]], []],
    ['Mega', [[1.69, 3.49, 8.99,10.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 17.99, 17.99],
              [2.19, 3.99, 9.49, 11.49, 12.49, 13.49, 14.49, 15.49, 16.49, 17.49, 18.49, 18.49, 18.49]], []],
    ['Básico', [[1.99, 4.99, 9.91,11.29, 12.64, 13.97, 15.27, 16.55, 17.81, 19.04, 20.24, 21.43, 22.59],
                [2.49, 5.49, 10.41, 11.79, 13.14, 14.47, 15.77, 17.05, 18.31, 19.54, 20.74, 21.93, 23.09]], []]

];

// variaveis do HTML

const planoSelecionado = document.getElementById('plano');

const outputValor = document.getElementById('valor');
const inputValor = document.getElementById('valor-venda');
const valorPagoCliente = document.getElementById('valor_pago_cliente');
const totalTaxas = document.getElementById('totalTaxas');
const valorTaxas = document.getElementById('valorTaxas');
const recebimento = document.getElementById('recebimento');

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

    // Pega as taxas no Array de taxas para depois substituir nas options no html
    let taxas_plano = taxas[planoSelecionado.value][1][recebimento.value];

    // percorre as options (cada parcela do HTML) para atualizar e add a taxa certa do plano
    for (i = 0; i < opts_parcelas.length; i++) {
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

// atualiza as taxas para o plano selecionado quando o site é carregado
atualizarDados({ target: planoSelecionado });

// "use strict";
// (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[328], {
//     4871: function(i, e, a) {
//         a.d(e, {
//             $: function() {
//                 return u
//             }
//         });
//         const o = a(5893)
//           , s = a(1664)
//           , n = a.n(s)
//           , t = a(5456)
//           , c = a(8193)
//           , r = a(9583);
//         function u() {
//             return (0,
//             o.jsx)("footer", {
//                 className: "w-full",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row space-y-8 justify-between items-center",
//                     children: [(0,
//                     o.jsxs)("div", {
//                         className: "space-y-2 items-center md:items-start justify-center md:justify-start text-center md:text-start",
//                         children: [(0,
//                         o.jsx)(t.T, {}), (0,
//                         o.jsxs)("div", {
//                             className: "text-xs",
//                             children: [(0,
//                             o.jsx)("p", {
//                                 children: "Site desenvolvido por HL Solu\xe7\xf5es Digitais LTDA."
//                             }), (0,
//                             o.jsx)("p", {
//                                 children: "CNPJ: 46.496.175/0001-32"
//                             }), (0,
//                             o.jsx)("p", {
//                                 children: "Todos os direitos resrvados."
//                             })]
//                         })]
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "flex gap-4 items-center text-xs md:mr-24",
//                         children: [(0,
//                         o.jsx)(n(), {
//                             href: "/termos-de-uso",
//                             about: "",
//                             passHref: !0,
//                             children: (0,
//                             o.jsx)("p", {
//                                 children: "Termos de uso"
//                             })
//                         }), (0,
//                         o.jsx)(n(), {
//                             href: "/",
//                             about: "",
//                             passHref: !0,
//                             children: (0,
//                             o.jsx)("p", {
//                                 children: "Home"
//                             })
//                         }), (0,
//                         o.jsx)(n(), {
//                             href: "/politica-de-privacidade",
//                             about: "",
//                             passHref: !0,
//                             children: (0,
//                             o.jsx)("p", {
//                                 children: "P\xf3litica de privacidade"
//                             })
//                         })]
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "flex flex-row items-center gap-4 md:gap-4",
//                         children: [(0,
//                         o.jsx)("button", {
//                             "aria-label": "@hugomaquininhas no instagram",
//                             children: (0,
//                             o.jsx)(n(), {
//                                 href: "https://www.instagram.com/hugomaquininhas",
//                                 "aria-label": "@hugomaquininhas no instagram",
//                                 passHref: !0,
//                                 target: "_blank",
//                                 children: (0,
//                                 o.jsx)(c.t0C, {
//                                     className: "text-xl"
//                                 })
//                             })
//                         }), (0,
//                         o.jsx)("button", {
//                             "aria-label": "@hugomaquininhas no Facebook",
//                             children: (0,
//                             o.jsx)(n(), {
//                                 href: "https://www.facebook.com/hugomaquininhas",
//                                 "aria-label": "@hugomaquininhas no Facebook",
//                                 passHref: !0,
//                                 target: "_blank",
//                                 children: (0,
//                                 o.jsx)(r.tBk, {
//                                     className: "text-xl"
//                                 })
//                             })
//                         }), (0,
//                         o.jsx)("button", {
//                             "aria-label": "@hugomaquininhas no tiktok",
//                             children: (0,
//                             o.jsx)(n(), {
//                                 href: "https://www.tiktok.com/@hugomaquininhas",
//                                 "aria-label": "@hugomaquininhas no tiktok",
//                                 passHref: !0,
//                                 target: "_blank",
//                                 children: (0,
//                                 o.jsx)(r.nTm, {
//                                     className: "text-lg"
//                                 })
//                             })
//                         }), (0,
//                         o.jsx)("button", {
//                             "aria-label": "youtube",
//                             children: (0,
//                             o.jsx)(n(), {
//                                 href: "https://www.youtube.com/",
//                                 "aria-label": "youtube",
//                                 passHref: !0,
//                                 target: "_blank",
//                                 children: (0,
//                                 o.jsx)(c.b1v, {
//                                     className: "text-xl"
//                                 })
//                             })
//                         })]
//                     })]
//                 })
//             })
//         }
//     },
//     7184: function(i, e, a) {
//         a.d(e, {
//             h: function() {
//                 return c
//             }
//         });
//         const o = a(5893)
//           , s = a(6261)
//           , n = a(5456)
//           , t = a(9583);
//         function c(i) {
//             let {linkScroll: e, textButton: a} = i;
//             return (0,
//             o.jsx)("header", {
//                 className: "w-full",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-6 md:px-4 py-4 md:py-8 flex justify-center md:justify-between items-center",
//                     children: [(0,
//                     o.jsx)(n.T, {}), (0,
//                     o.jsx)("button", {
//                         className: "hidden md:flex bg-black text-gray-500 px-4 py-3 text-lg rounded-xl font-semibold items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
//                         children: (0,
//                         o.jsxs)(s.rU, {
//                             to: e,
//                             spy: !0,
//                             smooth: !0,
//                             offset: -70,
//                             duration: 500,
//                             style: {
//                                 cursor: "pointer"
//                             },
//                             className: "w-full flex flex-row gap-2 items-center justify-center",
//                             children: [(0,
//                             o.jsx)(t.rI6, {
//                                 size: 24
//                             }), a]
//                         })
//                     })]
//                 })
//             })
//         }
//     },
//     9498: function(i, e, a) {
//         a.d(e, {
//             N: function() {
//                 return t
//             }
//         });
//         const o = a(5893)
//           , s = a(5675)
//           , n = a.n(s);
//         function t(i) {
//             let {name: e, iconSrc: a} = i;
//             return (0,
//             o.jsxs)("div", {
//                 className: "flex flex-row gap-2 text-zinc-300",
//                 children: [(0,
//                 o.jsx)("div", {
//                     children: (0,
//                     o.jsx)(n(), {
//                         src: a,
//                         alt: e,
//                         width: 24,
//                         height: 24
//                     })
//                 }), (0,
//                 o.jsx)("p", {
//                     className: "text-sm font-bold",
//                     children: e
//                 })]
//             })
//         }
//     },
//     1604: function(i, e, a) {
//         a.d(e, {
//             B: function() {
//                 return t
//             }
//         });
//         const o = a(5893);
//         let s = [{
//             id: 1,
//             title: "Eu posso escolher a operadora do meu chip?",
//             response: "Sim. Na hora de pedir sua m\xe1quina T1 Chip, T2 ou T3, voc\xea pode escolher entre as operadoras Claro, Vivo ou Tim."
//         }, {
//             id: 2,
//             title: "Como funciona a garantia da minha maquininha?",
//             response: "A garantia \xe9 ilimitada e cobre qualquer problema t\xe9cnico ou dano de fabrica\xe7\xe3o. Defeitos causados por mau uso ou uso indevido do leitor n\xe3o ser\xe3o cobertos pela garantia.\n    Em caso de problemas t\xe9cnicos ou defeitos de fabrica\xe7\xe3o, entre em contato com o nosso atendimento pelo chat do seu aplicativo.\n    "
//         }, {
//             id: 3,
//             title: "Como receberei o valor das minhas vendas?",
//             response: "\n      O valor das vendas estar\xe3o dispon\xedveis em sua carteira no prazo escolhido para o recebimento, podendo ser de 1 dia \xfatil, 14 dias ou 30 dias, de acordo com a sua prefer\xeancia.\n\n      Depois disso voc\xea poder\xe1 transferir para sua conta banc\xe1ria cadastrada, sem custos, ou para o seu cart\xe3o pr\xe9-pago (dispon\xedvel apenas para pessoa f\xedsica).\n\n      Importante: para transferir o saldo dispon\xedvel \xe9 necess\xe1rio que a conta banc\xe1ria seja de mesma titularidade do CNPJ ou CPF cadastrado no aplicativo Ton.\n\n      Tipos de contas banc\xe1rias aceitas para transfer\xeancia:\n\n      Conta Corrente (exceto conta sal\xe1rio);\n      Conta Poupan\xe7a;\n      Conta Corrente Conjunta;\n      Conta Poupan\xe7a Conjunta.\n    "
//         }, {
//             id: 4,
//             title: "O aplicativo Ton \xe9 compat\xedvel com quais dispositivos?",
//             response: "O aplicativo funciona em qualquer dispostivo Android vers\xe3o 5.0 ou superior, ou iOS vers\xe3o 11 ou superior."
//         }, {
//             id: 5,
//             title: "Eu preciso de um celular para realizar as vendas?",
//             response: "Apenas a m\xe1quina T1 precisa de um celular Android ou iOS, com bluetooth e conex\xe3o de internet para poder realizar suas vendas, e as m\xe1quinas T1 Chip, T2 e T3, n\xe3o precisam de celular para realizar as vendas.\n      Voc\xea precisar\xe1 de um celular Android ou iOS com o aplicativo do Ton instalado para aticonst qualquer uma das m\xe1quinas, gerenciar suas vendas, realizar transfer\xeancias, entre outras funcionalidades."
//         }, {
//             id: 6,
//             title: "Como funciona a taxa \xfanica de ades\xe3o do Ton?  ",
//             response: "N\xe3o temos mensalidade! Voc\xea paga a taxa apenas ao aderir uma das m\xe1quinas em modelo de comodato, tendo direito a garantia enquanto durar nossa parceria.\n\n      A ades\xe3o da m\xe1quina pode ser paga \xe0 vista ou parcelada em at\xe9 12 vezes no cart\xe3o de cr\xe9dito. Ap\xf3s este pagamento, n\xe3o haver\xe1 cobran\xe7a fixa (aluguel) pelo uso da m\xe1quina.\n\n      O cadastro no aplicativo \xe9 gratuito e d\xe1 direito a utiliza\xe7\xe3o de fun\xe7\xf5es como o link de pagamento. Voc\xea s\xf3 paga a taxa \xfanica se optar por adquirir uma maquininha."
//         }];
//         const n = a(7294);
//         function t() {
//             let[i,e] = (0,
//             n.useState)([])
//               , [a,t] = (0,
//             n.useState)(!1);
//             return (0,
//             n.useEffect)(()=>{
//                 let i = s.slice(0, 2);
//                 e(i),
//                 a && e(s)
//             }
//             , [a]),
//             (0,
//             o.jsx)("section", {
//                 className: "w-full",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-6 md:px-4 py-4 md:py-8 flex flex-col justify-center items-center space-y-6",
//                     children: [(0,
//                     o.jsx)("h2", {
//                         className: "text-xl md:text-2xl font-semibold tracking-tight",
//                         children: "Perguntas frequentes"
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "flex flex-col max-w-5xl text-start space-y-4",
//                         children: [i.map(i=>(0,
//                         o.jsxs)("div", {
//                             className: "space-y-2",
//                             children: [(0,
//                             o.jsx)("h3", {
//                                 className: "font-semibold text-base",
//                                 children: i.title
//                             }), (0,
//                             o.jsx)("p", {
//                                 className: "text-zinc-400",
//                                 children: i.response
//                             })]
//                         }, i.id)), (0,
//                         o.jsx)("h3", {})]
//                     }), a ? (0,
//                     o.jsx)("button", {
//                         onClick: ()=>t(!1),
//                         color: "lightgray",
//                         children: "Ver menos"
//                     }) : (0,
//                     o.jsx)("button", {
//                         onClick: ()=>t(!0),
//                         color: "lightgray",
//                         children: "Ver mais"
//                     })]
//                 })
//             })
//         }
//     },
//     7611: function(i, e, a) {
//         a.d(e, {
//             E: function() {
//                 return d
//             }
//         });
//         const o = a(5893)
//           , s = a(5675)
//           , n = a.n(s)
//           , t = a(1163)
//           , c = a.n(t)
//           , r = a(3848)
//           , u = a(168)
//           , m = a(9498)
//           , l = a(9583);
//         function d(i) {
//             let {maquininha: e} = i
//               , a = async()=>{
//                 fbq("track", "InitiateCheckout", {
//                     content_name: e.name,
//                     content_category: "Ton",
//                     content_ids: [e.name],
//                     content_type: "product",
//                     value: e.bonus,
//                     currency: "BRL"
//                 }),
//                 r.Z.track("InitiateCheckout", {
//                     product: e.name,
//                     price: e.bonus
//                 }),
//                 ttq.track("AddToCart", {
//                     content_id: e.name,
//                     quantity: 1,
//                     price: e.bonus,
//                     value: e.bonus,
//                     currency: "BRL",
//                     content_name: e.name
//                 }),
//                 gtag("event", "conversion", {
//                     send_to: "AW-969410623/sigLCKGt_ZcDEL-QoM4D",
//                     value: e.bonus,
//                     currency: "BRL"
//                 }),
//                 c().push(e.buyLink)
//             }
//             ;
//             return (0,
//             o.jsxs)("div", {
//                 className: "flex flex-col px-6 md:px-2 py-6 space-y-6 shadow-lg bg-zinc-900 rounded-xl",
//                 children: [(0,
//                 o.jsxs)("div", {
//                     className: "flex flex-col space-y-4 items-center justify-center text-center",
//                     children: [(0,
//                     o.jsx)(n(), {
//                         onClick: ()=>a(),
//                         alt: e.name,
//                         src: e.images[0],
//                         width: 192,
//                         height: 288,
//                         className: "cursor-pointer"
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "text-center",
//                         children: [(0,
//                         o.jsx)("h3", {
//                             className: "text-2xl font-bold text-green-500",
//                             children: e.name
//                         }), (0,
//                         o.jsx)("p", {
//                             children: e.description
//                         })]
//                     })]
//                 }), (0,
//                 o.jsxs)("div", {
//                     className: "flex flex-row justify-between space-x-6 md:space-x-2",
//                     children: [(0,
//                     o.jsxs)("div", {
//                         children: [(0,
//                         o.jsx)("p", {
//                             className: "line-through",
//                             children: (0,
//                             u.T)(e.fullPricing)
//                         }), (0,
//                         o.jsx)("p", {
//                             className: "text-lg font-semibold",
//                             children: (0,
//                             u.T)(e.pricing)
//                         }), (0,
//                         o.jsx)("p", {
//                             children: "\xe0 vista ou"
//                         })]
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "flex flex-col text-end",
//                         children: [(0,
//                         o.jsxs)("p", {
//                             children: [e.numberOfParcel, "x de"]
//                         }), (0,
//                         o.jsx)("p", {
//                             className: "text-green-500 font-bold text-3xl",
//                             children: (0,
//                             u.T)(e.valueOfParcel)
//                         })]
//                     })]
//                 }), e.name.startsWith("T3") && (0,
//                 o.jsx)("div", {
//                     className: "block md:hidden",
//                     children: (0,
//                     o.jsxs)("p", {
//                         children: ["Receba ", (0,
//                         o.jsx)("span", {
//                             className: "text-green-500 font-semibold",
//                             children: "100% de Cashback"
//                         }), " da sua 1\xaa maquininha ao atingir R$ 10 mil em vendas"]
//                     })
//                 }), (0,
//                 o.jsx)("div", {
//                     className: "space-y-2",
//                     children: (0,
//                     o.jsxs)("button", {
//                         onClick: ()=>a(),
//                         className: "flex flex-row bg-green-500 px-0 py-3 text-lg w-full rounded-xl font-semibold items-center justify-center gap-2 hover:bg-green-300 transition duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
//                         children: [(0,
//                         o.jsx)(l.rI6, {}), "Comprar Agora"]
//                     })
//                 }), (0,
//                 o.jsx)("div", {
//                     className: "space-y-2",
//                     children: e.atributes.map((i,e)=>(0,
//                     o.jsx)(m.N, {
//                         name: i.name,
//                         iconSrc: i.iconSrc || ""
//                     }, e))
//                 })]
//             })
//         }
//     },
//     6409: function(i, e, a) {
//         a.d(e, {
//             T: function() {
//                 return r
//             }
//         });
//         var o = a(5893)
//           , s = a(3848)
//           , n = a(1163)
//           , t = a.n(n)
//           , c = a(9583);
//         function r() {
//             let i = ()=>{
//                 fbq("track", "Contact"),
//                 ttq.track("Contact"),
//                 s.Z.track("Contact"),
//                 t().push("https://api.whatsapp.com/send?phone=".concat("5582998317753", "&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Maquininha%20do%20Ton"))
//             }
//             ;
//             return (0,
//             o.jsx)("section", {
//                 className: "w-full",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-4 py-12 md:py-32 flex flex-col justify-center items-center text-center space-y-6",
//                     children: [(0,
//                     o.jsxs)("h2", {
//                         className: "text-2xl md:text-3xl font-bold tracking-tight",
//                         children: ["Fale com um ", (0,
//                         o.jsx)("span", {
//                             className: "text-green-500",
//                             children: "especialiata"
//                         }), " e tire as suas d\xfavidas"]
//                     }), (0,
//                     o.jsxs)("p", {
//                         className: "max-w-3xl text-center",
//                         children: ["Clique nesse bot\xe3o e tire suas d\xfavidas antes da compra. ", (0,
//                         o.jsx)("br", {}), " Fique a vontade para mandar todas as suas d\xfavidas."]
//                     }), (0,
//                     o.jsxs)("button", {
//                         onClick: ()=>i(),
//                         className: "rounded-md bg-green-500 text-white px-4 py-2.5 font-extrabold uppercase flex items-center gap-2 shadow-sm hover:bg-green-400 transition duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
//                         children: [(0,
//                         o.jsx)(c.xpo, {
//                             size: 24
//                         }), "Whatsapp"]
//                     })]
//                 })
//             })
//         }
//     },
//     6792: function(i, e, a) {
//         a.d(e, {
//             $: function() {
//                 return c
//             }
//         });
//         var o = a(5893)
//           , s = a(5675)
//           , n = a.n(s);
//         let t = [{
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/666D4708-0CD0-45D2-B731-691DB1EED684-min_nmn09j.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152790/www.hugomaquininhas.com/entregas/AnyConv.com__IMG_8947_tbo4io.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/D0086EEF-F809-4BCA-9F9D-C982C69C5C59-min_ggdjjn.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/ACEB195D-E8EF-447C-919F-2106B91DD74C-min_cmziwc.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/2A588371-2D4A-4A9B-A5AE-29CF670AA8B2-min_de5t0z.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/ADDA3165-1725-4B7E-A496-0413E41CB1AE-min_slkxm6.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/B3772A9B-AC1C-49E9-857A-3E4C7AC2E610-min_cvb7wr.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/A9D56768-392E-4180-9DBA-1AB0BDE2F0C5-min_h8rv7m.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/748BFAB5-0A59-43C6-88F4-29D352083CA9-min_hjgvjx.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/D95BB40F-5F02-49E8-A345-921C61793B3B-min_qnknnm.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/67A7F6CB-38A0-480F-96CA-3461D4FCC50E-min_ufmlkw.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/90FA0C2C-9A17-460C-B103-4A5A67FCF178-min_vbb1iy.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152112/www.hugomaquininhas.com/entregas/07E2B971-038F-4631-89E5-1C24DCCB8AFC-min_wxixzy.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152112/www.hugomaquininhas.com/entregas/CD82125C-3A81-4EB0-9311-04CB0FEB5A7F-min_rerxp3.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152112/www.hugomaquininhas.com/entregas/photo_2023-05-26_22-30-34-min_qhucca.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152111/www.hugomaquininhas.com/entregas/5F0F5294-3633-4F89-8CF6-1EFB1141C49D-min_pjvfqi.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152112/www.hugomaquininhas.com/entregas/0B168D5C-C4B4-4042-B971-2BD7A7E54629-min_f3zle5.jpg"
//         }, {
//             src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1685152112/www.hugomaquininhas.com/entregas/E733797F-84E4-44D2-8F92-24EBE7B67C02-min_qcphwu.jpg"
//         }];
//         function c() {
//             function i(i) {
//                 let {src: e} = i;
//                 return (0,
//                 o.jsx)("div", {
//                     children: (0,
//                     o.jsx)(n(), {
//                         src: e,
//                         alt: "Entregando maquininha",
//                         width: 270,
//                         height: 480,
//                         className: "rounded"
//                     })
//                 })
//             }
//             return (0,
//             o.jsx)("section", {
//                 className: "w-full",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-6 md:px-4 py-4 md:py-8 flex flex-col justify-center items-center text-center space-y-6",
//                     children: [(0,
//                     o.jsx)("h2", {
//                         className: "text-xl md:text-2xl font-semibold tracking-tight",
//                         children: "Confira as Maquininhas Entregues"
//                     }), (0,
//                     o.jsx)("div", {
//                         className: "grid grid-cols-3 md:grid-cols-6 gap-4",
//                         children: t.map((e,a)=>(0,
//                         o.jsx)(i, {
//                             src: e.src
//                         }, a))
//                     })]
//                 })
//             })
//         }
//     },
//     5830: function(i, e, a) {
//         a.d(e, {
//             B: function() {
//                 return u
//             }
//         });
//         var o = a(5893);
//         function s(i) {
//             let {title: e, description: a, Icon: s} = i;
//             return (0,
//             o.jsxs)("div", {
//                 className: "flex flex-row gap-4 items-start",
//                 children: [(0,
//                 o.jsx)("div", {
//                     className: "bg-green-500 p-1 rounded-md max-h-8",
//                     children: (0,
//                     o.jsx)(s, {
//                         size: 24,
//                         className: "text-white"
//                     })
//                 }), (0,
//                 o.jsxs)("div", {
//                     className: "text-start gap-4",
//                     children: [(0,
//                     o.jsx)("h3", {
//                         className: "font-semibold text-lg",
//                         children: e
//                     }), (0,
//                     o.jsx)("p", {
//                         className: "text-zinc-400",
//                         children: a
//                     })]
//                 })]
//             })
//         }
//         var n = a(3854)
//           , t = a(5434)
//           , c = a(9352)
//           , r = a(7106);
//         function u() {
//             return (0,
//             o.jsx)("section", {
//                 className: "w-full",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-6 md:px-4 py-8 flex flex-col md:flex-col justify-between text-center items-center gap-8 md:gap-12",
//                     children: [(0,
//                     o.jsx)("h2", {
//                         className: "text-xl md:text-2xl font-semibold tracking-tight",
//                         children: "Garanta esses benef\xedcios exclusivos"
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0",
//                         children: [(0,
//                         o.jsx)(s, {
//                             title: "Desconto de 10%",
//                             description: "Use o cupom HUGOLIMA10 e economize na sua compra",
//                             Icon: r.UdJ
//                         }), (0,
//                         o.jsx)(s, {
//                             title: "Suporte 24h",
//                             description: "Assistente virtual e uma equipe especializada para te atender",
//                             Icon: c.cNh
//                         }), (0,
//                         o.jsx)(s, {
//                             title: "Troca gr\xe1tis",
//                             description: "Trocamos a sua maquininha sem voc\xea precisar sair de casa",
//                             Icon: r.rtw
//                         }), (0,
//                         o.jsx)(s, {
//                             title: "Link de pagamento",
//                             description: "Fa\xe7a vendas online no boleto e cr\xe9dito em at\xe9 12x com Link do Ton",
//                             Icon: n.WRS
//                         }), (0,
//                         o.jsx)(s, {
//                             title: "App completo",
//                             description: "App com conta digital gr\xe1tis com pix e cart\xe3o para voc\xea pagar suas contas.",
//                             Icon: t.uuN
//                         })]
//                     })]
//                 })
//             })
//         }
//     },
//     5456: function(i, e, a) {
//         a.d(e, {
//             T: function() {
//                 return t
//             }
//         });
//         var o = a(5893)
//           , s = a(5675)
//           , n = a.n(s);
//         function t() {
//             return (0,
//             o.jsxs)("div", {
//                 className: "flex flex-row items-center gap-3",
//                 children: [(0,
//                 o.jsx)("div", {
//                     className: "bg-white rounded-full p-0.5",
//                     children: (0,
//                     o.jsx)(n(), {
//                         src: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1682709995/melhormaquininha.com/Design_sem_nome_1_-min_cy31gf.png",
//                         alt: "Hugo maquininhas",
//                         priority: !0,
//                         width: 40,
//                         height: 40
//                     })
//                 }), (0,
//                 o.jsxs)("div", {
//                     className: "text-start",
//                     children: [(0,
//                     o.jsx)("p", {
//                         className: "font-semibold",
//                         children: "@hugomaquininhas"
//                     }), (0,
//                     o.jsx)("p", {
//                         className: "text-xs text-zinc-400",
//                         children: "Especialista em meios de pagamentos"
//                     })]
//                 })]
//             })
//         }
//     },
//     3577: function(i, e, a) {
//         a.d(e, {
//             _: function() {
//                 return u
//             }
//         });
//         var o = a(5893)
//           , s = a(7294)
//           , n = a(8333);
//         let t = (i,e,a)=>{
//             let o = null;
//             return n.K.forEach(s=>{
//                 s.id == e && 1 === a && (o = s.taxasBandeira1[i - 1]),
//                 s.id == e && 2 === a && (o = s.taxasBandeira2[i - 1])
//             }
//             ),
//             o
//         }
//           , c = (i,e,a,o,s)=>{
//             let n = t(o, a, s)
//               , c = e ? (i / (1 - n / 100)).toFixed(2) : (i * (1 - n / 100)).toFixed(2);
//             return parseFloat(c)
//         }
//         ;
//         var r = a(168);
//         function u(i) {
//             let {defaultPlanId: e} = i
//               , [a,u] = (0,
//             s.useState)(e || 4)
//               , m = n.K.find(i=>i.id === a)
//               , [l,d] = (0,
//             s.useState)(100)
//               , [h,g] = (0,
//             s.useState)([])
//               , [p,x] = (0,
//             s.useState)(!1)
//               , [w,v] = (0,
//             s.useState)(1)
//               , [_,b] = (0,
//             s.useState)(!1)
//               , [f,y] = (0,
//             s.useState)(1)
//               , [q,j] = (0,
//             s.useState)(0)
//               , [C,S] = (0,
//             s.useState)("R$ 0,00")
//               , [N,T] = (0,
//             s.useState)("R$ 0,00")
//               , [k,O] = (0,
//             s.useState)("R$ 0,00")
//               , [P,A] = (0,
//             s.useState)(0);
//             return (0,
//             s.useEffect)(()=>{
//                 n.K.map(i=>{
//                     i.id === a && (1 === f ? g(i.taxasBandeira1) : g(i.taxasBandeira2))
//                 }
//                 )
//             }
//             , [function(i) {
//                 y(i)
//             }
//             , function(i) {
//                 u(i)
//             }
//             ]),
//             (0,
//             s.useEffect)(()=>{
//                 if (A(t(w, a, f)),
//                 p) {
//                     let i = c(l, !0, a, w, f);
//                     j(i - l),
//                     T((0,
//                     r.T)(i)),
//                     S((0,
//                     r.T)(l)),
//                     13 !== w ? (O((0,
//                     r.T)(i / w)),
//                     b(!1)) : (O((0,
//                     r.T)(i)),
//                     b(!0))
//                 } else {
//                     let i = c(l, !1, a, w, f);
//                     j(l - i),
//                     S((0,
//                     r.T)(i)),
//                     T((0,
//                     r.T)(l)),
//                     13 !== w ? (O((0,
//                     r.T)(l / w)),
//                     b(!1)) : (O((0,
//                     r.T)(l)),
//                     b(!0))
//                 }
//             }
//             , [l, p, a, w, f]),
//             (0,
//             o.jsx)("section", {
//                 className: "w-full",
//                 id: "#simulador",
//                 children: (0,
//                 o.jsxs)("div", {
//                     className: "max-w-7xl mx-auto px-6 md:px-4 py-4 md:py-8 flex flex-col justify-center md:justify-between items-center space-y-8",
//                     children: [(0,
//                     o.jsx)("h2", {
//                         className: "text-xl md:text-2xl font-semibold tracking-tight",
//                         children: "Simule suas vendas"
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "flex flex-col md:flex-row bg-green-600 items-center shadow-2xl gap-12 justify-between rounded-xl w-full",
//                         children: [(0,
//                         o.jsxs)("div", {
//                             className: "flex flex-col md:w-3/5 space-y-6 py-6 md:px-16 md:py-12",
//                             children: [(0,
//                             o.jsxs)("div", {
//                                 className: "space-y-2",
//                                 children: [(0,
//                                 o.jsx)("p", {
//                                     children: "Escolha seu plano:"
//                                 }), (0,
//                                 o.jsxs)("select", {
//                                     className: "bg-white text-zinc-700  px-2 py-3 font-semibold w-full rounded",
//                                     onChange: i=>{
//                                         u(parseInt(i.target.value))
//                                     }
//                                     ,
//                                     children: [m && (0,
//                                     o.jsx)("option", {
//                                         value: m.id,
//                                         children: m.nome
//                                     }), n.K.filter(i=>i.id !== (null == m ? void 0 : m.id)).map(i=>(0,
//                                     o.jsx)("option", {
//                                         value: i.id,
//                                         children: i.nome
//                                     }, i.id))]
//                                 })]
//                             }), (0,
//                             o.jsxs)("div", {
//                                 className: "space-y-2",
//                                 children: [(0,
//                                 o.jsx)("p", {
//                                     children: "valor da venda:"
//                                 }), (0,
//                                 o.jsxs)("div", {
//                                     className: "flex flex-row p-2 py-3 gap-2 w-full bg-white text-zinc-700 text-lg font-semibold rounded",
//                                     children: [(0,
//                                     o.jsx)("p", {
//                                         children: "R$"
//                                     }), (0,
//                                     o.jsx)("input", {
//                                         type: "number",
//                                         name: "price",
//                                         id: "price",
//                                         value: l,
//                                         onChange: i=>{
//                                             d(i.target.value)
//                                         }
//                                         ,
//                                         className: "appearance-none m-0 pl-1 bg-white",
//                                         placeholder: "0,00"
//                                     })]
//                                 })]
//                             }), (0,
//                             o.jsxs)("div", {
//                                 className: "space-y-2",
//                                 children: [(0,
//                                 o.jsx)("p", {
//                                     children: "Repassar taxas?"
//                                 }), (0,
//                                 o.jsxs)("select", {
//                                     className: "bg-white text-zinc-700 px-2 py-3 font-semibold w-full rounded",
//                                     onChange: i=>{
//                                         0 === parseInt(i.target.value) ? x(!1) : x(!0)
//                                     }
//                                     ,
//                                     children: [(0,
//                                     o.jsx)("option", {
//                                         value: 0,
//                                         children: "N\xe3o"
//                                     }), (0,
//                                     o.jsx)("option", {
//                                         value: 1,
//                                         children: "Sim"
//                                     })]
//                                 })]
//                             }), (0,
//                             o.jsxs)("div", {
//                                 className: "flex flex-col md:flex-row gap-6",
//                                 children: [(0,
//                                 o.jsxs)("div", {
//                                     className: "flex flex-col md:w-1/2 space-y-2",
//                                     children: [(0,
//                                     o.jsx)("p", {
//                                         children: "Parcelamento:"
//                                     }), (0,
//                                     o.jsx)("select", {
//                                         className: "px-2 py-3 w-full font-semibold bg-white text-zinc-700 rounded",
//                                         onChange: i=>{
//                                             v(parseInt(i.target.value))
//                                         }
//                                         ,
//                                         children: h.map((i,e)=>(0,
//                                         o.jsx)("option", {
//                                             value: e + 1,
//                                             children: 12 === e ? "D\xe9bito (".concat(i, "%)") : "".concat(e + 1, "x (").concat(i, "%)")
//                                         }, e))
//                                     })]
//                                 }), (0,
//                                 o.jsxs)("div", {
//                                     className: "flex flex-col md:w-1/2 space-y-2",
//                                     children: [(0,
//                                     o.jsx)("p", {
//                                         children: "Bandeira:"
//                                     }), (0,
//                                     o.jsxs)("select", {
//                                         className: "px-2 py-3 w-full font-semibold bg-white text-zinc-700 rounded",
//                                         onChange: i=>{
//                                             y(parseInt(i.target.value))
//                                         }
//                                         ,
//                                         children: [(0,
//                                         o.jsx)("option", {
//                                             value: 1,
//                                             children: "Mastercard e Visa"
//                                         }), (0,
//                                         o.jsx)("option", {
//                                             value: 2,
//                                             children: "Elo, Hiper e Amex"
//                                         })]
//                                     })]
//                                 })]
//                             }), (0,
//                             o.jsxs)("p", {
//                                 children: ["Recebimento em ", (0,
//                                 o.jsx)("span", {
//                                     className: "text-zinc-900 font-semibold",
//                                     children: "1 dia \xfatil"
//                                 })]
//                             })]
//                         }), (0,
//                         o.jsxs)("div", {
//                             className: "flex flex-col w-full bg-white px-2 py-6 md:py-32 rounded md:w-2/5 items-center text-center justify-center space-y-4 text-zinc-900",
//                             children: [(0,
//                             o.jsxs)("div", {
//                                 className: "flex flex-col w-full  px-2 py-3 items-center text-center font-bold",
//                                 children: [(0,
//                                 o.jsx)("p", {
//                                     className: "text-xl",
//                                     children: "Voc\xea recebe"
//                                 }), (0,
//                                 o.jsx)("span", {
//                                     className: " text-green-600 text-3xl",
//                                     children: C
//                                 })]
//                             }), (0,
//                             o.jsxs)("div", {
//                                 className: "flex flex-col text-center",
//                                 children: [(0,
//                                 o.jsx)("p", {
//                                     children: "Seu cliente paga:"
//                                 }), (0,
//                                 o.jsxs)("div", {
//                                     className: "text-center",
//                                     children: [(0,
//                                     o.jsx)("p", {
//                                         className: "text-green-600 font-bold text-lg",
//                                         children: N
//                                     }), (0,
//                                     o.jsx)("p", {
//                                         children: _ ? "No D\xe9bito" : "".concat(w, "x de ").concat(k)
//                                     })]
//                                 })]
//                             }), (0,
//                             o.jsxs)("div", {
//                                 className: "text-center",
//                                 children: [(0,
//                                 o.jsx)("p", {
//                                     children: "Total de taxas:"
//                                 }), (0,
//                                 o.jsxs)("p", {
//                                     className: "text-green-600 font-bold text-lg",
//                                     children: [P, "%"]
//                                 })]
//                             }), (0,
//                             o.jsxs)("div", {
//                                 className: "text-center text-sm",
//                                 children: [p ? (0,
//                                 o.jsx)("p", {
//                                     children: "Juros em R$"
//                                 }) : (0,
//                                 o.jsx)("p", {
//                                     children: "Desconto em R$"
//                                 }), (0,
//                                 o.jsx)("p", {
//                                     className: "text-green-600 font-bold text-lg",
//                                     children: (0,
//                                     r.T)(q)
//                                 })]
//                             })]
//                         })]
//                     })]
//                 })
//             })
//         }
//     },
//     168: function(i, e, a) {
//         a.d(e, {
//             T: function() {
//                 return o
//             }
//         });
//         let {format: o} = new Intl.NumberFormat("pt-br",{
//             style: "currency",
//             currency: "BRL"
//         })
//     },
//     8333: function(i, e, a) {
//         a.d(e, {
//             K: function() {
//                 return o
//             }
//         });
//         let o = [{
//             id: 4,
//             nome: "PromoTon",
//             description: "As menores taxas garantidas",
//             taxasBandeira1: [.85, 3.99, 4.99, 5.99, 6.99, 7.99, 8.99, 7.99, 8.99, 9.89, 9.89, 9.89, .85],
//             taxasBandeira2: [.85, 3.99, 4.99, 5.99, 6.99, 7.99, 8.99, 7.99, 8.99, 9.89, 9.89, 9.89, .85],
//             taxasMasterVisa: {
//                 credito1x: .85,
//                 credito2x: 3.99,
//                 credito3x: 4.99,
//                 credito4x: 5.99,
//                 credito5x: 6.99,
//                 credito6x: 7.99,
//                 credito7x: 8.99,
//                 credito8x: 9.89,
//                 credito9x: 9.89,
//                 credito10x: 9.89,
//                 credito11x: 9.89,
//                 credito12x: 9.89,
//                 debito: .85
//             },
//             taxasElo: {
//                 credito1x: .85,
//                 credito2x: 3.99,
//                 credito3x: 4.99,
//                 credito4x: 5.99,
//                 credito5x: 6.99,
//                 credito6x: 7.99,
//                 credito7x: 8.99,
//                 credito8x: 9.89,
//                 credito9x: 9.89,
//                 credito10x: 9.89,
//                 credito11x: 9.89,
//                 credito12x: 9.89,
//                 debito: .85
//             }
//         }, {
//             id: 1,
//             nome: "GigaTon",
//             description: "O Preferido dos clientes",
//             taxasBandeira1: [3.69, 5.99, 6.29, 7.15, 7.99, 8.79, 9.59, 10.39, 11.19, 11.99, 12.79, 13.49, 1.79],
//             taxasBandeira2: [4.88, 7.38, 7.68, 8.57, 9.38, 10.18, 10.98, 11.78, 12.58, 13.38, 14.18, 14.88, 2.98],
//             taxasMasterVisa: {
//                 credito1x: 3.69,
//                 credito2x: 5.99,
//                 credito3x: 6.29,
//                 credito4x: 7.15,
//                 credito5x: 7.99,
//                 credito6x: 8.79,
//                 credito7x: 9.59,
//                 credito8x: 10.39,
//                 credito9x: 11.19,
//                 credito10x: 11.99,
//                 credito11x: 12.79,
//                 credito12x: 13.49,
//                 debito: 1.79
//             },
//             taxasElo: {
//                 credito1x: 4.88,
//                 credito2x: 7.38,
//                 credito3x: 7.68,
//                 credito4x: 8.57,
//                 credito5x: 9.38,
//                 credito6x: 10.18,
//                 credito7x: 10.98,
//                 credito8x: 11.78,
//                 credito9x: 12.58,
//                 credito10x: 13.38,
//                 credito11x: 14.18,
//                 credito12x: 14.88,
//                 debito: 2.98
//             }
//         }, {
//             id: 2,
//             nome: "MegaTon",
//             description: "O melhor custo benef\xedcio",
//             taxasBandeira1: [3.49, 8.99, 10.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 17.99, 17.99, 1.69],
//             taxasBandeira2: [4.68, 10.38, 12.38, 13.38, 14.38, 15.38, 16.38, 17.38, 18.38, 19.38, 19.38, 19.38, 2.88],
//             taxasMasterVisa: {
//                 credito1x: 3.49,
//                 credito2x: 8.99,
//                 credito3x: 10.9,
//                 credito4x: 11.99,
//                 credito5x: 12.99,
//                 credito6x: 13.99,
//                 credito7x: 14.99,
//                 credito8x: 15.99,
//                 credito9x: 16.99,
//                 credito10x: 17.99,
//                 credito11x: 17.99,
//                 credito12x: 17.99,
//                 debito: 1.69
//             },
//             taxasElo: {
//                 credito1x: 4.68,
//                 credito2x: 10.38,
//                 credito3x: 12.38,
//                 credito4x: 13.38,
//                 credito5x: 14.38,
//                 credito6x: 15.38,
//                 credito7x: 16.38,
//                 credito8x: 17.38,
//                 credito9x: 18.38,
//                 credito10x: 19.38,
//                 credito11x: 19.38,
//                 credito12x: 19.38,
//                 debito: 2.88
//             }
//         }, {
//             id: 3,
//             nome: "B\xe1sico",
//             description: "M\xe1quinas com os menores pre\xe7os",
//             taxasBandeira1: [4.99, 9.91, 11.29, 12.64, 13.97, 15.27, 16.55, 17.81, 19.04, 20.24, 21.43, 22.59, 1.99],
//             taxasBandeira2: [6.18, 11.1, 12.48, 13.83, 15.16, 16.46, 17.74, 19, 20.23, 21.43, 22.62, 23.78, 2.99],
//             taxasMasterVisa: {
//                 credito1x: 4.99,
//                 credito2x: 9.91,
//                 credito3x: 11.29,
//                 credito4x: 12.64,
//                 credito5x: 13.97,
//                 credito6x: 15.27,
//                 credito7x: 16.55,
//                 credito8x: 17.81,
//                 credito9x: 19.04,
//                 credito10x: 20.24,
//                 credito11x: 21.43,
//                 credito12x: 22.59,
//                 debito: 1.99
//             },
//             taxasElo: {
//                 credito1x: 6.18,
//                 credito2x: 11.1,
//                 credito3x: 12.48,
//                 credito4x: 13.83,
//                 credito5x: 15.16,
//                 credito6x: 16.46,
//                 credito7x: 17.74,
//                 credito8x: 19,
//                 credito9x: 20.23,
//                 credito10x: 21.43,
//                 credito11x: 22.62,
//                 credito12x: 23.78,
//                 debito: 2.99
//             }
//         }, {
//             id: 5,
//             nome: "PromoTon (Padr\xe3o)",
//             description: "As menores taxas garantidas",
//             taxasBandeira1: [3.15, 5.49, 6.19, 6.99, 7.69, 8.49, 8.99, 9.99, 10.99, 11.49, 12.35, 12.39, 1.35],
//             taxasBandeira2: [4.34, 6.88, 7.58, 8.38, 9.08, 9.88, 10.38, 11.38, 12.38, 12.88, 13.74, 13.88, 2.54],
//             taxasMasterVisa: {
//                 credito1x: 3.15,
//                 credito2x: 5.49,
//                 credito3x: 6.19,
//                 credito4x: 6.99,
//                 credito5x: 7.69,
//                 credito6x: 8.49,
//                 credito7x: 8.99,
//                 credito8x: 9.99,
//                 credito9x: 10.99,
//                 credito10x: 11.49,
//                 credito11x: 12.35,
//                 credito12x: 12.39,
//                 debito: 1.35
//             },
//             taxasElo: {
//                 credito1x: 4.34,
//                 credito2x: 6.88,
//                 credito3x: 7.58,
//                 credito4x: 8.38,
//                 credito5x: 9.08,
//                 credito6x: 9.88,
//                 credito7x: 10.38,
//                 credito8x: 11.38,
//                 credito9x: 12.38,
//                 credito10x: 12.88,
//                 credito11x: 13.74,
//                 credito12x: 13.78,
//                 debito: 2.54
//             }
//         }]
//     },
//     2981: function(i, e, a) {
//         a.d(e, {
//             R: function() {
//                 return o
//             }
//         });
//         let o = [{
//             name: "T3 Smart Promo",
//             description: "A mais completa",
//             slug: "t3-smart-promo",
//             planId: 4,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268086/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-1_1_i7afne.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268091/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-2_1_r8t7li.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268095/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-3_1_hdq9cb.webp"],
//             fullPricing: 958.8,
//             pricing: 430.92,
//             numberOfParcel: 12,
//             valueOfParcel: 35.91,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=PROMOTON_TIER_SMART_POS&userTag=promoton_tier&utm_medium=invite_share&utm_source=revendedor",
//             sectionReverse: !0,
//             bonus: 320,
//             reviewCount: 186,
//             rating: 5
//         }, {
//             name: "T3 Promo",
//             description: "A melhor maquininha",
//             slug: "t3-promo",
//             planId: 4,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268272/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-1_munw1r.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268275/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-2_bqbxzm.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268280/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-3_d7idua.webp"],
//             fullPricing: 958.8,
//             pricing: 355.32,
//             numberOfParcel: 12,
//             valueOfParcel: 29.61,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 300,
//             reviewCount: 186,
//             rating: 5
//         }, {
//             name: "T2+ Promo",
//             description: "\xd3tima para entregas",
//             slug: "t2-promo",
//             planId: 4,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268547/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-1_hcajkz.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268550/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-2_ix0qea.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268552/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-3_droyrd.webp"],
//             fullPricing: 318.8,
//             pricing: 171.72,
//             numberOfParcel: 12,
//             valueOfParcel: 14.31,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 125,
//             reviewCount: 73,
//             rating: 5
//         }, {
//             name: "T1 Chip Promo",
//             description: "Venda sem celular",
//             slug: "t1-chip-promo",
//             planId: 4,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268705/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-1_m5byph.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268707/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-2_fk9y4g.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268709/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-3_sokdp2.webp"],
//             fullPricing: 478.8,
//             pricing: 258.12,
//             numberOfParcel: 12,
//             valueOfParcel: 23.31,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 2G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 125,
//             reviewCount: 84,
//             rating: 4
//         }, {
//             name: "T1 Promo",
//             description: "Maquininha bluetooth",
//             slug: "t1-promo",
//             planId: 4,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268873/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-1_wnkle4.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268874/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-2_jvcuta.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268875/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-3_fg15au.webp"],
//             fullPricing: 198.8,
//             pricing: 96.12,
//             numberOfParcel: 12,
//             valueOfParcel: 8.01,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Precisa de celular com internet",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256905/www.hugomaquininhas.com/icons/24/iphone-x_supi4b.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TONBROTHER_D150&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 100,
//             reviewCount: 206,
//             rating: 4
//         }, {
//             name: "T3 Smart Giga",
//             description: "A mais completa",
//             slug: "t3-smart-giga",
//             planId: 1,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268086/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-1_1_i7afne.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268091/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-2_1_r8t7li.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268095/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-3_1_hdq9cb.webp"],
//             fullPricing: 958.8,
//             pricing: 420.12,
//             numberOfParcel: 12,
//             valueOfParcel: 35.01,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?userTag=gigaton_tier&productId=GIGATON_TIER_SMART_POS&coupon=HUGOLIMA10&utm_medium=invite_share&utm_source=revendedor",
//             sectionReverse: !0,
//             bonus: 220,
//             reviewCount: 186,
//             rating: 5
//         }, {
//             name: "T3 Giga",
//             slug: "t3-giga",
//             description: "A melhor maquininha",
//             planId: 1,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268272/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-1_munw1r.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268275/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-2_bqbxzm.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268280/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-3_d7idua.webp"],
//             fullPricing: 958.8,
//             pricing: 344.52,
//             numberOfParcel: 12,
//             valueOfParcel: 28.71,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=GIGATON_S920&userTag=gigaton&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 200,
//             reviewCount: 91,
//             rating: 4
//         }, {
//             name: "T2+ Giga",
//             slug: "t2-giga",
//             description: "\xd3tima para entregas",
//             planId: 1,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268547/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-1_hcajkz.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268550/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-2_ix0qea.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268552/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-3_droyrd.webp"],
//             fullPricing: 318.8,
//             pricing: 139.32,
//             numberOfParcel: 12,
//             valueOfParcel: 11.61,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=GIGATON_D195&userTag=gigaton&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 100,
//             reviewCount: 45,
//             rating: 4
//         }, {
//             name: "T1 Chip Giga",
//             slug: "t1-chip-giga",
//             description: "Venda sem celular",
//             planId: 1,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268705/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-1_m5byph.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268707/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-2_fk9y4g.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268709/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-3_sokdp2.webp"],
//             fullPricing: 478.8,
//             pricing: 193.32,
//             numberOfParcel: 12,
//             valueOfParcel: 17.91,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 2G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=GIGATON_T1_CHIP&userTag=gigaton&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 100,
//             reviewCount: 56,
//             rating: 4
//         }, {
//             name: "T1 Giga",
//             slug: "t1-giga",
//             description: "Maquininha bluetooth",
//             planId: 1,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268873/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-1_wnkle4.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268874/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-2_jvcuta.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268875/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-3_fg15au.webp"],
//             fullPricing: 198.8,
//             pricing: 85.32,
//             numberOfParcel: 12,
//             valueOfParcel: 7.11,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Precisa de celular com internet",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256905/www.hugomaquininhas.com/icons/24/iphone-x_supi4b.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=GIGATON_D150&userTag=gigaton&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 75,
//             reviewCount: 102,
//             rating: 4
//         }, {
//             name: "T3 Smart Mega",
//             description: "A mais completa",
//             slug: "t3-smart-mega",
//             planId: 2,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268086/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-1_1_i7afne.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268091/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-2_1_r8t7li.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268095/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-3_1_hdq9cb.webp"],
//             fullPricing: 958.8,
//             pricing: 420.12,
//             numberOfParcel: 12,
//             valueOfParcel: 35.01,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?userTag=megaton_tier&productId=MEGATON_TIER_SMART_POS&coupon=HUGOLIMA10&utm_medium=invite_share&utm_source=revendedor",
//             sectionReverse: !0,
//             bonus: 220,
//             reviewCount: 186,
//             rating: 5
//         }, {
//             name: "T3 Mega",
//             slug: "t3-mega",
//             description: "A melhor maquininha",
//             planId: 2,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268272/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-1_munw1r.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268275/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-2_bqbxzm.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268280/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-3_d7idua.webp"],
//             fullPricing: 958.8,
//             pricing: 344.52,
//             numberOfParcel: 12,
//             valueOfParcel: 28.71,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=MEGATON_S920&userTag=megaton&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 200,
//             reviewCount: 38,
//             rating: 4
//         }, {
//             name: "T2+ Mega",
//             slug: "t2-mega",
//             description: "\xd3tima para entregas",
//             planId: 2,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268547/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-1_hcajkz.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268550/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-2_ix0qea.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268552/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-3_droyrd.webp"],
//             fullPricing: 318.8,
//             pricing: 139.32,
//             numberOfParcel: 12,
//             valueOfParcel: 11.61,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=MEGATON_D195&userTag=megaton&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 100,
//             reviewCount: 26,
//             rating: 3
//         }, {
//             name: "T1 Chip Mega",
//             slug: "t1-chip-mega",
//             description: "Venda sem celular",
//             planId: 2,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268705/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-1_m5byph.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268707/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-2_fk9y4g.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268709/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-3_sokdp2.webp"],
//             fullPricing: 478.8,
//             pricing: 193.32,
//             numberOfParcel: 12,
//             valueOfParcel: 17.91,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 2G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=MEGATON_T1_CHIP&userTag=megaton&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 100,
//             reviewCount: 67,
//             rating: 4
//         }, {
//             name: "T1 Mega",
//             slug: "t1-mega",
//             description: "Maquininha bluetooth",
//             planId: 2,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268873/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-1_wnkle4.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268874/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-2_jvcuta.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268875/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-3_fg15au.webp"],
//             fullPricing: 198.8,
//             pricing: 85.32,
//             numberOfParcel: 12,
//             valueOfParcel: 7.11,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Precisa de celular com internet",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256905/www.hugomaquininhas.com/icons/24/iphone-x_supi4b.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=MEGATON_D150&userTag=megaton&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 75,
//             reviewCount: 88,
//             rating: 3
//         }, {
//             name: "T3 Smart",
//             description: "A mais completa",
//             slug: "t3-smart",
//             planId: 3,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268086/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-1_1_i7afne.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268091/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-2_1_r8t7li.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268095/www.hugomaquininhas.com/ton/maquininhas/t3-smart/machine-t3-smart-3_1_hdq9cb.webp"],
//             fullPricing: 958.8,
//             pricing: 322.92,
//             numberOfParcel: 12,
//             valueOfParcel: 26.91,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?userTag=tonbase_tier&productId=TONBASE_TIER_SMART_POS&coupon=HUGOLIMA10&utm_medium=invite_share&utm_source=revendedor",
//             sectionReverse: !0,
//             bonus: 120,
//             reviewCount: 186,
//             rating: 5
//         }, {
//             name: "T3",
//             slug: "t3",
//             description: "A melhor maquininha",
//             planId: 3,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268272/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-1_munw1r.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268275/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-2_bqbxzm.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268280/www.hugomaquininhas.com/ton/maquininhas/t3/machine-t3-3_d7idua.webp"],
//             fullPricing: 958.8,
//             pricing: 214.92,
//             numberOfParcel: 12,
//             valueOfParcel: 17.91,
//             atributes: [{
//                 name: "Gera QR Code PIX",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689201698/www.hugomaquininhas.com/icons/24/icons8-pix_1_adgrxm.svg"
//             }, {
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante impresso",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202897/www.hugomaquininhas.com/icons/24/image_22_qvjmbv.svg"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TON_S920&userTag=ton&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 100,
//             reviewCount: 16,
//             rating: 3
//         }, {
//             name: "T2+",
//             slug: "t2",
//             description: "\xd3tima para entregas",
//             planId: 3,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268547/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-1_hcajkz.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268550/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-2_ix0qea.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268552/www.hugomaquininhas.com/ton/maquininhas/t2/machine-t2-3_droyrd.webp"],
//             fullPricing: 318.8,
//             pricing: 106.92,
//             numberOfParcel: 12,
//             valueOfParcel: 8.91,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 3G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }, {
//                 name: "Bateria de longa dura\xe7\xe3o",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256611/www.hugomaquininhas.com/icons/24/battery-_qw3tco.png"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TON_D195&userTag=ton&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 50,
//             reviewCount: 9,
//             rating: 3
//         }, {
//             name: "T1 Chip",
//             slug: "t1-chip",
//             description: "Venda sem celular",
//             planId: 3,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268705/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-1_m5byph.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268707/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-2_fk9y4g.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268709/www.hugomaquininhas.com/ton/maquininhas/t1-chip/machine-t1-chip-3_sokdp2.webp"],
//             fullPricing: 478.8,
//             pricing: 128.52,
//             numberOfParcel: 12,
//             valueOfParcel: 12.51,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Com Chip 2G e Wi-Fi",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202972/www.hugomaquininhas.com/icons/24/image_23_tdp3wc.svg"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TON_T1_CHIP&userTag=ton&utm_medium=invite_share&utm_source=revendendor",
//             sectionReverse: !0,
//             bonus: 25,
//             reviewCount: 12,
//             rating: 2
//         }, {
//             name: "T1",
//             slug: "t1",
//             description: "Maquininha bluetooth",
//             planId: 3,
//             images: ["https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268873/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-1_wnkle4.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268874/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-2_jvcuta.webp", "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689268875/www.hugomaquininhas.com/ton/maquininhas/t1/machine-t1-3_fg15au.webp"],
//             fullPricing: 198.8,
//             pricing: 22.8,
//             numberOfParcel: 12,
//             valueOfParcel: 1.9,
//             atributes: [{
//                 name: "Frete Gr\xe1tis pra todo Brasil",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689202508/www.hugomaquininhas.com/icons/24/image_21_yo6r0x.svg"
//             }, {
//                 name: "Comprovante por SMS",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256699/www.hugomaquininhas.com/icons/24/sms_stjg5g.png"
//             }, {
//                 name: "Precisa de celular com internet",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256905/www.hugomaquininhas.com/icons/24/iphone-x_supi4b.png"
//             }, {
//                 name: "Receba por aproxima\xe7\xe3o (NFC)",
//                 iconSrc: "https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1689256252/www.hugomaquininhas.com/icons/24/image_24_w1urui.svg"
//             }],
//             buyLink: "https://ton.com.br/checkout/#/cart?coupon=HUGOLIMA10&productId=TON_D150&userTag=ton&utm_medium=invite_share&utm_source=revendendor",
//             bonus: 5,
//             reviewCount: 18,
//             rating: 3
//         }]
//     }
// }]);
