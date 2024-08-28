export interface MNotebook{
    notebook: boolean
    tag: string
    modelo: string
    num_serie: string
    versao_so: string
    caracteristicas: string
    observacao: string
}

export interface MMonitor1{
    monitor1: boolean
    modelo: String
    num_serie: String
    observacao: String
}

export interface MMonitor2{
    monitor2: boolean
    modelo: String
    num_serie: String
    observacao: String
}

export interface MTeclado{
    teclado: boolean
    modelo: String
    num_serie: String
    observacao: String
}

export interface MMouse{
    mouse: boolean
    modelo: String
    num_serie: String
    observacao: String
}

export interface MDesktop{
    desktop: boolean
    tag: String
    modelo: String
    num_serie: String
    versao_so: String
    caracteristicas: String
    observacao: String
}

export interface MAcessorios{
    suporte_notebook: boolean
    mouse_pad: Boolean
    observacao: String
}

export interface MNobreak{
    nobreak: boolean
    modelo: String
    num_serie: String
    observacao: String
}

export interface MHeadset{
    headset: boolean
    modelo: String
    num_serie: String
    observacao: String
}

export interface MCelular{
    celular: Boolean
    modelo: String
    imei: String
    numero: String
    observacao: String
}

export interface MFuncionario extends Document {
    nome: String
    cpf: String
    notebook: MNotebook[]
    monitor1: MMonitor1[]
    monitor2: MMonitor2[]
    teclado: MTeclado[]
    mouse: MMouse[]
    desktop: MDesktop[]
    acessorios: MAcessorios[]
    nobreak: MNobreak[]
    headset: MHeadset[]
    celular: MCelular[]
}
