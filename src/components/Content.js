import maozinha from '../images/maozinha.jpg'
import maozinhaMenor from '../images/maozinhaMenor.jpg'
import {Row,Col,Button} from 'reactstrap'
import React,{useState} from 'react';
export const Content = (props)=>{
    let [open,setOpen] = useState(false)
  return (
    <div className='container-sm mt-2' >
        <h5 id='title'>
            A EMPRESA
        </h5>
        <div className='box1'>
            <div><img src={maozinha} /></div>
            <div className='d-flex flex-column align-items-center'>
                <p className='paragraf'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus non quisquam voluptatibus commodi adipisci vitae assumenda debitis facere voluptates, fugit, dolorum accusamus. Expedita eligendi illum nemo tempore illo quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum voluptatibus error, nulla cumque incidunt eos voluptatem maxime veritatis cupiditate sunt ex, beatae voluptates illo impedit odio laboriosam expedita eum! </p>
                <button className='botaoAmarelo' > 
                    SAIBA MAIS &gt;&gt;
                </button>
            </div>
        </div>
        <div className='box2'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat at quae exercitationem dolor officia esse quasi iste maiores, fugit soluta, earum aliquid vero repudiandae cum perspiciatis. Nulla, amet repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod asperiores fugiat, temporibus sunt fuga. Nemo, earum repellat beatae debitis eveniet officiis tempore. Harum iusto rerum, praesentium est distinctio quis.</p>
                <button className='botaoAmarelo'  onClick={()=>setOpen(!open)}> 
                    VEJA NOSSA EQUIPE  &gt;&gt;
                </button>
                
                <div className={open?'album':'album close'}>
                    <img src={maozinhaMenor} className='albumitem'/>
                    <img src={maozinhaMenor} className='albumitem'/>
                    <img src={maozinhaMenor} className='albumitem'/>
                </div>
            </div>

    </div>
  );
}

export default Content;
