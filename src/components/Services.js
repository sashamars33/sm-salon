import servicesImg from '../images/nordwood-themes-bIugCleCY84-unsplash.jpg'



const Services = () => {
  return (
    <section className='services grid' id='services'>
      <h3>- Services -</h3>
      <img src={ servicesImg } alt="A nice haircut"></img> 
      <ul>
        <li><h4>Color Services</h4></li>
        <li>Roots Only - $100</li>
        <li>Minimal Highlights - $70</li>
        <li>Partial Foil Highlight/ Bayalage - $200</li>
        <li>Full Foil Highlight/ Bayalage - $275</li>
      </ul>
      <ul>
        <li><h4>Conditioning Services</h4></li>
        <li>Kerastase Treatment - $30</li>
        <li>Olaplex Treatment - $70</li>
        <li>Keratin Smoothing Treatment - $400</li>
      </ul>
      <ul>
        <li><h4>Cuts &amp; Styles</h4></li>
        <li>Women's Haircut - $70</li>
        <li>Men's Haircut - $50</li>
        <li>Hair Extensions - $200</li>
      </ul>
    </section>
  )
}

export default Services