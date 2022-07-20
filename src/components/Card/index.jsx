import './styles.css'


export default function Card(img) {

  return (
    <>
      <div className="card">
        <img src={img.img} alt="" />
      </div>
    </>
  )
}