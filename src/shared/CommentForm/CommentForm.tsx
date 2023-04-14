import React, { ChangeEvent } from 'react';
import styles from './commentform.scss';
import { useForm } from 'react-hook-form';

interface ICommentFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

export function CommentForm({ value, onChange, onSubmit }: ICommentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: value,
    },
  });
  const onSubmitForm = () => onSubmit();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
      <textarea
        className={styles.input}
        {...register('text', { required: true, minLength: 4 })}
        onChange={onChange}
        aria-invalid={errors.text ? 'true' : undefined}
      />
      {errors.text && <p>Введите больше 3-х символов</p>}

      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
