import maozinha from '../images/maozinha.jpg'
import {Row,Col} from 'reactstrap'
import React from 'react';
export const Footer = (props)=>{

  return (
      <div className='w-100'>
        <Row tag={"footer"} id='footer' >
            <Col sm={{size:4}} className='d-flex justify-content-center align-items-center'>
                <p>Rua Genérica n°123<br/>Centro-Santo André </p>
            </Col>
            <Col sm={{size:4}} className='d-flex justify-content-center align-items-center'>
                <p>contato@Empresax.com</p>
            </Col>
            <Col sm={{size:4}} className='d-flex justify-content-center align-items-center'>
                <p>+55 11 3564-3099</p>
            </Col>
        </Row>
      </div>

  );
}

export default Footer;