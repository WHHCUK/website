import * as contentful from 'contentful-management';
import { MigrationFunction } from 'contentful-migration';

export = async function (migration, context) {
  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  return client
    .getSpace(context.spaceId)
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.createEntry('site-settings', {
        fields: { name: { 'en-US': 'Site Settings' } },
      }),
    )
    .then((entry) => entry.publish())
    .then((entry) => console.log(entry))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
} as MigrationFunction;
