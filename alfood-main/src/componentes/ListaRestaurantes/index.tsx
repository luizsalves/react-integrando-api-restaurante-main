import axios from 'axios';
import { useEffect } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

  const restaurantes: IRestaurante[] = [
    {
      id: 1,
      nome: "Lyllys Cafe",
      pratos: [
        {
          id: 1,
          descricao: 'Lasanha à Bolonhesa',
          imagem: '/imagens/lasanha.png',
          nome: 'Lasanha',
          restaurante: 1,
          tag: 'Italiana'
        },
        {
          id: 2,
          descricao: 'Strogonoff de Frango à brasileira',
          imagem: '/imagens/strogonofe.jpg',
          nome: 'Strogonoff',
          restaurante: 1,
          tag: 'Russa'
        },
        {
          id: 3,
          descricao: 'Empadão de Frango',
          imagem: '/imagens/empadao.jpg',
          nome: 'Empadão de Frango',
          restaurante: 1,
          tag: 'Portuguesa'
        }
      ]
    },
    {
      id: 2,
      nome: "Sugiro Sushi",
      pratos: [
        {
          id: 1,
          descricao: 'Combinado de 8 peças',
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
          nome: 'Sushi',
          restaurante: 1,
          tag: 'Japonesa'
        },
        {
          id: 2,
          descricao: 'Sashimi de Salmão',
          imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
          nome: 'Sashimi',
          restaurante: 1,
          tag: 'Japonesa'
        }
      ]
    },
    {
      id: 3,
      nome: "Cantina da Escola",
      pratos: [
        {
          id: 1,
          descricao: 'Salgado de queijo com presunto',
          imagem: '/imagens/queijo.jpg',
          nome: 'Quejunto',
          restaurante: 1,
          tag: 'Lanche'
        },
        {
          id: 2,
          descricao: 'Coxinha de Frango',
          imagem: '/imagens/coxinha.jpg',
          nome: 'Coxinha',
          restaurante: 1,
          tag: 'Lanche'
        },
        {
          id: 3,
          descricao: 'Risole de Palmito',
          imagem: '/imagens/risole.png',
          nome: 'Risole',
          restaurante: 1,
          tag: 'Lanche'
        }
      ]
    }
  ]

  useEffect(() => {
    // obter restaurantes da API
    axios.get('/api/v1/restaurantes/')
      .then(resposta => 
        console.log(resposta))
      
      .catch(erro => {
        console.log(erro)
      })

  }, [])

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
  </section>)
}

export default ListaRestaurantes
