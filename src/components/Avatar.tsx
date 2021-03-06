import GatsbyImage from 'gatsby-image';
import React from 'react';
import tw from 'twin.macro';

import { Member } from '../utils/contentful';

const Container = tw.div`flex items-center my-4`;
const ImageContainer = tw.div`mr-4`;
const Image = tw(GatsbyImage)`w-20 h-20 object-cover object-top rounded-full`;
const Text = tw.div`text-left`;
const Name = tw.span`text-gray-500 font-bold`;
const Role = tw.p`block text-sm text-gray-500 font-semibold mb-0`;
const Email = tw.a`block text-xs text-accent-500 font-semibold`;

interface Props {
  member: Member;
}

export const Avatar: React.FC<Props> = ({ member }) => (
  <Container>
    <ImageContainer>
      <Image fluid={member.avatar.fluid} />
    </ImageContainer>
    <Text>
      {member.email ? (
        <a href={`mailto:${member.email}`}>
          <Name>{member.name}</Name>
        </a>
      ) : (
        <p>
          <Name>{member.name}</Name>
        </p>
      )}

      <Role>{member.role}</Role>
      <Email href={`mailto:${member.email}`}>{member.email}</Email>
    </Text>
  </Container>
);

export default Avatar;
