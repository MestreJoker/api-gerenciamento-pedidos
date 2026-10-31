const pedidos = []
let idAtual = 1

class PedidoService {
    verificacoes(dados) {
        const { cliente, tipo, valor, prioridade } = dados
        if (!cliente || !tipo || !valor || !prioridade) {
            throw { status: 400, mensagem: "Insira todos os valores corretamente: cliente, tipo, valor e prioridade" }
        }

        else if (cliente == "") {
            throw { status: 400, mensagem: "Cliente não pode ser vazio" }
        }

        else if (tipo != "entrega" && tipo != "retirada") {
            throw { status: 400, mensagem: `Insira um tipo válido: 'entrega' ou 'retirada'` }
        }

        else if (valor <= 0 || typeof valor != "number") {
            throw { status: 400, mensagem: "Valor deve ser um número maior do que 0" }
        }

        else if (prioridade != "baixa" && prioridade != "média" && prioridade != "alta") {
            throw { status: 400, mensagem: "A prioridade deve receber um dos valores: 'baixa', 'media' ou 'alta'" }
        }
        else {return true}
    }
    criar(dados) {
        const { cliente, tipo, valor, prioridade } = dados

        //Verificar se tipo é reconhecido -----------------------

        /*const tiposReconhecidos = ['recebido', 'em_preparacao', 'enviado', 'entregue', 'cancelado']

        function verificarTipoReconhecido(){
            let reconhecido = false
            tiposReconhecidos.forEach((item) => {
                if(tipo == item) {
                    reconhecido = true
                }
            })
            return reconhecido
        }*/
        //--------------------------------------------------------
        if(this.verificacoes(dados)){
             const novoPedido = {
            id: idAtual,
            cliente: cliente,
            tipo: tipo,
            valor: valor,
            prioridade: prioridade,
            status: "recebido"
        }

        idAtual = idAtual + 1

        pedidos.push(novoPedido)
        return novoPedido
        }

       
    }


}