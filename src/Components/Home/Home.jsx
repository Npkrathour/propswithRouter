import Product from "../Products/Product";
import productImage1 from "../images/card-1.jpg";
import productImage2 from "../images/card-2.jpg";
import productImage3 from "../images/card-3.jpg";
import productImage4 from "../images/card-4.jpg";

function Home() {
  return (
    <div className="">
      <div className="py-5 text-center">
        <h1 className="text-4xl font-semibold">Home section Start Here</h1>
      </div>
      <div className="w-[1440px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-between items-center gap-2 mx-auto overflow-hidden my-3">
        <Product
          cardImage={productImage1}
          title="A Beginner’s Guide to React"
          paragraph="Just starting out with React? This guide breaks down the fundamentals, helping you build your first React application with ease. Perfect for newcomers to the framework."
          btnText="Start Learning"
          btnLink="https://yourwebsite.com/guide-to-react"
        />
        <Product
          cardImage={productImage2}
          title="Understanding CSS Grid Layout"
          paragraph="CSS Grid Layout is revolutionizing the way we design web pages. Learn how to create complex layouts with ease using this powerful tool in modern web development."
          btnText="Explore Now"
          btnLink="https://yourwebsite.com/css-grid-layout"
        />
        <Product
          cardImage={productImage3}
          title="Best Practices for Responsive Web Design"
          paragraph="Ensuring your website looks great on all devices is crucial. This blog covers best practices for responsive web design, ensuring a seamless user experience across screens."
          btnText="Learn More"
          btnLink="https://yourwebsite.com/responsive-web-design"
        />
        <Product
          cardImage={productImage4}
          title="The Future of Web Development in 2024"
          paragraph="What does the future hold for web development? From AI integration to new frameworks, explore the trends that will shape the web development landscape in 2024 and beyond."
          btnLink="https://yourwebsite.com/future-web-development-2024"
        />
        <Product
          cardImage={productImage4}
          title="The Future of Web Development in 2024"
          paragraph="What does the future hold for web development? From AI integration to new frameworks, explore the trends that will shape the web development landscape in 2024 and beyond."
          btnLink="https://yourwebsite.com/future-web-development-2024"
        />
        <Product
          cardImage={productImage3}
          title="The Future of Web Development in 2024"
          paragraph="What does the future hold for web development? From AI integration to new frameworks, explore the trends that will shape the web development landscape in 2024 and beyond."
          btnLink="https://yourwebsite.com/future-web-development-2024"
        />
        <Product
          cardImage={productImage2}
          title="The Future of Web Development in 2024"
          paragraph="What does the future hold for web development? From AI integration to new frameworks, explore the trends that will shape the web development landscape in 2024 and beyond."
          btnLink="https://yourwebsite.com/future-web-development-2024"
        />
        <Product
          cardImage={productImage1}
          title="The Future of Web Development in 2024"
          paragraph="What does the future hold for web development? From AI integration to new frameworks, explore the trends that will shape the web development landscape in 2024 and beyond."
          btnLink="https://yourwebsite.com/future-web-development-2024"
        />
      </div>
    </div>
  );
}

export default Home;
