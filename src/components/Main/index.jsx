import Card from "../Card/index.jsx";

import { useEffect, useState } from 'react';

import './styles.css'

import Atencao from '../../assets/atencao.jpeg'
import Colecionador from '../../assets/Colecionador.jpeg'
import Crepusculo from '../../assets/crespusculo.jpeg'
import Detento from '../../assets/detento.jpeg'
import GarotaExemplar from '../../assets/garota.jpeg'
import Inferno from '../../assets/inferno.jpeg'
import Lista from '../../assets/lista.jpeg'
import Morro from '../../assets/Morro.jpg'
import SeteMarido from '../../assets/marido.jpg'
import Paciente from '../../assets/paciente.jpeg'
import PoderAgora from '../../assets/poder.jpeg'
import Teto from '../../assets/Teto.jpeg'
import { ModalContainer } from "../Modal/index.jsx";


export function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [flagImages, setFlagImages] = useState('');
  const [flagText, setFlagText] = useState('');
  const [flagLinkBuy, setFlagLinkBuy] = useState('');
  const [flagLinkGrup, setFlagLinkGrup] = useState ('')

  function HandleImage(img){
    if(img == Colecionador) {
      setFlagImages(Colecionador)
      setFlagText('O COLECIONADOR é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro.')
      setFlagLinkBuy('https://www.amazon.com.br/Colecionador-John-Fowles/dp/8594541082/ref=sr_1_5?adgrpid=136915428868&gclid=CjwKCAjwrNmWBhA4EiwAHbjEQFfZIPIPUaBV_DyRdzxM3MkKav1icX4eonJ_SkAnHLpjLWQHJhIR4RoColIQAvD_BwE&hvadid=595901420299&hvdev=c&hvlocphy=9102283&hvnetw=g&hvqmt=e&hvrand=8578444672811708210&hvtargid=kwd-448261704713&hydadcr=4126_13219057&keywords=livro+o+colecionador&qid=1658233988&sr=8-5')
      

    } else if(img === Lista) {
      setFlagImages(Lista)
      setFlagText(' Em uma ilha afastada na costa da Irlanda, convidados se reúnem para celebrar uma união de dar inveja. O noivo, bonito e charmoso, é uma estrela de TV em ascensão. A noiva, elegante e ambiciosa, é editora da própria revista. A festa de casamento é um reflexo de suas personalidades: vestido e terno de grife, localização remota e exclusiva, decoração luxuosa, uísque da melhor qualidade. Tudo rigorosamente planejado. ')
      setFlagLinkBuy('https://www.amazon.com.br/Lista-Convidados-Lucy-Foley/dp/6555601507/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20XK9F55K2Z7F&keywords=livro+lista+de+convidados&qid=1658235029&sprefix=livro+lista+de+convidado%2Caps%2C182&sr=8-5')

    } else if(img === Paciente) {
      setFlagImages(Paciente)
      setFlagText(' Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fotógrafo bem-sucedido e morava numa área nobre de Londres que dá para o parque de Hampstead Heath. Certa noite, Gabriel, seu marido, voltou tarde para casa depois de um ensaio para a Vogue, e de repente a vida de Alicia mudou completamente Alicia tinha 33 anos quando deu cinco tiros no rosto do marido, e ela nunca mais disse uma palavra s.')
      setFlagLinkBuy('https://www.amazon.com.br/paciente-silenciosa-Alex-Michaelides/dp/8501116432/ref=sr_1_5?keywords=livro+paciente+silenciosa&qid=1658234986&sprefix=livro+paciente+si%2Caps%2C242&sr=8-5')

    }else if(img === Crepusculo) {
      setFlagImages(Crepusculo)
      setFlagText(' Eles se apaixonam e, apesar de saber que a garota corre perigo, Edward não desiste da paixão. Bella, então, descobre o segredo da família: eles são vampiros. Mesmo muito assustada com a descoberta, a garota decide enfrentar todos os riscos para viver a paixão por Edward, sabendo que ele pode matá-la a qualquer momento. ')
      setFlagLinkBuy('https://www.amazon.com.br/Crep%C3%BAsculo-Stephenie-Meyer/dp/8598078301/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17BVE1LVLYNJK&keywords=crepusculo&qid=1658235129&sprefix=crespusculo%2Caps%2C190&sr=8-2')

    }else if(img === Teto) {
      setFlagImages(Teto)
      setFlagText(' Leon está enrolado com questões financeiras e tem uma ideia pouco convencional para arranjar dinheiro rápido: sublocar seu apartamento, onde fica apenas no período da manhã e da tarde nos dias úteis, já que passa os finais de semana com a namorada e trabalha como enfermeiro no turno da noite.')
      setFlagLinkBuy('https://www.amazon.com.br/Teto-Para-Dois-Beth-Oleary/dp/8551005413/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1HBQXGX2BVQXD&keywords=teto+para+dois&qid=1658235149&sprefix=teto+para+doi%2Caps%2C195&sr=8-5')

    }else if(img === SeteMarido) {
      setFlagImages(SeteMarido)
      setFlagText(' Amor e ódio. E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')
      setFlagLinkBuy('https://www.amazon.com.br/Os-sete-maridos-Evelyn-Hugo/dp/8584391509/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1HBQXGX2BVQXD&keywords=teto+para+dois&qid=1658235149&sprefix=teto+para+doi%2Caps%2C195&sr=8-8')

    }else if(img === Morro) {
      setFlagImages(Morro)
      setFlagText(' Barreiras sociais impedem que Cathy se relacione com o cavalariço Heathcliff. O rapaz some quando Cathy se casa com Edgar, um homem de posses, e retorna dez anos depois como um homem rico. Entretanto, pode ser tarde demais para ele e Cathy.')
      setFlagLinkBuy('https://www.amazon.com.br/Ventos-Uivantes-Cl%C3%A1ssicos-literatura-mundial-ebook/dp/B08CY7626J/ref=sr_1_1?keywords=morro+dos+ventos+uivantes&qid=1658235245&sprefix=morro+dos%2Caps%2C250&sr=8-1')

    }else if(img === Atencao) {
      setFlagImages(Atencao)
      setFlagText(' Mais do que uma técnica de meditação, a atenção plena (ou mindfulness) é um estilo de vida que consiste em estar aberto à experiência presente, observando seus pensamentos sem julgamentos, críticas ou elucubrações.')
      setFlagLinkBuy('https://www.amazon.com.br/Aten%C3%A7%C3%A3o-plena-para-iniciantes-Kabat-Zinn/dp/8543106958/ref=sr_1_3?keywords=aten%C3%A7%C3%A3o+plena&qid=1658235268&sprefix=aten%C3%A7%2Caps%2C203&sr=8-3')

    }else if(img === Detento) {
      setFlagImages(Detento)
      setFlagText(' Agora, em liberdade, depois de cumprir pena por receptação de carga roubada, num confuso processo criminal que o condenou a oito anos e três meses de reclusão, Jocenir lança o livro "Diário de um Detento", em que conta a sua prisão e a rotina sufocante das prisões em que foi forçado a viver.')
      setFlagLinkBuy('https://www.amazon.com.br/Diario-um-Detento-Livro-Jocenir/dp/858791703X/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3J3UKVUHBQPHL&keywords=diario+de+um+detento&qid=1658235293&sprefix=diaro+de+um+detent%2Caps%2C208&sr=8-2')

    }else if(img === Inferno) {
      setFlagImages(Inferno)
      setFlagText(' Dessa forma, Sobrevivendo no Inferno aborda, de diferentes formas, temas como encarceramento em massa, genecídio, abolicionismo penal, desmilitarização da polícia, dependência química, descriminalização das drogas, entre outros. Tudo isso ilustrado por situações costumeiras do dia a dia dos moradores das periferias..')
      setFlagLinkBuy('https://www.amazon.com.br/Sobrevivendo-no-inferno-Racionais-Mcs/dp/8535931732/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3J3UKVUHBQPHL&keywords=diario+de+um+detento&qid=1658235410&sprefix=diaro+de+um+detent%2Caps%2C208&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVUE1ETDc4NDEwRkMmZW5jcnlwdGVkSWQ9QTAxMjQyOTgzUFk5RERPSE1UTjdaJmVuY3J5cHRlZEFkSWQ9QTEwMTMwNzUyOFIwSlRZU005NTBJJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==')

    }else if(img === PoderAgora) {
      setFlagImages(PoderAgora)
      setFlagText(' Dessa forma, Sobrevivendo no Inferno aborda, de diferentes formas, temas como encarceramento em massa, genecídio, abolicionismo penal, desmilitarização da polícia, dependência química, descriminalização das drogas, entre outros. Tudo isso ilustrado por situações costumeiras do dia a dia dos moradores das periferias.')
      setFlagLinkBuy('https://www.amazon.com.br/poder-do-agora-Eckhart-Tolle/dp/8575420275/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2632UKAPXXWFR&keywords=poder+do+agora&qid=1658235426&sprefix=poder+do+agor%2Caps%2C196&sr=8-1')

    }else if(img === GarotaExemplar) {
      setFlagImages(GarotaExemplar)
      setFlagText('Na manhã de seu quinto aniversário de casamento, Amy, a linda e inteligente esposa de Nick Dunne, desaparece de sua casa às margens do Rio Mississippi. Aparentemente, trata-se de um crime violento, e passagens do diário de Amy revelam uma garota perfeccionista que seria capaz de levar qualquer um ao limite. ')
      setFlagLinkBuy('https://www.amazon.com.br/Garota-exemplar-Gillian-Flynn-ebook/dp/B00BIIQEF8/ref=sr_1_1?keywords=garota+exemplar&qid=1658339510&sprefix=Garota%2Caps%2C315&sr=8-1')
      setFlagLinkGrup('https://chat.whatsapp.com/EfjGytgW4JP7ZkFHL3gYSI')
    }
  
  }

  return(
    <div className="main">
       <div className="card-container">
        <Card img={Colecionador}/>
        <button onClick={() => {HandleImage(Colecionador); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={GarotaExemplar}/>
        <button onClick={() => {HandleImage(GarotaExemplar); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Lista}/>
        <button onClick={() => {HandleImage(Lista); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Paciente}/>
        <button onClick={() => {HandleImage(Paciente); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Crepusculo}/>
        <button onClick={() => {HandleImage(Crepusculo); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Teto}/>
        <button onClick={() => {HandleImage(Teto); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={SeteMarido}/>
        <button onClick={() => {HandleImage(SeteMarido); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Morro}/>
        <button onClick={() => {HandleImage(Morro); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Atencao}/>
        <button onClick={() => {HandleImage(Atencao); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Detento}/>
        <button onClick={() => {HandleImage(Detento); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Inferno}/>
        <button onClick={() => {HandleImage(Inferno); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={PoderAgora}/>
        <button onClick={() => {HandleImage(PoderAgora); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <ModalContainer 
        isOpen={isOpen} 
        onClose={() => { 
          setIsOpen(false)}}
          card={flagImages}
          text={flagText}
          linkBuy={flagLinkBuy}
          linkGrup={flagLinkGrup}
          />
    </div>
  )
}


