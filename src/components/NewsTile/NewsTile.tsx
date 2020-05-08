import React, { FC } from 'react';

// import { INewsTileList } from './NewsTileList.types'

// import styles from './NewsTileList.module.scss';


// const NewsTile: FC<IINewsTileUser> = ({table}) => {
const NewsTile = (props: any) => {
  const {title, data, description} = props

  return (
    <div>
      tytul: {title}<br/>
      data: {data}<br/>
      opis: {description}
    </div>
  )
}

NewsTile.displayName = "NewsTile";

export default NewsTile

