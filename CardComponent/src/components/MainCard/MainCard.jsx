import './MainCard.css'
import avatar from '../../assets/images/image-victor.jpg'
function MainCard(){
    return(
       <div id="maincard">
        <div id="header">
            <img src={avatar}/>

        </div>
        <div id='content'>
            <div id='info'>
                <h1 id='name'>Victor Crest<span>26</span></h1>
                <label>London</label>
            </div>
            <div className="line"></div>
            <div id='bottom'>
                <div className='number'>
                    <h1 className='first'>80K</h1>
                    <label>Followers</label>
                </div>
                <div className='number'>
                    <h1 className='first'>803K</h1>
                    <label>Likes</label>
                </div>
                <div className='number'>
                    <h1 className='first'>1.4K</h1>
                    <label>Photos</label>
                </div>

            </div>

        </div>

       </div>
    )
}
export default MainCard