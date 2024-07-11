import React, { useRef } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  // Create a ref for the contact form section
  const contactFormRef = useRef(null);

  // Function to scroll to the contact form section
  const scrollToForm = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Soyez Autonome et Rentable <HighlightedText>Avec Nos Citernes <br/> de 500L ou Sur Mesure.</HighlightedText></>}
        description="Découvrez nos citernes de haute qualité, personnalisables pour répondre à tous vos besoins de stockage de liquide."
        imageSrc="https://media.istockphoto.com/id/511943486/photo/water-storage-tanks.jpg?s=612x612&w=0&k=20&c=pSs2Hewh5QzjWyl1n0X9Ihp0AXWYBtTUYddLwmCd6-4="
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Commander Maintenant"
        watchVideoButtonText="Voir la Vidéo"
        scrollToForm={scrollToForm} // Pass the scrollToForm function as a prop to Hero component
      />
      <MainFeature
        subheading={<Subheading>Établi Depuis 2014</Subheading>}
        heading={
          <>
            Nous servons depuis
            <wbr /> <HighlightedText>plus de 5 ans.</HighlightedText>
          </>
        }
        description={
          <Description>
            Depuis plus de cinq ans, nous fournissons des citernes de qualité supérieure, adaptées à vos besoins spécifiques.
            <br />
            <br />
            Contactez-nous pour des solutions sur mesure et profitez de notre expertise en matière de stockage de liquide.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Dernières Offres"
        imageSrc={
          "https://media.istockphoto.com/id/1650987195/photo/water-storage-tank-and-prefabricated-industrial-building.webp?b=1&s=170667a&w=0&k=20&c=sK3qsRXk3axyWcAQ4Bdq7qIar97k3-K9D6AGZC1Q7eU="
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Découvrez notre <HighlightedText>catalogue.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Services <HighlightedText>Exceptionnels.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Localisations",
            description: "Nous sommes présents dans plus de 230 endroits pour mieux vous servir.",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professionnels Qualifiés",
            description: "Nos experts sont à votre disposition pour vous conseiller et vous accompagner.",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Solutions Personnalisées",
            description: "Nous offrons des solutions sur mesure adaptées à vos besoins spécifiques.",
            url: "https://reddit.com"
          }
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>Une Marque Réputée</Subheading>}
        heading={<>Pourquoi <HighlightedText>Nous Choisir ?</HighlightedText></>}
        statistics={[
          {
            key: "Commandes",
            value: "94000+",
          },
          {
            key: "Clients Satisfaits",
            value: "11000+"
          },
          {
            key: "Experts",
            value: "1500+"
          }
        ]}
        primaryButtonText="Commander Maintenant"
        primaryButtonUrl="/#"
        imageInsideDiv={false}
        imageSrc="https://www.vectus.in/blog/wp-content/uploads/2022/04/blue-scaled.jpeg"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
        scrollToForm={scrollToForm} // Pass the scrollToForm function as a prop to MainFeature2 component
      />
      <Testimonial
        subheading=""
        heading={<>Nos Clients <HighlightedText>Nous Adorent.</HighlightedText></>}
      />
      {/* ContactUsForm component rendered directly */}
      <div ref={contactFormRef} id="contact-form-section">
        <ContactUsForm />
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};
