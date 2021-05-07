import * as aws from '@pulumi/aws';

import getDomainAndSubdomain from './get-domain-and-subdomain';

function createAliasRecord(targetDomain: string, distribution: aws.cloudfront.Distribution): aws.route53.Record {
  const domainParts = getDomainAndSubdomain(targetDomain);
  
  const hostedZoneId = aws.route53
    .getZone({ name: `${domainParts.domain}.` }, { async: true })
    .then((zone) => zone.zoneId);

  return new aws.route53.Record(targetDomain, {
    name: domainParts.subdomain,
    zoneId: hostedZoneId,
    type: 'A',
    aliases: [
      {
        name: distribution.domainName,
        zoneId: distribution.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  });
}

export default createAliasRecord;