import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import NotFound from '../../pages/NotFound'
import Container from '../../layout/Container'
import Loader from '../loader'
import YouTube from 'react-youtube'
import styles from './thriller.module.scss'
import { useParams } from 'react-router-dom'

function Thriller() {
    const {id} = useParams()
    const [thriller,loading,error] = useFetch('thriller',`/movie/${id}/videos`)
    if (loading || error) {
        return <Loader />
    }
  return (
    <div className={styles.thriller}>
        <Container>
            {thriller && <YouTube videoId={thriller?.results[0]?.key} opts={{width:"100%",height:"700px"}} />}
        </Container>
    </div>
  )
}

export default Thriller