import {
  graphql,
  // useStaticQuery
} from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

// import CheckIcon from '../assets/images/icons/check.svg';
// import CrossIcon from '../assets/images/icons/cross.svg';
// import NewspaperIcon from '../assets/images/icons/newspaper.svg';
// import useMailChimp, { MailChimpError } from '../hooks/useMailchimp';

// import Container from './Container';
// import CtaButton from './Form/CtaButton';
// import { H3 } from './Headings';
// import Spinner from './Spinner';

const Wrap = tw.section`bg-club-maroon-500 py-16`;

interface QueryData {
  contentfulSiteSettings: {
    newsletterHeading: string;
    newsletterText: string;
    newsletterFieldPlaceholder: string;
    newsletterSubmitText: string;
    newsletterSuccessHeading: string;
    newsletterSuccessText: string;
    newsletterErrorMsgInvalidEmail: string;
    newsletterErrorMsgAlreadySignedUp: string;
    newsletterErrorMsgUnknownError: string;
  };
}

const query = graphql`
  query NewsletterSection {
    contentfulSiteSettings(name: { eq: "Site Settings" }) {
      newsletterHeading
      newsletterText
      newsletterFieldPlaceholder
      newsletterSubmitText
      newsletterSuccessHeading
      newsletterSuccessText
      newsletterErrorMsgInvalidEmail
      newsletterErrorMsgAlreadySignedUp
      newsletterErrorMsgUnknownError
    }
  }
`;

const NewsletterSection: React.FC = () => {
  // const {
  //   contentfulSiteSettings: {
  //     newsletterHeading: heading,
  //     newsletterText: text,
  //     newsletterFieldPlaceholder: fieldPlaceholder,
  //     newsletterSubmitText: submitText,
  //     newsletterSuccessHeading: successHeading,
  //     newsletterSuccessText: successText,
  //     newsletterErrorMsgInvalidEmail: errorMsgInvalidEmail,
  //     newsletterErrorMsgAlreadySignedUp: errorMsgAlreadySignedUp,
  //     newsletterErrorMsgUnknownError: errorMsgUnknownError,
  //   },
  // } = useStaticQuery<QueryData>(query);
  // const { error, success, loading, subscribe, setEmail } = useMailChimp();

  // const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   subscribe();
  // };

  // const handleEmailUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setEmail(event.target.value);
  // };

  // const getError = (error: MailChimpError): string => {
  //   if (error === 'Invalid Email') {
  //     return errorMsgInvalidEmail;
  //   }

  //   if (error === 'Contact Exists') {
  //     return errorMsgAlreadySignedUp;
  //   }

  //   return errorMsgUnknownError;
  // };

  return null;
  // return (
  //   <Wrap>
  //     <Container>
  //       <div tw="flex flex-wrap justify-center items-center">
  //         <div tw="mb-4 w-full lg:w-auto lg:mr-8 text-center">
  //           <div tw="flex justify-center items-center p-0 mx-auto w-20 h-20 rounded">
  //             <img tw="h-full" src={NewspaperIcon} alt="" />
  //           </div>
  //         </div>
  //         <div tw="mb-6 w-full lg:w-auto max-w-lg mx-auto lg:ml-0 mr-auto text-center lg:text-left">
  //           <H3 tw="text-white mb-0">{heading}</H3>
  //           <p tw="text-gray-200">{text}</p>
  //         </div>
  //         <div tw="mx-auto w-full md:w-4/5 lg:w-2/5 min-h-32 flex justify-center items-center">
  //           {success ? (
  //             <div tw="flex space-x-4 justify-center">
  //               <div>
  //                 <img tw="pt-1 h-12 mx-auto" src={CheckIcon} />
  //               </div>
  //               <div>
  //                 <p tw="text-white text-xl font-bold">{successHeading}</p>
  //                 <p tw="text-white text-lg">{successText}</p>
  //               </div>
  //             </div>
  //           ) : (
  //             <form tw="justify-center w-full pt-4" onSubmit={handleFormSubmit}>
  //               <div tw="flex flex-col lg:flex-row w-full lg:space-x-4 space-y-4 lg:space-y-0 justify-center">
  //                 <div tw="flex-grow relative">
  //                   <input
  //                     tw="w-full py-3 px-4 text-xs rounded leading-loose"
  //                     type="email"
  //                     placeholder={fieldPlaceholder}
  //                     onChange={handleEmailUpdate}
  //                   />
  //                   <div tw="absolute right-0 top-1/2 justify-center">
  //                     {loading && (
  //                       <div tw="-mt-3 mr-3">
  //                         <Spinner />
  //                       </div>
  //                     )}
  //                     {error && (
  //                       <img
  //                         tw="h-6 -mt-3 mr-3 text-blue-400"
  //                         src={CrossIcon}
  //                       />
  //                     )}
  //                   </div>
  //                 </div>
  //                 <CtaButton type="submit">{submitText}</CtaButton>
  //               </div>
  //               <div tw="flex h-4 items-end mt-2">
  //                 {error && <p tw="text-white text-sm">{getError(error)}</p>}
  //               </div>
  //             </form>
  //           )}
  //         </div>
  //       </div>
  //     </Container>
  //   </Wrap>
  // );
};

export default NewsletterSection;
