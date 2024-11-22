var atendimento = {
    
    //Dados de entrada do paciente
    motivoAtendimento: "",
    dificuldadeRespiratoria: false,
    nauseas: false,
    alergia: false,
    vomitos: false,
    tonturas: false,
    dor: false,
    dor_local: "",
    queixaOutro: false,
    queixaOutroTexto: "",

    estadoInicialGrau: "", // Vai receber o valor do botão de rádio marcado.
    estabilidade: "", // Vai receber o valor do botão de rádio marcado.

    hemorragiaExterna: false,
    hemorragiaExternaLocal: "",
    hemorragiaInterna: false,
    hemorragiaInternaLocal: "",

    ferimentoLaceracao: false,
    ferimentoIncisao: false,
    ferimentoPerfuracao: false,
    ferimentoEscoriacao: false,
    ferimentoAmputacao: false,
    amputacaoLocal: "",

    viasAereas: "", // Vai receber o valor do botão de rádio marcado. 
    viaCorpoEstranho: Boolean,
    viaBroncoaspiracao: false,
    viaEdemaGlote: false,

    respNormal: false,
    respInsufAguda: false,
    respParadaVent: false,
    respVentilEsp: false,
    respAssistida: false,
    respRitmoIrregular: false,
    respSibilos: false,
    respRoncos: false,
    respCrepitantes: false,
    respHemopstise: false,
    respDiminMV: false,
    respExpNormal: false,

    pulsoRegular: false,
    pulsoIrregular: false,
    pulsoAusente: false,
    paradaCardiaca: false,
    peleNormal: false,
    palidez: false,
    cianose: false,
    peleQuente: false,
    anasarca: false,
    peleFria: false,
    peleSeca: false,
    peleUmida: false,
    dorToracicaTip: false,
    dorToracicaAtip: false,
    hipertensao: false,
    choqueHipovolemico: false,
    edemaAusente: false,
    septicemia: false,
    cardiog: false,
    anafilatico: false,
    palpebral: false,
    membrosInferiores: false,

    neuroNormal: false,
    neuroSonolencia: false,
    neuroObnubilacao: false,
    neuroAgitacao: false,
    neuroMidriase: false,
    neuroPupilasMiose: false,
    neuroComa: false,
    neuroConvulsao: false,
    neuroSDMeningea: false,
    neuroDeficitSensivel: false,
    neuroDeficitMotor: false,

    aberturaOcular: "",
    respostaVerbal: "",
    respostaOcular: "",

    colarCervical: false,
    mascAmbu: false,
    curativo: false,
    compressaoDireta: false,
    elevacaoMembro: false,
    compressaoPontosArt: false,
    imobilizacao: false,
    imobTalaFlexivel: false,
    imobTalaTracao: false,
    imobBandagens: false,
    imobPrancha: false,

    tabelaHora1: "",
    tabelaPa1: "",
    tabelaFC1: "",
    tabelaSPO1: "",
    tabelaHGT1: "",
    tabelaTemp1: "",
    tabelaGlasgow1: "",

    tabelaHora2: "",
    tabelaPa2: "",
    tabelaFC2: "",
    tabelaSPO2: "",
    tabelaHGT2: "",
    tabelaTemp2: "",
    tabelaGlasgow2: "",

    tabelaHora3: "",
    tabelaPa3: "",
    tabelaFC3: "",
    tabelaSPO3: "",
    tabelaHGT3: "",
    tabelaTemp3: "",
    tabelaGlasgow3: "",

    tabelaHora4: "",
    tabelaPa4: "",
    tabelaFC4: "",
    tabelaSPO4: "",
    tabelaHGT4: "",
    tabelaTemp4: "",
    tabelaGlasgow4: "",

    tabelaHora5: "",
    tabelaPa5: "",
    tabelaFC5: "",
    tabelaSPO5: "",
    tabelaHGT5: "",
    tabelaTemp5: "",
    tabelaGlasgow5: "",

    tabelaHora6: "",
    tabelaPa6: "",
    tabelaFC6: "",
    tabelaSPO6: "",
    tabelaHGT6: "",
    tabelaTemp6: "",
    tabelaGlasgow6: "",

    tabelaHora7: "",
    tabelaPa7: "",
    tabelaFC7: "",
    tabelaSPO7: "",
    tabelaHGT7: "",
    tabelaTemp7: "",
    tabelaGlasgow7: "",

    tabelaHora8: "",
    tabelaPa8: "",
    tabelaFC8: "",
    tabelaSPO8: "",
    tabelaHGT8: "",
    tabelaTemp8: "",
    tabelaGlasgow8: "",

    tabelaHora9: "",
    tabelaPa9: "",
    tabelaFC9: "",
    tabelaSPO9: "",
    tabelaHGT9: "",
    tabelaTemp9: "",
    tabelaGlasgow9: "",

    tabelaHora10: "",
    tabelaPa10: "",
    tabelaFC10: "",
    tabelaSPO10: "",
    tabelaHGT10: "",
    tabelaTemp10: "",
    tabelaGlasgow10: "",
}