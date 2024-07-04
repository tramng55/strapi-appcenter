import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentApp extends Schema.Component {
  collectionName: 'components_component_apps';
  info: {
    displayName: 'App';
    description: '';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.String;
    code: Attribute.String;
    imageUrl: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    apps: Attribute.Relation<'component.app', 'oneToMany', 'api::app.app'>;
  };
}

export interface ComponentEnv extends Schema.Component {
  collectionName: 'components_component_envs';
  info: {
    displayName: 'Env';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    code: Attribute.String;
    apps: Attribute.Relation<'component.env', 'oneToMany', 'api::app.app'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.app': ComponentApp;
      'component.env': ComponentEnv;
    }
  }
}
