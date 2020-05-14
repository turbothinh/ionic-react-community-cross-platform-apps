import { IonContent, IonList, IonSpinner, useIonViewDidEnter } from '@ionic/react';
import { t } from '@lingui/macro';
import React from 'react';

import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { MediumItem } from '../../components/MediumItem';
import { PreviewHeader } from '../../components/PreviewHeader';
import { useMediumQuery } from '../../graphql/operation/medium/query';

export const Medium = ({
  match: {
    params: { slug },
  },
}) => {
  const { data, loading } = useMediumQuery({
    variables: {
      slug: slug,
    },
  });

  useIonViewDidEnter(() => {
    console.log(slug);
  });

  return (
    <Layout id="medium-page">
      <IonContent fullscreen={true}>
        {loading ? (
          <div className="ion-text-center ion-padding">
            <IonSpinner color="primary" />
          </div>
        ) : (
          data && <PreviewHeader medium={data.medium} />
        )}
        {/* <IonList>
          {loading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
          ) : (
            data &&
            data.mediums.items.map(({ id, slug, title, cover, users, comments, reactions }) => (
              <MediumItem
                key={id}
                cover={cover}
                title={title}
                author={users[0]?.name}
                comments={comments?.length}
                reactions={reactions?.length}
                onClick={() => console.log('tag clicked', slug)}
              />
            ))
          )}
        </IonList> */}
      </IonContent>
    </Layout>
  );
};
