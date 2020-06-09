module.exports = {
  generate(req, res) {
    return res.render('../views/generate.njk', { signature: "" })
  },
  post(req, res) {
    let name = req.body.name
    let job = req.body.job
    let phone = req.body.phone
    let branch = req.body.branch
    let email = req.body.email

    const signature = 
    `<p>Ol&aacute; prezado cliente, boa tarde!</p>
    <p>Introdu&ccedil;&atilde;o, explique do que vamos falar.</p>
    <p>Conte&uacute;do, fale.</p>
    <p>Resposta, combine o resultado desejado.</p>
    <p>Sempre à sua disposi&ccedil;&atilde;o.<br />Atenciosamente,</p>
    <p><strong>${name}</strong><br/>${job}</p>
    <p><strong>Fone: </strong>${phone}<strong> Ramal: </strong>${branch} | <strong>E-mail: </strong>${email}</p>
    <p>Para todos os contatos WebTrip acesse: <a href="http://www.webtrip.tur.br/contato.html" target="_blank" rel="noopener noreferrer">http://www.webtrip.tur.br/contato.html</a></p>
    <div style="font-family: tahoma,arial,verdana; font-size: 14px; color: #575f77;">
    <p><strong>Observa&ccedil;&otilde;es Importantes:</strong><br />- Or&ccedil;amentos sujeitos &agrave; disponibilidade e altera&ccedil;&atilde;o de pre&ccedil;o sem pr&eacute;vio aviso;<br />- Reservas sujeitas a cancelamento e altera&ccedil;&atilde;o de valores at&eacute; o ato da emiss&atilde;o/compra;<br />- Altera&ccedil;&otilde;es e cancelamentos sujeitas &agrave; penalidade de acordo com a regra tarif&aacute;ria.</p>
    <p><a href="http://www.webtrip.tur.br/" target="_blank" rel="noopener noreferrer"><img src="http://www.webtrip.tur.br/ass/WebTrip2020.png" width="650" border="0" /></a></p>
    </div>`

    const scroll=`onLoad="window.scroll(5000, 50000)"`

    return res.render('../views/generate.njk', { 
      signature,
      scroll,
      success: "Assinatura gerada com sucesso!"
    })
  }
}