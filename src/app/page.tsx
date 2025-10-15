"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { id: "heroImage", url: "https://images.pexels.com/photos/34297248/pexels-photo-34297248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "biscuits" },
  { id: "aboutImage", url: "https://images.pexels.com/photos/5588985/pexels-photo-5588985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two freshly baked baguettes on a white surface, showcasing golden crispy crust." },
  { id: "productImage", url: "https://images.pexels.com/photos/1366710/pexels-photo-1366710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a decadent coffee and walnut layered cake slice on a plate." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Local Bakery"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Welcome to Our Bakery"
            description="Fresh pastries and breads baked daily."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url}
            buttons={[
              { text: "See Our Products", href: "products" },
              { text: "Visit Us", href: "contact" }
            ]}
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            bulletPoints={[
              { title: "Artisan Quality", description: "Our breads are handmade with love and care.", icon: "Award" },
              { title: "Local Ingredients", description: "Sourced from local farms and gardens.", icon: "Leaf" }
            ]}
            imageSrc={assetMap.find(a => a.id === 'aboutImage')?.url}
            className="bg-pink-100"
            bulletTitleClassName="text-gray-800"
            bulletDescriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <ProductCardOne
            products={[
              { id: "1", name: "Sourdough Bread", price: "$4", imageSrc: assetMap.find(a => a.id === 'productImage')?.url },
              { id: "2", name: "Croissant", price: "$3", imageSrc: assetMap.find(a => a.id === 'productImage')?.url },
              { id: "3", name: "Cupcake", price: "$2", imageSrc: assetMap.find(a => a.id === 'productImage')?.url }
            ]}
            className="bg-pink-100"
            cardNameClassName="text-gray-800"
            cardPriceClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Visit Us"
            title="Contact Our Bakery"
            description="Drop by our store or contact us for inquiries."
            imageSrc={assetMap.find(a => a.id === 'aboutImage')?.url}
            onSubmit={(email) => console.log(email)}
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterLogoEmphasis
            columns={[
              { items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Products", href: "products" },
                { label: "Contact", href: "contact" }
              ] }
            ]}
            logoText="Local Bakery"
            className="bg-pink-100"
            itemClassName="text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}