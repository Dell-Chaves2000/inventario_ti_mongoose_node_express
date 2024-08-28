import { Router } from 'express'
import { funcionarioController } from '../controllers/funcionariosController'

const router = Router()

//Rotas referentes ao funcionario
router.post('/funcionarios', funcionarioController.criarFuncionario)
router.put('/funcionarios/:cpf', funcionarioController.atualizarFuncionario)
router.delete('/funcionarios/:cpf', funcionarioController.excluirFuncionario)
router.get('/funcionarios/:cpf', funcionarioController.consultarFuncionario)
router.get('/funcionarios', funcionarioController.listarFuncionarios)

//rotas referentes ao notebook
router.put('/funcionarios/:cpf/notebook', funcionarioController.atualizarNotebook)
router.delete('/funcionarios/:cpf/notebook', funcionarioController.excluirNotebook)

//rotas referentes ao monitor1
router.put('/funcionarios/:cpf/monitor1', funcionarioController.atualizarMonitor1)
router.delete('/funcionarios/:cpf/monitor1', funcionarioController.excluirMonitor1)

//rotas referentes ao monitor2
router.put('/funcionarios/:cpf/monitor2', funcionarioController.atualizarMonitor2)
router.delete('/funcionarios/:cpf/monitor2', funcionarioController.excluirMonitor2)

//rotas referentes ao teclado
router.put('/funcionarios/:cpf/teclado', funcionarioController.atualizarTeclado)
router.delete('/funcionarios/:cpf/teclado', funcionarioController.excluirTeclado)

//rotas referentes ao mouse
router.put('/funcionarios/:cpf/mouse', funcionarioController.atualizarMouse)
router.delete('/funcionarios/:cpf/mouse', funcionarioController.excluirMouse)

//rotas referentes ao desktop
router.put('/funcionarios/:cpf/desktop', funcionarioController.atualizarDesktop)
router.delete('/funcionarios/:cpf/desktop', funcionarioController.excluirDesktop)

//rotas referentes aos acessorios
router.put('/funcionarios/:cpf/acessorios', funcionarioController.atualizarAcessorios)
router.delete('/funcionarios/:cpf/acessorios', funcionarioController.excluirAcessorios)

//rotas referentes ao nobreak
router.put('/funcionarios/:cpf/nobreak', funcionarioController.atualizarNobreak)
router.delete('/funcionarios/:cpf/nobreak', funcionarioController.excluirNobreak)

//rotas referentes ao headset
router.put('/funcionarios/:cpf/headset', funcionarioController.atualizarHeadset)
router.delete('/funcionarios/:cpf/headset', funcionarioController.excluirHeadset)

//rotas referentes ao celular
router.put('/funcionarios/:cpf/celular', funcionarioController.atualizarCelular)
router.delete('/funcionarios/:cpf/celular', funcionarioController.excluirCelular)

export default router