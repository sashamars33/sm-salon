import styleA from '../images/justin-essah-8bPw733XN-g-unsplash.jpg'
import styleB from '../images/oladimeji-odunsi-n5aE6hOY6do-unsplash.jpg'
import styleC from '../images/alexander-krivitskiy-1f7WL1qrrdE-unsplash.jpg'
import styleD from '../images/alex-sheldon-Zg14Kx1XVsc-unsplash.jpg'
import styleE from '../images/ayo-ogunseinde-UqT55tGBqzI-unsplash.jpg'
import styleF from '../images/nate-miles-JgRKQ5ytqlM-unsplash.jpg'
import styleH from '../images/vinicius-amnx-amano-VFZF_pzTVBA-unsplash.jpg'
import styleG from '../images/yoann-boyer-D7qzQ234N0o-unsplash.jpg'


const Styles = () => {
  return (
    <section className='styles'>
        <section className='styleGalleryA flex'>
            <img src={ styleA } alt="Haircut style one"></img>
            <img src={ styleB } alt="Haircut style two"></img>
            <img src={ styleC } alt="Haircut style three"></img>
            <img src={ styleD } alt="Haircut style four"></img>
            <img src={ styleE } alt="Haircut style five"></img>
        </section>
        <section className='styleGalleryB flex'>
            <img src={ styleF } alt="Haircut style six"></img>
            <img src={ styleG } alt="Haircut style seven"></img>
            <img src={ styleH } alt="Haircut style eight"></img>

        </section>
        <h3 id='styles'>- Styles -</h3>
    </section>
  )
}

export default Styles