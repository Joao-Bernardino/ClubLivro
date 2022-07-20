import { Main } from "./components/Main";
import './styles.css'

import Modal from "react-modal";
import { Sidebar } from "./components/Sidebar";
Modal.setAppElement('#root')


export function App() {
  return (
    <div className="main-content">
      <Sidebar/>
      <Main />
    </div>
  );
}