import { Schema, model, Document } from 'mongoose'
import { MAcessorios, MCelular, MDesktop, MFuncionario, 
    MHeadset, MMonitor1, MMonitor2, MMouse, MNobreak, 
    MNotebook, MTeclado } from '../interfaces/inventario_models'

const notebookSchema = new Schema<MNotebook>({
    notebook:{
        type: Boolean,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    versao_so: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: true
    }
})

const monitor1Schema = new Schema<MMonitor1>({
    monitor1:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }
})

const monitor2Schema = new Schema<MMonitor2>({
    monitor2:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }

})

const tecladoSchema = new Schema<MTeclado>({
    teclado:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }
})

const mouseSchema = new Schema<MMouse>({
    mouse:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }
})

const desktopSchema = new Schema<MDesktop>({
    desktop:{
        type: Boolean,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    versao_so: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: true
    }
})

const acessoriosSchema = new Schema<MAcessorios>({
    suporte_notebook:{
        type: Boolean,
        required: true
    },
    mouse_pad:{
        type: Boolean,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }
})

const nobreakSchema = new Schema<MNobreak>({
    nobreak:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }
})

const headsetSchema = new Schema<MHeadset>({
    headset:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    num_serie:{
        type: String,
        required: true
    },
    observacao:{
        type:String,
        required: true
    }
})

const celularSchema = new Schema<MCelular>({
    celular:{
        type: Boolean,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    imei:{
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{2}-\d{5}-\d{4}$/
    },
    observacao:{
        type:String,
        required: true
    }
})

const funcionarioSchema = new Schema<MFuncionario>({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    },
    notebook: {
        type: [notebookSchema],
        default:[]
    },
    monitor1:{
        type: [monitor1Schema],
        default: []
    },
    monitor2:{
        type:[monitor2Schema],
        default: []
    },
    teclado:{
        type:[tecladoSchema],
        default: []
    },
    mouse:{
        type:[mouseSchema],
        default: []
    },
    desktop:{
        type:[desktopSchema],
        default: []
    },
    acessorios:{
        type:[acessoriosSchema],
        default: []
    },
    nobreak:{
        type:[nobreakSchema],
        default: []
    },
    headset:{
        type:[headsetSchema],
        default: []
    },
    celular:{
        type:[celularSchema],
        default: []
    }
})

export const Funcionario = model<MFuncionario>('Funcionario', funcionarioSchema)