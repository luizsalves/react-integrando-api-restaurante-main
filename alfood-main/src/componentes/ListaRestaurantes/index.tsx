import axios from 'axios';
import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import { IPaginacao } from '../../interfaces/IPaginacao';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  const [proximapagina, setProximaPagina] = useState('')

  useEffect(() => {
    // obter restaurantes da API
    axios.get < IPaginacao<IRestaurante>('/api/v1/restaurantes/')
      .then(resposta => {
        setRestaurantes(resposta.data.results)
        setproximaPagina(resposta.data.next)
      })
      .catch(erro => {
        console.log(erro)
      })

  }, [])

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas 4</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {proximaPagina && <button>
      ver mais
    </button>}
  </section>)
}

export default ListaRestaurantes
