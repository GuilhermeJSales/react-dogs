import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'


const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options)
  },[photo, request]);

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) setModalPhoto(null)
}

  return (
    <div onClick={handleOutsideClick} className={styles.modal}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
      
    </div>
  )
}

export default FeedModal