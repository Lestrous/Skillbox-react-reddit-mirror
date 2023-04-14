import React from 'react';
import styles from './preview.scss';

export interface IPreviewProps {
  previewSrc?: string;
}

export function Preview({ previewSrc }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={
          previewSrc ??
          'https://cdn.dribbble.com/userupload/4251831/file/original-f8b022406c012a162be1216be0fdc22d.png?compress=1&resize=800x600&vertical=top'
        }
        alt="card picture"
      />
    </div>
  );
}
