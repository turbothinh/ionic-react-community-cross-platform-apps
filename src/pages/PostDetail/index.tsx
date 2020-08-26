import './index.min.css';

import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import PostItem, { postItems } from 'components/molecules/PostItem';
import PostComments from 'components/organisms/PostComments';
import PostReactions from 'components/organisms/PostReactions';
import faker from 'faker';
import { expand } from 'ionicons/icons';
import React from 'react';

type Props = {
  history: any;
};

const PostDetail = ({ history }: Props) => {
  const goToProfile = () => {
    history.push('/profile');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="border-0" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={expand} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {postItems.map((post, i) => (
          <PostItem
            key={i}
            onClickDetail={post.onClickDetail}
            onClickProfile={post.onClickProfile}
            reactionCount={post.reactionCount}
            commentCount={post.commentCount}
            summary={post.summary}
            editTimestamp={post.editTimestamp}
            avatar={post.avatar}
            badge={post.badge}
            firstName={post.firstName}
            cover={post.cover}
          />
        ))}
        <PostReactions />
        <PostComments />
      </IonContent>

      <IonFooter className="footer-shadow border-0">
        <IonToolbar>
          <IonButtons slot="start">
            <IonAvatar className="toolbar-avatar thumbnail-tiny">
              <img src={faker.image.avatar()} alt="" />
            </IonAvatar>
          </IonButtons>

          <IonInput type="text" placeholder="Leave your thoughts here..."></IonInput>

          <IonButtons slot="end">
            <IonButton fill="clear" color="medium">
              <strong>Post</strong>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default PostDetail;
