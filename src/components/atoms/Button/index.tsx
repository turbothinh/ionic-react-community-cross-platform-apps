import { JSX } from '@ionic/core';
import { IonBackButton, IonButton, IonButtons } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type ButtonProps = JSX.IonButton & HTMLAttributes<HTMLIonButtonElement>;
type BackButtonProps = JSX.IonBackButton & HTMLAttributes<HTMLIonBackButtonElement>;
type ButtonGroupProps = JSX.IonButtons & HTMLAttributes<HTMLIonButtonsElement>;

/**
 * Components
 */
export const Button = (props: ButtonProps) => {
  return <IonButton {...props}>{props.children}</IonButton>;
};

export const ButtonBack = (props: BackButtonProps) => {
  return <IonBackButton {...props}>{props.children}</IonBackButton>;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <IonButtons {...props}>{props.children}</IonButtons>;
};
