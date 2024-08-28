import { Request, Response } from 'express'
import { Funcionario } from '../models/funcionarios.model'

class FuncionarioController{
    //Parametros referentes ao funcionario.
    async criarFuncionario(req: Request, res: Response): Promise<void> {
        const { nome, cpf } = req.body
        try{
            const funcionarioExiste = await Funcionario.findOne({ cpf })
            if(funcionarioExiste){
                res.status(400).json({message: 'CPF já cadastrado!'})
                return
            }
            const novoFuncionario = new Funcionario({nome, cpf})
            await novoFuncionario.save()

            res.status(201).json({message: 'Funcionário cadastrado com sucesso!', novoFuncionario})
        }catch(error) {
            res.status(500).json({message: 'Erro ao cadastrar o funcionário!', error})
        }
    }

    async atualizarFuncionario(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { nome } = req.body
        try{
            const funcionario = await Funcionario.findOneAndUpdate({cpf}, {nome}, {new:true})
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            res.status(200).json({message: 'Funcionário atualizado com sucesso!', funcionario})
        }catch(error){
            res.status(500).json({message: 'Erro ao atualizar o funcionário:', error})
        }
    }

    async excluirFuncionario(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            const hasInventario = [
                funcionario.notebook.some((nb: any) => nb.notebook),
                funcionario.monitor1.some((m: any) => m.monitor1),
                funcionario.monitor2.some((m: any) => m.monitor2),
                funcionario.teclado.some((t: any) => t.teclado),
                funcionario.mouse.some((m: any) => m.mouse),
                funcionario.desktop.some((d: any) => d.desktop),
                funcionario.acessorios.some((a: any) => a.suporte_notebook || a.mouse_pad),
                funcionario.nobreak.some((n: any) => n.nobreak),
                funcionario.headset.some((h: any) => h.headset),
                funcionario.celular.some((c: any) => c.celular)
            ].some(Boolean)
            
            if(hasInventario){
                res.status(400).json({message: 'Funcionário não pode ser excluído porque possui itens no inventario!'})
                return
            }
            await funcionario.deleteOne()
            res.status(200).json({message: 'Funcionário excluído com sucesso!'})
        }catch (error){
            res.status(500).json({message: 'Erro ao excluír funcionário:', error})
        }
    }

    async consultarFuncionario(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado'})
                return
            }
            res.status(200).json(funcionario)
        }catch (error){
            res.status(500).json({message: 'Erro ao consultar o funcionário!',error})
        }
    }

    async listarFuncionarios(req: Request, res: Response): Promise<void>{
        try{
            const funcionarios = await Funcionario.find()
            res.status(200).json({message: 'Lista de funcionários:', funcionarios})
        }catch (error){
            res.status(500).json({message: 'Erro ao listar o funcionários:',error})
        }
    }

    //Parâmetros referente ao Notebook.
    async atualizarNotebook(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { notebook } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.notebook = notebook
            await funcionario.save()
            res.status(200).json({message: 'Notebook atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o notebook!'})
        }
    }

    async excluirNotebook(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.notebook = []
            await funcionario.save()
            res.status(200).json({message: 'Notebook excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o notebook:', error})
        }
    }


    //Parâmetros referente ao monitor1.
    async atualizarMonitor1(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { monitor1 } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.monitor1 = monitor1
            await funcionario.save()
            res.status(200).json({message: 'Monitor1 atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o monitor1!'})
        }
    }

    async excluirMonitor1(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.monitor1 = []
            await funcionario.save()
            res.status(200).json({message: 'Monitor1 excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o monitor1:', error})
        }
    }

     //Parâmetros referente ao monitor2.
     async atualizarMonitor2(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { monitor2 } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.monitor2 = monitor2
            await funcionario.save()
            res.status(200).json({message: 'Monitor2 atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o monitor2!'})
        }
    }

    async excluirMonitor2(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.monitor2 = []
            await funcionario.save()
            res.status(200).json({message: 'Monitor2 excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o monitor2:', error})
        }
    }

    //Parâmetros referente ao teclado.
    async atualizarTeclado(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { teclado } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.teclado = teclado
            await funcionario.save()
            res.status(200).json({message: 'Teclado atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o teclado!'})
        }
    }

    async excluirTeclado(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.teclado = []
            await funcionario.save()
            res.status(200).json({message: 'Teclado excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o teclado:', error})
        }
    }

    //Parâmetros referente ao mouse.
    async atualizarMouse(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { mouse } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.mouse = mouse
            await funcionario.save()
            res.status(200).json({message: 'Mouse atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o mouse!'})
        }
    }

    async excluirMouse(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.mouse = []
            await funcionario.save()
            res.status(200).json({message: 'Mouse excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o mouse:', error})
        }
    }

     //Parâmetros referente ao desktop.
     async atualizarDesktop(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { desktop } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.desktop = desktop
            await funcionario.save()
            res.status(200).json({message: 'Desktop atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o desktop!'})
        }
    }

    async excluirDesktop(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.desktop = []
            await funcionario.save()
            res.status(200).json({message: 'Desktop excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o desktop:', error})
        }
    }

    //Parâmetros referente aos acessorios.
    async atualizarAcessorios(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { acessorios } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.acessorios = acessorios
            await funcionario.save()
            res.status(200).json({message: 'Acessórios atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o acessórios!'})
        }
    }

    async excluirAcessorios(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.acessorios = []
            await funcionario.save()
            res.status(200).json({message: 'Acessórios excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o acessórios:', error})
        }
    }

    //Parâmetros referente ao nobreak.
    async atualizarNobreak(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { nobreak } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.nobreak = nobreak
            await funcionario.save()
            res.status(200).json({message: 'Nobreak atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o nobreak!'})
        }
    }

    async excluirNobreak(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.nobreak = []
            await funcionario.save()
            res.status(200).json({message: 'Nobreak excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o nobreak:', error})
        }
    }

    //Parâmetros referente ao headset.
    async atualizarHeadset(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { headset } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.headset = headset
            await funcionario.save()
            res.status(200).json({message: 'Headset atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o headset!'})
        }
    }

    async excluirHeadset(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.headset = []
            await funcionario.save()
            res.status(200).json({message: 'Headset excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o headset:', error})
        }
    }

    //Parâmetros referente ao celular.
    async atualizarCelular(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        const { celular } = req.body
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.celular = celular
            await funcionario.save()
            res.status(200).json({message: 'Celular atualizado com sucesso!', funcionario})
        }catch (error){
            res.status(500).json({message: 'Erro ao atualizar o celular!'})
        }
    }

    async excluirCelular(req: Request, res: Response): Promise<void>{
        const { cpf } = req.params
        try{
            const funcionario = await Funcionario.findOne({ cpf })
            if(!funcionario){
                res.status(404).json({message: 'Funcionário não encontrado!'})
                return
            }
            funcionario.celular = []
            await funcionario.save()
            res.status(200).json({message: 'Celular excluído com sucesso!'})   
        }catch(error){
            res.status(500).json({message: 'Erro ao excluir o celular:', error})
        }
    }

}

export const funcionarioController = new FuncionarioController()