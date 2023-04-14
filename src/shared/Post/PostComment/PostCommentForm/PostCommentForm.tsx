import React, { ChangeEvent, FormEvent, useRef } from 'react';
import styles from './postcommentform.scss';

interface IPostCommentFormProps {
  authorName: string;
  setFocus?: number;
}

export function PostCommentForm({
  authorName,
  setFocus,
}: IPostCommentFormProps) {
  const [value, setValue] = React.useState(`${authorName}, `);
  const ref = useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    ref.current?.focus();
  }, [setFocus]);

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleTextareaFocus() {
    if (ref.current) {
      const { value } = ref.current;

      if (value) {
        ref.current.value = '';
        ref.current.value = value;
      }
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        ref={ref}
        onFocus={handleTextareaFocus}
        onChange={handleTextareaChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
