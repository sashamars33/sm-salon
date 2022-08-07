import stylistA from '../images/aykut-bingul-yXDmgBEvz78-unsplash.jpg'
import stylistB from '../images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg'
import stylistC from '../images/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg'

const Stylists = () => {
  return (
    <section className='stylists flex' id='stylists'>
      <h3>- Stylists -</h3>
      <section className='styler'>
        <img src={stylistA} alt="Hair Stylist"></img>
        <h5>Serina</h5>
        <p>Women's cuts, men's cuts, hair treaments.</p>
      </section>
      <section className='styler'>
        <img src={stylistB} alt="Hair Stylist"></img>
        <h5>Jasper</h5>
        <p>Women's cuts, Men's cuts, color</p>
      </section>
      <section className='styler'>
        <img src={stylistC} alt="Hair Stylist"></img>
        <h5>Alex</h5>
        <p>Men's cuts, women's cuts, color, hair treatments.</p>
      </section>
    </section>
  )
}

export default Stylists