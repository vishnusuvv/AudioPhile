import { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import React from "react";
import Slider from "react-slick";


class App extends Component{
  constructor(){
   
    super();
    this.state={
      searchString:'',
      music:[
        {
          id:"101",
          title:"Moonlight",
          artist:'Xxxtentacion', 
          img:"https://i1.sndcdn.com/artworks-rSEEltQjAGDF9HwW-VQ83Lw-t500x500.jpg", 
          alt:"Xxxtentacion-Moonlight", 
          sourceType:"audio/mpeg",
          src:"https://tumundomusical.com/music/2021/11/Xxxtentacion_-_Moonlight.mp3?_=2",
          aHref:'https://tumundomusical.com/music/2021/11/Xxxtentacion_-_Moonlight.mp3'
        },{
          id:"102",
          title:"Enemies (Feat. DaBaby)",
          artist:'Post Malone', 
          img:"https://i1.sndcdn.com/artworks-000662026513-uqlxuz-t500x500.jpg", 
          alt:"Post Malone - Enemies (Feat. DaBaby)", 
          sourceType:"audio/mpeg",
          src:"https://store.naijasturf.com.ng/music/2022/06/Post_Malone_Feat_DaBaby_-_Enemies.mp3?_=1",
          aHref:'https://store.naijasturf.com.ng/music/2022/06/Post_Malone_Feat_DaBaby_-_Enemies.mp3'
        },{
          id:"103",
          title:"God's Plan",
          artist:'Drake', 
          img:"https://tunezjam.com/images/Drake-God's-Plan-ArtWork.jpg", 
          alt:"Drake - God's Plan", 
          sourceType:"audio/mpeg",
          src:"https://olagist.net/wp-content/uploads/2018/01/Drake_-_Gods_Plan_Olagist.co_.mp3?_=1",
          aHref:'https://olagist.net/wp-content/uploads/2018/01/Drake_-_Gods_Plan_Olagist.co_.mp3'
        },{
          id:"104",
          title:"Pasoori",
          artist:'Ali Sethi', 
          img:"https://a10.gaanacdn.com/images/albums/17/5248417/crop_480x480_5248417.jpg", 
          alt:"Ali Sethi-Pasoori", 
          sourceType:"audio/mpeg",
          src:"https://pwdown.com/113604/Pasoori - Shae Gill.mp3",
          aHref:'https://pwdown.com/113604/Pasoori - Shae Gill.mp3'
        },{
          id:"105",
          title:"Jalebi Baby",
          artist:'Tesher', 
          img:"https://cdnb.artstation.com/p/assets/images/images/048/724/797/large/lohith-jay-jason-derulo.jpg?1650781147", 
          alt:"Tesher-Jalebi Baby", 
          sourceType:"audio/mpeg",
          src:"https://pwdown.com/113510/Jalebi Baby - Tesher.mp3",
          aHref:'https://pwdown.com/113510/Jalebi Baby - Tesher.mp3'
        },{
          id:"106",
          title:"Friends",
          artist:'Anne Marie x Marshmello', 
          img:"https://pbs.twimg.com/media/Dllgpi6VsAAxgJM.jpg", 
          alt:"Anne Marie x Marshmello - Friends", 
          sourceType:"audio/mpeg",
          src:"https://olagist.net/wp-content/uploads/2018/02/Marshmello_Anne-Marie_-_Friends_Olagist.co_.mp3?_=1",
          aHref:'https://olagist.net/wp-content/uploads/2018/02/Marshmello_Anne-Marie_-_Friends_Olagist.co_.mp3'
        },
      ]
    };
    
  } 
  searchFunc = (event) => {
    // console.log(event.target.value)
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchString
      };
    });
  }
  findTitle= (event) => {
    const key = event.target.getAttribute('data-key')
    const cards = document.querySelectorAll('.card-title')
   

    cards.forEach(card => {
      const cardKey = card.getAttribute('data-key')

      const cardId = parseInt(card.parentElement.parentElement.parentElement.parentElement.getAttribute('data-index')) + 101 ;
      if(key == cardKey && key == cardId) {
        this.slider.App(event.target.value)
       
        // const slides = document.querySelectorAll('.slick-slide')
        // slides.forEach(slide => {
        //   const slideId = parseInt(slide.getAttribute('data-index')) + 101
        //   if(cardId == slideId ){
        //     const exisitingSlick = document.querySelectorAll('.slick-active')
        //     exisitingSlick.forEach(slick => {
        //       slick.classList.remove('slick-active','slick-current','slick-center')
              
        //       slick.setAttribute('aria-hidden','true')
              
        //     });
        //     console.log(slideId+'as'+slide)
        //     console.log(slide.previousElementSibling)
        //     slide.previousElementSibling.classList.add('slick-active','slick-current')
        //     slide.classList.add('slick-active','slick-current','slick-center')
        //     slide.nextSibling.classList.add('slick-active','slick-current')

        //     slide.previousElementSibling.setAttribute('aria-hidden','false')
        //     slide.setAttribute('aria-hidden','false')
        //     slide.nextSibling.setAttribute('aria-hidden','false')
            
        //   }
          
          
          
        // });
        
        
      }
      
    });


    console.log(key);

  }
  render(){
    const filterList = this.state.music.filter((music) => {
      return music.title.toLocaleLowerCase().includes(this.state.searchString);
    }); 
    
    
    const settings = {
      infinite: true,
      slidesToShow: 3,
      swipeToSlide:true,
      slidesToScroll: 3,
      centerMode: true,
      focusOnSelect:true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows:false,
            dots:true
          }
        }
      ],
      afterChange: () =>{
        const audio = document.querySelectorAll('.slick-active .card-playback')
        audio.forEach(play => {
          play.pause()
        });
        

      },
      beforeChange: () =>{
        const audio = document.querySelectorAll('.slick-active .card-playback')
        audio.forEach(play => {
          play.pause()
        });
      },
      

    };
    

    return (
      <div className="App">
        <header className="App-header">
          <div className='search-container'>
            <div className='search-display'>Search</div>
            
            <div className="search">
                <input placeholder="Enter" className='search-box' type='search-box' onChange={this.searchFunc}/>
                <svg className="search-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/></g></svg>
            </div>
            <div className='search-list'>
            {
              filterList.map((music) => {
                return(
                
                  <h5 onClick ={this.findTitle} className='search-title' data-key={music.id} title={music.title}>{music.title}</h5>
                
                )
              })
            }
            </div>

          </div>
        <div className="container">
          <div className='title'>
          <h1> Audio<span>Phile</span></h1>
          {/* <img src='https://i.ibb.co/TTy4VHq/Screenshot-2022-07-21-144444-removebg-preview-removebg-preview-1.png'/>   */}
          </div> 
          <div className="wrapper">
          <Slider {...settings}>
              
            {this.state.music.map((music) => { 
              return(
                <div key={music.id}>
                
                  <div className="card">
                    <h3 className="card-title" data-key={music.id}>{music.title}</h3>
                    <div className='card-img'>
                      <img src={music.img} className="" alt={music.alt} title={music.alt} /> 
                    </div> 
                    <h5 className="card-artist"><span>Artist : </span> {music.artist}</h5> 
                    <audio className='card-playback'  controls>
                      <source src={music.src} type={music.sourceType}></source>
                      Your browser does not support the audio element.
                    </audio>
                    
                  </div>
              </div> 
            )    
            })}
          </Slider>
          </div>
      </div>
      <div className="">
     
              <div className="footer-wave">
                  <svg className="waves" 
                      viewBox="0 24 150 28" preserveAspectRatio="none" >
                      <defs>
                          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                      </defs>
                      <g className="parallax">
                          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                          <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                      </g>
                  </svg>
              </div>
      </div>
        </header>
        
      </div>
    );
  }
}

export default App;
