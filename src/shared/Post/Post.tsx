import React, { useEffect, useRef } from 'react';
import styles from './post.scss';
import { createPortal } from 'react-dom';
import { PostComment } from './PostComment';
import { usePostCommentsData } from '../../hooks/usePostCommentsData';
import { CommentFormContainer } from '../CommentFormContainer';
import { useNavigate, useParams } from 'react-router-dom';

export function Post() {
  const { subreddit = '', postId = '' } = useParams();
  const [commentsData] = usePostCommentsData({ subreddit, postId });
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const { target } = event;

      if (target instanceof Node && !ref.current?.contains(target)) {
        navigate('/posts/');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  const node = document.querySelector('#modal_root');

  if (!node) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>
        Следует отметить, что новая модель организационной деятельности поможет
      </h2>

      <div className={styles.content}>
        <p>
          Есть над чем задуматься: тщательные исследования конкурентов
          представляют собой не что иное, как квинтэссенцию победы маркетинга
          над разумом и должны быть ассоциативно распределены по отраслям.
          Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники
          тоталитаризма в науке и по сей день остаются уделом либералов, которые
          жаждут быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
        </p>
        <p>
          Безусловно, глубокий уровень погружения создаёт необходимость
          включения в производственный план целого ряда внеочередных мероприятий
          с учётом комплекса системы массового участия. Внезапно, сделанные на
          базе интернет-аналитики выводы освещают чрезвычайно интересные
          особенности картины в целом, однако конкретные выводы, разумеется,
          описаны максимально подробно.
        </p>
        <p>
          Разнообразный и богатый опыт говорит нам, что выбранный нами
          инновационный путь обеспечивает широкому кругу (специалистов) участие
          в формировании новых принципов формирования материально-технической и
          кадровой базы. Также как существующая теория в значительной степени
          обусловливает важность благоприятных перспектив. Для современного мира
          консультация с широким активом однозначно определяет каждого участника
          как способного принимать собственные решения касаемо приоритизации
          разума над эмоциями!
        </p>
        <p>
          Вот вам яркий пример современных тенденций - постоянный количественный
          рост и сфера нашей активности обеспечивает актуальность
          глубокомысленных рассуждений! Не следует, однако, забывать, что
          высококачественный прототип будущего проекта предполагает независимые
          способы реализации дальнейших направлений развития.
        </p>
      </div>

      <CommentFormContainer />

      <div className={styles.commentsContainer}>
        {commentsData.map((commentData) => (
          <PostComment key={commentData.commentId} {...commentData} />
        ))}
      </div>
    </div>,
    node
  );
}
