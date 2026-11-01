import pedidoServices from '../services/pedidoServices.js'

class PedidoController {
    criar(req, res) {
        try {
            const novoPedido = pedidoServices.criar(req.body)
            return (
                res.status(201).json(novoPedido)
            )
        }
        catch (erro) {
            return res.status(erro.status || 500).json({ erro: erro.mensagem })
        }
    }

    listar(req, res) {
        try {
            const pedidos = pedidoServices.listar()
            return res.status(200).json(pedidos)
        }
        catch (erro) {
            return res.status(erro.status || 500).json({ mensagem: erro.mensagem })
        }
    }

    buscarPorId(req, res) {
        try {
            const pedido = pedidoServices.buscarPorId(req.params.id)
            return res.status(200).json(pedido)
        }
        catch (erro) {
            return res.status(erro.status || 500).json({ mensagem: erro.mensagem })
        }
    }

    atualizar(req, res) {
        try {
            const pedidoAtualizado = pedidoServices.atualizar(req.body, req.params.id)
            return res.status(200).json(pedidoAtualizado)
        }
        catch (erro) {
            return res.status(erro.status || 500).json({ mensagem: erro.mensagem })
        }
    }
}

export default new PedidoController()