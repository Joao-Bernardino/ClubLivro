import logo from '../../assets/Logo-png.png'

import './styles.css'

export function Sidebar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo Book lovers" />
      </div>
      <p>Esse não é um simples site de livros, e sim um site no qual todos os amantes de livros podem interagir uns com os outros compartilhando da mesma paixão!</p>
    </nav>
  )
}